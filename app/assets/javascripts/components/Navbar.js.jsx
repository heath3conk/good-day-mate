var Navbar = React.createClass({
	handleHomeClick: function() {
		this.props.onUpdate('home')
	},
  handleLogoutClick: function() {
   	$.get('/logout', function(resp) {
   		this.props.onUpdate('home', {loggedIn: false, userId: undefined})
   	}.bind(this));
  },
  componentDidMount: function() {
  	$(".button-collapse").sideNav({
	    edge: 'right',
	    closeOnClick: true
	  });
  },
  getLogoutLink: function () {
    if (this.props.loggedIn === true) {
      return <li><a onClick={this.handleLogoutClick} >Logout</a></li>
    } else {
      return ""
    }
  },
	render: function () {
		return (
			<div className="navbar-fixed">
				<nav id="main-nav">
			    <div className="nav-wrapper">
			      <Logo screen={this.props.screen} />
			      <a href="#" data-activates="mobile-demo" className="right button-collapse"><i className="material-icons">menu</i></a>
			      <ul className="right hide-on-med-and-down">
			        <li><a onClick={this.handleHomeClick} >Home</a></li>
			        {this.getLogoutLink()}
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
			        <li><a onClick={this.handleHomeClick} >Home</a></li>
			        {this.getLogoutLink()}
			      </ul>
			    </div>
			  </nav>
			</div>
		)
	}
});
