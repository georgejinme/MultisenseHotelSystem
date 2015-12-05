/**
  Common view
*/

var SideBar = React.createClass({
  render: function(){
    var handle = this.props.navClickHandle
    var type = []
    for (var i = 0; i < this.props.functions.length; ++i){
      if (i == this.props.activeFunc){
        type.push("active")
      }else{
        type.push("nonactive")
      }
    }
    return (
        <div className="col-sm-3 col-md-3 col-lg-3 sidebar">
          <div className="userInfo">
            <img src="/static/img/2.jpg" className="img-circle"></img>
            <p>{this.props.userName}</p>
          </div>
          <ul className="nav nav-sidebar">
            {
              this.props.functions.map(function(i, index){
              return (
                <li className={type[index]} onClick = {handle}><a id = {index} href="#">{i}</a></li>
              )})
            }
            <li className="nonactive" onClick = {handle}><a id = {type.length} href="#">Log Out</a></li>
          </ul>
        </div>
    )
  },
})

var Main = React.createClass({
  render:function(){
    if (this.props.currentFunc == "Overview"){
      return (
        <div className = "col-sm-9 col-md-9 col-lg-9 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 main">
          <Overview />
        </div>
      )
    }else if (this.props.currentFunc == "Reservation"){
      return (
        <div className = "col-sm-9 col-md-9 col-lg-9 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 main">
          <CustomerReservation />
        </div>
      )
    }else if (this.props.currentFunc == "Sales Info"){
      return (
        <div className = "col-sm-9 col-md-9 col-lg-9 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 main">
          <ManagerSalesInfo />
        </div>
      )
    }else if (this.props.currentFunc == "Human Resources"){
      return (
        <div className = "col-sm-9 col-md-9 col-lg-9 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 main">
          <ManagerHumanResources />
        </div>
      )
    }else{
      return (
        <div className = "col-sm-9 col-md-9 col-lg-9 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 main">
        </div>
      )
    }
  }
})


var HomePage = React.createClass({
  getInitialState:function(){
    return {
      username: "NULL",
      functions: ["Overview", "Reservation", "Recommendation", "Meals", "My Info"],
      activeFunc: 0
    }
  },
  render: function() {
    return (
      <div className = "container-fluid">
        <div className="row">
          <SideBar
            functions = {this.state.functions}
            userName = {this.state.username}
            navClickHandle = {this.navClickHandle}
            activeFunc = {this.state.activeFunc}
          ></SideBar>
          <Main
            currentFunc = {this.state.functions[this.state.activeFunc]}
          ></Main>
        </div>
      </div>
    )
  },

  componentWillMount:function(){
    var update = this.updateInfo
    $.get("/getUserInfo/", function(data){
      update(data)
    })
  },

//update User Info
  updateInfo: function(userinfo){
    var name = userinfo['username']
    var type = userinfo['type']
    var funcs = []
    if (type == "Customer"){  
      funcs = ["Overview", "Reservation", "Recommendation", "Meals", "My Info"]
    }else if (type == "Receptionist"){
      funcs = ["Overview", "Rooms", "My Info"]
    }else{
      funcs = ["Overview", "Sales Info", "Human Resources", "My Info"]
    }
    this.setState({
      username: name,
      functions: funcs
    })
  },
//click event
  navClickHandle: function(ev){
    if (ev.target.id == this.state.functions.length){
      $.get(/logout/, function(data){
        if (data == "Log Out success"){
          console.log("log out success")
          window.location.href = "/login/"
        }
      })
    }
    this.setState({
      activeFunc: ev.target.id
    })
  }
})

var Overview = React.createClass({
  render: function(){
    return (
      <div className = "overview">
        <div className = "header">
          <h1>Multisense Hotel</h1>
        </div>

        <div className = "seperator"></div>
        <div className = "description">
          <p>"This is software for people who work in hotel crossing the country: sales manager, receptionist, and so on. "</p><p>"Managers can grasp of each hotel' s condition, and make a plan of the benefits next season or year. In addition, our system will provide different price strategies to managers and help them to make proper decisions."</p><p>"For receptionists, they can easily check today's bill and respond to the booking request from customers."</p><p>" What's more, our system is also useful for customers. We provide personal service for each customer and help them to enjoy themselves."</p><p>"Anyone can benefit from our system in multi-ways and really make sense, so we call this system 'Multisense Hotel Management System' "</p>
        </div>
        <div className = "graph">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img className="first-slide" src="/static/img/overview/1.jpg" alt="First slide"></img>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Single Room</h1>
                    <p>"Come in and enjoy"</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <img className="second-slide" src="/static/img/overview/2.jpg" alt="Second slide"></img>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Standard Room</h1>
                    <p>"Here is amazing. Amazing is here."</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <img className="third-slide" src="/static/img/overview/3.jpg" alt="Third slide"></img>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Business Room</h1>
                    <p>"Tired or not?"</p>
                  </div>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
})

/**
  Customer Reservation View
*/

var CustomerReservationSearchBar = React.createClass({
  render: function(){
    return(
      <div className = "searchBar">
        <form className = "form-horizontal searchForm">
          <div className = "form-group">
            <label htmlFor="searchLabel" className="col-sm-2 col-md-2 col-lg-2 control-label">Places</label>
            <div className = "col-sm-8 col-md-8 col-lg-8">
              <input type = "text" className = "form-control" id = "username" placeholder="Places" value={this.props.searchInfo} onChange={this.props.updateSearchInfo} />
            </div>
            <a href="javascript:void(0);" className="btn btn-search col-sm-2 col-md-2 col-lg-2" onClick = {this.props.searchHandler}>Search</a>
          </div>
        </form>
      </div>
    )
  },
})


var CustomerReservationMap = React.createClass({
  getDefaultProps: function(){
    return {
      searchInfo: "如家"
    }
  },
  getInitialState:function(){
    return {
      map: ""
    }
  },
  render: function(){
    if (this.props.searchBegin){
      this.search()
    }
    return (
      <div id = "map">
      </div>
    )
  },
  componentDidMount: function(){
    var realmap = new AMap.Map("map", {
        resizeEnable: true
    })
    AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
      var toolBar = new AMap.ToolBar();
      var scale = new AMap.Scale();
      realmap.addControl(toolBar);
      realmap.addControl(scale);
    })
    this.setState({
      map: realmap
    })
  },

  search: function(){
    var searchInfo = this.props.searchInfo
    var realmap = this.state.map

    AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({ 
            pageSize: 50,
        });
        placeSearch.search(searchInfo, function(status, result) {
          var res = result['poiList']['pois']
          var centerPos = new AMap.LngLat(res[0]['location']['lng'],res[0]['location']['lat'])
          for (var i = 0; i < res.length; ++i) {
            console.log(res[i])
            var pos = new AMap.LngLat(res[i]['location']['lng'],res[i]['location']['lat'])
            var marker = new AMap.Marker({
              position: pos,
              map: realmap
            });
          }
          realmap.setZoom(11);
          realmap.setCenter(centerPos);
      });
    });
  }
})

var CustomerReservation = React.createClass({
  getInitialState:function(){
    return {
      searchInfo: "",
      searchBegin: false
    }
  },
  render: function(){
    return (
      <div className = "reservation">
        <CustomerReservationSearchBar
          updateSearchInfo = {this.updateSearchInfo}
          searchInfo = {this.state.searchInfo}
          searchHandler = {this.searchHandler}
        ></CustomerReservationSearchBar>
        <CustomerReservationMap
          searchInfo = {this.state.searchInfo}
          searchBegin = {this.state.searchBegin}
        ></CustomerReservationMap>
      </div>
    )
  },
  updateSearchInfo: function(ev){
    this.setState({
      searchBegin: false,
      searchInfo: ev.target.value
    })
  },
  searchHandler: function(){
    this.setState({
      searchBegin: true
    })
  }
})

/** 
  Manager Sales Info View
*/
var ManagerSalesInfo = React.createClass({
  getInitialState: function(){
    return {
      hotelName: ["ALL"],
      typeName: ["ALL"],
      timeName: ["ALL", "Today", "One Week", "One Month", "One Year"],
      selectedHotel: 0,
      selectedType: 0,
      selectedTime: 0,
      priority: "hotel",
      first: true
    }
  },
  componentWillMount: function(){
    var update = this.updateInfo
    $.get("/getHotelNameAndRoomType/", function(data){
      update(data)
    })
  },

  render: function(){
    return(
      <div className = "salesInfo">
        <ManagerSalesInfoPlan />
        <ManagerSalesInfoSelection 
          hotelName = {this.state.hotelName}
          typeName = {this.state.typeName}
          timeName = {this.state.timeName}
          selectionClicked = {this.handleSelection}
          hotelSelected = {this.state.hotelName[this.state.selectedHotel]}
          typeSelected = {this.state.typeName[this.state.selectedType]}
          timeSelected = {this.state.timeName[this.state.selectedTime]}
          priority = {this.state.priority}
        ></ManagerSalesInfoSelection>
        <ManagerSalesInfoChart
          hotelName = {this.state.hotelName[this.state.selectedHotel]}
          typeName = {this.state.typeName[this.state.selectedType]}
          timeName = {this.state.timeName[this.state.selectedTime]}
          first = {this.state.first}
          priority = {this.state.priority}
        ></ManagerSalesInfoChart>
      </div>
    )
  },
  updateInfo: function(data){
    this.setState({
      hotelName: data["name"],
      typeName: data["type"]
    })
  },
  handleSelection: function(ev){
    var res = ev.target.id.split("|")
    if (res[0] == "hotel"){
      this.setState({
        selectedHotel: res[1],
        first: false,
        priority: res[0]
      })
    }else if (res[0] == "type"){
      this.setState({
        selectedType: res[1],
        first: false,
        priority: res[0]
      })
    }else if (res[0] == "time"){
      this.setState({
        selectedTime: res[1],
        first: false
      })
    }
  }
})

var ManagerSalesInfoPlan = React.createClass({
  render: function(){
    return (
      <div className = "salesInfoPlan">
        <p>PLAN</p>
      </div>
    )
  }
})

var ManagerSalesInfoSelection = React.createClass({
  render: function(){
    var handle = this.props.selectionClicked
    var hotel = this.props.hotelSelected
    var time = this.props.timeSelected
    var type = this.props.typeSelected
    var priority = this.props.priority
    if (hotel == "ALL" || priority == "type"){
      hotel = "Hotel"
    }
    if (time == "ALL"){
      time = "Time"
    }
    if (type == "ALL" || priority == "hotel"){
      type = "Type"
    }
    return (
      <div className = "salesInfoSelection">
        <div className = "row">
          <div className="btn-group col-sm-4 col-md-4 col-lg-4">
            <a href="javascript:void(0);" className="btn btn-primary selectionBtn">{hotel}</a>
            <a href="javascript:void(0);" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              {
                this.props.hotelName.map(function(i, index){
                return (
                  <li onClick = {handle}><a id = {"hotel|" + index} href="javascript:void(0);">{i}</a></li>
                )})
              }
            </ul>
          </div>
          <div className="btn-group col-sm-4 col-md-4 col-lg-4">
            <a href="javascript:void(0);" className="btn btn-primary selectionBtn">{type}</a>
            <a href="javascript:void(0);" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              {
                this.props.typeName.map(function(i, index){
                return (
                  <li onClick = {handle}><a id = {"type|" + index} href="javascript:void(0);">{i}</a></li>
                )})
              }
            </ul>
          </div>
          <div className="btn-group col-sm-4 col-md-4 col-lg-4">
            <a href="javascript:void(0);" className="btn btn-primary selectionBtn">{time}</a>
            <a href="javascript:void(0);" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              {
                this.props.timeName.map(function(i, index){
                return (
                  <li onClick = {handle}><a id = {"time|" + index} href="javascript:void(0);">{i}</a></li>
                )})
              }
            </ul>
          </div>
        </div>
      </div>

    )
  }
})

var ManagerSalesInfoChart = React.createClass({
  render: function(){
    if (!this.props.first){
      this.getChartData()
    }
    return (
      <div className = "salesInfoChart">
        <canvas id="lineChart"></canvas>
        <p>Line Chart of Time and Benefits</p>
        <canvas id="pieChart"></canvas>
        <p>Pie Chart of Hotel and Room Type</p>
      </div>
    )
  },

  componentDidMount: function(){
    this.getChartData()
  },

  getChartData: function(){
    var hoteln = this.props.hotelName
    var typen = this.props.typeName
    var timen = this.props.timeName
    var priorityn = this.props.priority
    $.post("/getSalesInfoWithTime/",{ 
        time: timen
      },function(returnData){
        console.log(returnData)
        var option = {
          scaleLineColor : "rgba(255,255,255,1)",
          scaleGridLineColor : "rgba(255,255,255,.1)",
          scaleFontColor : "#FFF"
        }
        var data = {
          labels : returnData['timeLabel'],
          datasets : [
            {
              fillColor : "rgba(220,220,220,0.5)",
              strokeColor : "rgba(220,220,220,1)",
              pointColor : "rgba(220,220,220,1)",
              pointStrokeColor : "#fff",
              data : returnData['ammount']
            }
          ]
        }
        $("#lineChart").remove()
        $(".salesInfoChart").prepend("<canvas id=\"lineChart\"></canvas>")
        var canvas = document.getElementById("lineChart")
        var ctx = canvas.getContext("2d");
        var charts = new Chart(ctx).Line(data, option);
    })
    $.post("/getSalesInfoWithHotelAndType/",{
        hotel: hoteln,
        type: typen,
        time: timen,
        priority: priorityn
      }, function(returnData){
        var data = []
        var colors = ["#FFE4B5", "#FF4040", "#76EE00", "#556B2F", "#4169E1", "#00E5EE", "#8B3626", "#8C8C8C",
                      "#9B30FF", "#EEEE00", "#2E8B57", "#00EE76", "#0000FF", "#87CEFA", "#8B4789", "#B8860B",
                      "#DEB887", "#FFFF00", "#FF6EB4", "#262626", "#48D1CC"]
        var highlightColors = ["#FFEBCD", "#FF6A6A", "#7CFC00", "#548B54", "#4876FF", "#00F5FF", "#8B4500", "#A8A8A8",
                              "#9F79EE", "#F0E68C", "#3CB371", "#00FF00", "#1E90FF", "#87CEFF", "#8B668B", "#CD9B1D",
                              "#EEC591", "#FFF68F", "#FF83FA", "#474747", "#40E0D0"]
        if (returnData['type'].length == 0){
          for (var i = 0; i < returnData['hotel'].length; ++i){
            data.push({
              value: returnData['amount'][i],
              color: colors[i],
              highlight: highlightColors[i],
              label: returnData['hotel'][i]
            })
          }            
        }else if (returnData['hotel'].length == 0){
          for (var i = 0; i < returnData['type'].length; ++i){
            data.push({
              value: returnData['amount'][i],
              color: colors[i],
              highlight: highlightColors[i],
              label: returnData['type'][i]
            })
          }    
        }
        var option = {
          segmentShowStroke: false
        }
        $("#pieChart").remove()
        $(".salesInfoChart").append("<canvas id=\"pieChart\"></canvas>")
        var canvas = document.getElementById("pieChart")
        var ctx = canvas.getContext("2d");
        var charts = new Chart(ctx).Pie(data, option);
    })
  }
})

/** 
  manager human resources view
*/
var ManagerHumanResources = React.createClass({
  getInitialState: function(){
    return {
      staffInfo: [],
      showedStaffInfo: [],
      selectedStaff: [],
      sort: 1,
      salary: "",
      errormsg: "",
      ranks: [],
      hotels: [],
    }
  },
  componentWillMount: function(){
    var update = this.updateInfo
    $.get("/getStaffInfo/", function(data){
      update(data['staff'])
    })
  },
  render: function(){
    var handleChangeSalary = this.handleChangeSalary
    var status = ['nonselected', 'selected']
    var selected = this.state.selectedStaff
    var ranks = this.state.ranks
    var hotels = this.state.hotels
    var handleFilter = this.handleFilter
    return (
      <div className = "humanResources">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th><a href="#" className="btn btn-primary sortButton" onClick = {this.handleSort} id = "name">Name</a></th>
              <th><a href="#" className="btn btn-primary sortButton" onClick = {this.handleSort} id = "gender">Gender</a></th>
              <th>
                <div className = "btn-group">
                  <a href="#" className="btn btn-primary" onClick = {this.handleSort} id = "rank">Rank</a>
                  <a href="javascript:void(0);" className="btn btn-primary dropdown-toggle dropButton" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
                  <ul className="dropdown-menu">
                  {
                    ranks.map(function(i, index){
                      return <li onClick = {handleFilter}><a id = {i + "|rank"} href="javascript:void(0);">{i}</a></li>
                    })
                  }
                  </ul>
                </div>
              </th>
              <th>
                <div className = "btn-group">
                  <a href="#" className="btn btn-primary sortButton" onClick = {this.handleSort} id = "hotel">Hotel</a>
                  <a href="javascript:void(0);" className="btn btn-primary dropdown-toggle dropButton" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    {
                    hotels.map(function(i, index){
                      return <li onClick = {handleFilter}><a id = {i + "|hotel"} href="javascript:void(0);">{i}</a></li>
                    })
                  }
                  </ul>
                </div>
              </th>
              <th><a href="#" className="btn btn-primary sortButton" onClick = {this.handleSort} id = "salary">Salary</a></th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.showedStaffInfo.map(function(i, index){
            return (
              <tr onClick = {handleChangeSalary} className = {status[selected[index]]}>
                <td id = {index + "|name"}>{i['name']}</td>
                <td id = {index + "|gender"}>{i['gender']}</td>
                <td id = {index + "|rank"}>{i['rank']}</td>
                <td id = {index + "|hotel"}>{i['hotel']}</td>
                <td id = {index + "|salary"}>{i['salary']}</td>
              </tr>
            )})
          }
          </tbody>
        </table>
        <form className = "form-horizontal salaryForm">
          <div className = "form-group">
            <label htmlFor="salaryLabel" className="col-sm-2 col-md-2 col-lg-2 control-label">Salary</label>
            <div className = "col-sm-8 col-md-8 col-lg-8">
              <input type = "text" className = "form-control" id = "username" placeholder="Salary" onChange={this.updateSalaryInfo} />
            </div>
            <a href="javascript:void(0);" className="btn btn-primary col-sm-2 col-md-2 col-lg-2" onClick = {this.salaryButtonHandler}>Change Salary</a>
          </div>
        </form>
        <div className = "errormsg">
          <p>{this.state.errormsg}</p>
        </div>
      </div>
    )
  },
  updateInfo: function(data){
    var num = []
    var rank = []
    var hotel = []
    for (var i = 0; i < data.length; ++i){
      num.push(0)
      if (rank.indexOf(data[i]['rank']) == -1){
        rank.push(data[i]['rank'])
      }
      if (hotel.indexOf(data[i]['hotel']) == -1){
        hotel.push(data[i]['hotel'])
      }
    }
    this.setState({
      staffInfo: data,
      selectedStaff: num,
      ranks: rank,
      hotels: hotel,
      showedStaffInfo: data
    })
  },
  handleSort: function(ev){
    var staff = this.state.showedStaffInfo
    var way = this.state.sort
    staff.sort(this.sortStaff(ev.target.id, 1 - way))
    this.setState({
      sort: 1 - way,
      showedStaffInfo: staff
    })
  },
  sortStaff: function(type, direction){
    return function(a, b){
      if (direction == 0){
        if (a[type] > b[type]){
          return -1
        }else if (a[type] == b[type]){
          return 0
        }else{
          return 1
        }
      }else{
        if (a[type] > b[type]){
          return 1
        }else if (a[type] == b[type]){
          return 0
        }else{
          return -1
        }
      }
    }
  },
  handleChangeSalary: function(ev){
    var id = ev.target.id.split("|")[0]
    var selected = this.state.selectedStaff
    selected[id] = 1 - selected[id]
    this.setState({
      selectedStaff: selected
    })
  },
  updateSalaryInfo: function(ev){
    this.setState({
      salary: ev.target.value
    })
  },
  salaryButtonHandler: function(){
    if (!isNaN(this.state.salary) && this.state.salary != ""){
      var staff = this.state.showedStaffInfo
      var selected = this.state.selectedStaff
      var name = []
      var error = ""
      var newData = []
      var setstate = this.updateFilterInfo
      for (var i = 0; i < staff.length; ++i){
        if (selected[i] == 1){
          staff[i]['salary'] = this.state.salary
          selected[i] = 0
          name.push(staff[i]['name'])
        }
      }
      if (name.length == 0){
        error = "please choose at least one staff"
      }else{
        $.post("/changeStaffSalary/", {
          pname: name.join("|"),
          psalary: this.state.salary
        }, function(data){
          if (!data){
            error = "Unknown error"
          }else{
            error = "Success"
            $.get("/getStaffInfo/", function(data){
              setstate(selected, data['staff'], error, staff)
            })
          }
        })
      }
    }else{
      this.setState({
        errormsg: "not a number"
      })
    }
  },
  handleFilter: function(ev){
    var ele = ev.target.id.split("|")[0]
    var type = ev.target.id.split("|")[1]
    var staff = []
    var selected = []
    for (var i = 0; i < this.state.staffInfo.length; ++i){
      if (this.state.staffInfo[i][type] == ele){
        staff.push(this.state.staffInfo[i])
        selected.push(0)
      }
    }
    this.setState({
      showedStaffInfo: staff,
      selectedStaff: selected
    })
  },
  updateFilterInfo: function(selected, data, error, staff){
    this.setState({
      selectedStaff: selected,
      staffInfo: data,
      errormsg: error,
      showedStaffInfo: staff
    })   
  }
})




React.render(
  <HomePage />,
  document.getElementById('content')
);

