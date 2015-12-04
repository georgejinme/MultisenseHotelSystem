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
  render: function(){
    return(
      <div>
      </div>
    )
  }
})




React.render(
  <HomePage />,
  document.getElementById('content')
);

