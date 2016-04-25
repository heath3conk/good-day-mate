var App = React.createClass({
	getInitialState: function() {
		return {
			screen: "splash",
			availableCurrents: "",
			timeRemaining: 1,
			loggedIn: false,
			userId: undefined

		}
	},
	tick: function() {
    this.setState({timeRemaining: this.state.timeRemaining - 1});
    if (this.state.timeRemaining <= 0) {
    	clearInterval(this.interval)
    	this.setState({screen: "home"})
    }
  },
	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
		$.get('/sessions/info', function(resp) {
			if (resp.session_id === false) {
				this.setState({loggedIn: false})
			} else {
				this.setState({loggedIn: true, userId: resp.session_id})
			}
		}.bind(this));
	},
	updateScreen: function(newScreen, newStates = {}) {
		this.setState({
			screen: newScreen,
		});
		var newStatesObj = {}
		for (newState in newStates) {
			newStatesObj[newState]= newStates[newState]
		}
		this.setState(newStatesObj)
	},
	getScreenContent: function () {
		switch(this.state.screen) {
			case "splash":
				return <SplashScreen />
			case "home":
				if (this.state.loggedIn === false) {
					return <LoginScreen onUpdate={this.updateScreen}/>
				}
				return <HomeScreen onUpdate={this.updateScreen} />
			case "login":
				return <LoginScreen onUpdate={this.updateScreen}/>
			case "registration":
				return <RegistrationScreen onUpdate={this.updateScreen} />
			case "review":
				return <ReviewScreen onUpdate={this.updateScreen} />
			case "start":
				return <MorningScreen currents={this.props.currents} />
			case "evening":
				return <EveningScreen onUpdate={this.updateScreen} />
			case "build":
				return <BuildScreen onUpdate={this.updateScreen} />
			case "goodnight":
				return <GoodNightScreen />
			case "lookback":
				return <LookbackScreen />
		}
	},
	getNavBar: function() {
		if (this.state.screen != "splash") {
			return (<Navbar loggedIn={this.state.loggedIn} onUpdate={this.updateScreen} />);
		}
		else {
			return ("");
		}
	},
	render: function () {
		return (
				<div key={this.state.uniqueId} >
					{this.getNavBar()}
					{this.getScreenContent()}
				</div>
		)
	}
});
