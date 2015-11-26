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
      email: "",
      loginOrReg: true,
      errorMsg: ""
    };
  },
  handleSubmit: function(){
    var updateError = this.updateError
    if (this.state.username != "" && this.state.password != ""){
      $.post("/loginCheck/", {
        username: this.state.username,
        password: this.state.password
      }, function(data){
        if (data == "Login Success"){
          window.location.href = "/homepage/"
        }else{
          updateError(data)
        }
      })
    }else{
      updateError("Missing Required Information")
    }
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
  updateEmail:function(ev){
    this.setState({
      email: ev.target.value
    })
  },
  updateError:function(msg){
    this.setState({
      errorMsg: msg
    })
  },
  handleRegister:function(){
    var backToLogin = this.backToLogin
    var updateError = this.updateError
    if (this.state.username != "" && this.state.password != "" && this.state.email != ""){
      $.post("/register/", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      }, function(data){
        if (data == "Regist Success"){
          backToLogin()
          updateError("")
        }else{
          updateError(data)
        }
      })
    }else{
      updateError("Missing Required Information")
    }
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
          <div className="error">
            <p>{this.state.errorMsg}</p>
          </div>
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
                <input type = "text" className = "form-control" id = "username" placeholder="Username" value={this.state.username} onChange={this.updateUsername}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 col-md-2 col-lg-2 control-label">Password</label>
              <div className = "col-sm-10 col-md-10 col-lg-10">
                <input type="password" className="form-control" id = "password" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-sm-2 col-md-2 col-lg-2 control-label">Email</label>
              <div className = "col-sm-10 col-md-10 col-lg-10">
                <input type="email" className="form-control" id = "password" placeholder="email" value={this.state.email} onChange={this.updateEmail}/>
              </div>
            </div>
            <button type="button" onClick={this.handleRegister} className="btn btn-default registerButton">Register</button>
            <button type="button" onClick={this.backToLogin} className="btn btn-default backButton">Back</button>
            <div className="error">
              <p>{this.state.errorMsg}</p>
            </div>
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