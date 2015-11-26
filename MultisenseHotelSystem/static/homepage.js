var SideBar = React.createClass({

  render: function(){
    var handle = this.props.handleNavClick
    var type = []
    for (var i = 0; i < this.props.functions.length; ++i){
      if (i == this.props.activeFunc){
        type.push("active")
      }else{
        type.push("nonactive")
      }
    }
    return (
        <div className="col-sm-3 col-md-2 sidebar">
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
          </ul>
        </div>
    )
  },
})

var Main = React.createClass({
  render:function(){
    return (
      <div className = "col-sm-9 col-md-10 main">
      </div>
    )
  }
})


var HomePage = React.createClass({
  getInitialState:function(){
    return {
      username: "NULL",
      updated: false,
      functions: ["Overview", "Reports", "Analysis", "Export", "Log Out"],
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
            handleNavClick = {this.handleNavClick}
            activeFunc = {this.state.activeFunc}
          ></SideBar>
          <Main />
        </div>
      </div>
    )
  },

  componentDidMount:function(){
    var update = this.updateInfo
    if (!this.state.updated){
      $.get("/getUserInfo/", function(data){
        update(data)
      })
    }
  },

//update User Info
  updateInfo: function(name){
    this.setState({
      username: name,
      updated: true
    })
  },
  handleNavClick: function(ev){
    //Log out
    console.log(ev.target.id)
    if (ev.target.id == this.state.functions.length - 1){
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

React.render(
  <HomePage />,
  document.getElementById('content')
);