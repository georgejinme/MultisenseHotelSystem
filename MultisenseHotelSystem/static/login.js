var Logo = React.createClass({
  render: function() {
    return (
      <p className = "logo">Multisense Hotel System {this.props.func} View</p>
    )
  }
})

var LoginView = React.createClass({
  getInitialState: function(){
    return {
      username: "",
      password: "",
      loginOrReg: true
    };
  },
  handleSubmit: function(){
    $.post("/loginCheck/", {
      username: this.state.username,
      password: this.state.password
    }, function(data){
      if (data == "fuck"){
        window.location.href = "/homepage/"
      }
    })
  },
  registerRequest: function(){
    this.setState({
      loginOrReg: false
    })
  },  

  backToLogin:function(){
    this.setState({
      loginOrReg: true
    })
  },
  updateUsername:function(ev){
    this.setState({
      username: ev.target.value
    })
  },
  updatePassword:function(ev){
    this.setState({
      password: ev.target.value
    })
  },
  render: function() {
    if (this.state.loginOrReg){
      return (
        <div className = "login">
          <Logo
            func = {"Login"}
          ></Logo>
          <form className = "form-horizontal loginForm">
            <div className = "form-group">
              <label htmlFor="username" className="col-sm-2 col-md-2 col-lg-2 control-label">Username</label>
              <div className = "col-sm-10 col-md-10 col-lg-10">
                <input type = "text" className = "form-control" id = "username" placeholder="Username" value={this.state.username} onChange={this.updateUsername}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 col-md-2 col-lg-2 control-label">Password</label>
              <div className = "col-sm-10 col-md-10 col-lg-10">
                <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/>
              </div>
            </div>
            <button type="button" onClick={this.handleSubmit} className="btn btn-default loginButton">Login</button>
            <button type="button" onClick={this.registerRequest} className="btn btn-default registerButton">Register</button>
          </form>
        </div>
      );
    }else{
      return (
        <div className = "register">
          <Logo
            func = {"Register"}
          ></Logo>
          <form className = "form-horizontal registerForm">
            <div className = "form-group">
              <label htmlFor="username" className="col-sm-2 col-md-2 col-lg-2 control-label">Username</label>
              <div className = "col-sm-10 col-md-10 col-lg-10">
                <input type = "text" className = "form-control" id = "username" placeholder="Username" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 col-md-2 col-lg-2 control-label">Password</label>
              <div className = "col-sm-10 col-md-10 col-lg-10">
                <input type="password" className="form-control" id = "password" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-sm-2 col-md-2 col-lg-2 control-label">Email</label>
              <div className = "col-sm-10 col-md-10 col-lg-10">
                <input type="email" className="form-control" id = "password" placeholder="email" />
              </div>
            </div>
            <button type="button" onClick={this.handleSubmit} className="btn btn-default loginButton">Login</button>
            <button type="button" onClick={this.backToLogin} className="btn btn-default backButton">Back</button>
          </form>
        </div>
      )
    }
  }
});

React.render(
  <LoginView />,
  document.getElementById('content')
);