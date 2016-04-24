var RegistrationScreen = React.createClass({
  getInitialState: function(){
    return {errorMessagesList: ""};
  },
  componentDidMount: function(){
    $.get('/users/new', function(response){
     var auth_token = $(response).find('input[name="authenticity_token"]').val()
      console.log(auth_token);
      this.setState({authenticity_token: auth_token})
    }.bind(this))
  },
  handleFormSubmit: function(event){
    event.preventDefault();
    var here = $(event.target);
    $.ajax({
      type: "POST",
      url: '/users',
      data: here.serialize()
    }).done(function(resp){
      var errorsList = resp.errors.map(function(error, i) {
        return <li key={i} className='errors'>{error}</li>
      })
      this.setState({errorMessagesList: errorsList})
    }.bind(this))
  },
  render: function(){
    return (
      <div className='container' >
        <div className='row'>
          <div>
            <form onSubmit={this.handleFormSubmit} className='col s12' acceptCharset="UTF-8">
              <input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value={this.state.authenticity_token} />
              <div className='input-field col s12'>
                <input type="text" name="user[first_name]" id="user_firstName" />
                <label htmlFor="user_firstName">First Name</label>
              </div>
              <div className='input-field col s12'>
                <input type="text" name="user[last_name]" id="user_lastName" />
                <label htmlFor="user_lastName">Last Name</label>
              </div>
              <div className='input-field col s12'>
                <input type="email" name="user[email]" id="user_email" />
                <label htmlFor="user_email">Email</label>
              </div>
              <div className='input-field col s12'>
                <input type="password" name="user[password]" id="user_password" />
                <label htmlFor="user_password">Password</label>
              </div>
              <input type="submit" className="btn-large waves-effect waves-light" name="commit" value="Register" />
            </form>
            </div>
          </div>
        <div className="errors">
          <ul>
            {this.state.errorMessagesList}
          </ul>
        </div>
      </div>
    )
  }
})
