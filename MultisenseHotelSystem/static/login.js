var Logo = React.createClass({
  render: function() {
    return (
      <p className = "logo">Multisense Hotel System</p>
    )
  }
})

var LoginView = React.createClass({
  getInitialState: function(){
    return {
      username: "",
      password: ""
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
  render: function() {
    return (
      <div className = "login">
        <Logo/>
        <form className = "form-horizontal loginForm">
          <div className = "form-group">
            <label htmlFor="username" className="col-sm-2 col-md-2 col-lg-2 control-label">Username</label>
            <div className = "col-sm-10 col-md-10 col-lg-10">
              <input type = "text" className = "form-control" id = "username" placeholder="Username" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-2 col-md-2 col-lg-2 control-label">Password</label>
            <div className = "col-sm-10 col-md-10 col-lg-10">
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
          </div>
          <button type="button" onClick={this.handleSubmit} className="btn btn-default loginButton">Login</button>
        </form>
      </div>
    );
  }
});

React.render(
  <LoginView />,
  document.getElementById('content')
);