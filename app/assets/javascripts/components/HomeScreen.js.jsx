var HomeScreen = React.createClass({
  handleBuildClick: function(event){
    this.props.onUpdate('build')
  },
  handleStartClick: function(event){
    this.props.onUpdate('review')
  },
  handleEndClick: function(event){
    this.props.onUpdate('evening')
  },
  render: function(){
    return (
      <div id="home-buttons" className='container valign-wrapper'>
        <div className="valign center-align">
          <a onClick={this.handleBuildClick} className="home-button btn-large waves-effect waves-light">Build Your Day</a>
          <a onClick={this.handleStartClick} className="home-button btn-large waves-effect waves-light">Start Your Day</a>
          <a onClick={this.handleEndClick} className="home-button btn-large waves-effect waves-light">End Your Day</a>
        </div>
      </div>
    )
  }
})
// ?
