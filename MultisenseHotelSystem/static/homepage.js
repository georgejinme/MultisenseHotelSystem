var SideBar = React.createClass({
  //todo
  getInitialState: function(){
    if (this.props.userType == "manager"){
      return {
        activeBar: ["active", "nonactive", "nonactive", "nonactive"]
      }
    }
    return {activeBar: ["active", "nonactive", "nonactive", "nonactive"]}
  },
  render:function(){
    return (
        <div className="col-sm-3 col-md-2 sidebar">
          <ul className="nav nav-sidebar">
            <li className="active" onClick = {this.handleBarClick}><a id = "0" href="#">Overview</a></li>
            <li onClick = {this.handleBarClick}><a id = "1" href="#">Reports</a></li>
            <li onClick = {this.handleBarClick}><a id = "2" href="#">Analytics</a></li>
            <li onClick = {this.handleBarClick}><a id = "3" href="#">Export</a></li>
          </ul>
        </div>
    )
  },
  handleBarClick:function(ev){
    var type = []
    for (var i = 0; i < this.state.userType.length; ++i){
      if (i == ev.target.id){
        type.push(true)
      }else{
        type.push(false)
      }
    }
    this.setState({
      activeBar: type
    })
  }
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
  getInitialState: function(){
    return {
      userType: "manager"
    }
  },
  render: function() {
    return (
      <div className = "container-fluid">
        <div className="row">
          <SideBar
            userType = {this.state.userType}
          ></SideBar>
          <Main />
        </div>
      </div>
    )
  }
})

React.render(
  <HomePage />,
  document.getElementById('content')
);