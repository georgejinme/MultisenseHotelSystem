var SideBar = React.createClass({
  
  getInitialState: function(){
    var type = []
    for (var i = 0; i < this.props.functions.length; ++i){
      if (i == 0){
        type.push("active")
      }else{
        type.push("nonactive")
      }
    }
    return {
      activeBar: type
    }
  },
  render: function(){
    var status = this.state.activeBar
    var handle = this.handleNavClick
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
                <li className={status[index]} onClick = {handle}><a id = {index} href="#">{i}</a></li>
              )})
            }
          </ul>
        </div>
    )
  },

  handleNavClick: function(ev){
    var type = []
    for (var i = 0; i < this.props.functions.length; ++i){
      if (i == ev.target.id){
        type.push("active")
      }else{
        type.push("nonactive")
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
  render: function() {
    return (
      <div className = "container-fluid">
        <div className="row">
          <SideBar
            functions = {["Overview", "Reports", "Analysis", "Export"]}
            userName = {"Jin Jiajun's Wife"}
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