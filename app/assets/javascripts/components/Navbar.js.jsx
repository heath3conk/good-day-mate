var Navbar = React.createClass({
	render: function () {
		return (
			<div className="navbar-fixed">
				<nav id="main-nav">
			    <div className="nav-wrapper">
			      <Logo />
			      <a href="#" data-activates="mobile-demo" className="right button-collapse"><i className="material-icons">menu</i></a>
			      <ul className="right hide-on-med-and-down">
			        <li><a href="sass.html">Sass</a></li>
			        <li><a href="badges.html">Components</a></li>
			        <li><a href="collapsible.html">Javascript</a></li>
			        <li><a href="mobile.html">Mobile</a></li>
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
			        <li><a href="sass.html">Sass</a></li>
			        <li><a href="badges.html">Components</a></li>
			        <li><a href="collapsible.html">Javascript</a></li>
			        <li><a href="mobile.html">Mobile</a></li>
			      </ul>
			    </div>
			  </nav>
			</div>
		)
	}
});
