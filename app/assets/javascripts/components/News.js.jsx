var News = React.createClass({

  headlines: function() {
    var stories = this.props.headlines.map(function(story, i) {
      return (
        <li className="collection-item" key={i}> <a href={story.url}>{story.headline_text}</a> </li>
        )
    });
    console.log(stories);
    return stories.splice(0,3);
  },
  render: function(){
    return (
      <div className="card-content">
        <p>{this.props.label}</p>
        <ul className="browser-default collection">
          {this.headlines()}
        </ul>
      </div>
    )
  }
})
