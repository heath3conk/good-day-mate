var EveningScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  componentDidMount: function(){
    window.mySwipe = Swipe(document.getElementById('slider'), {
      continuous: false
    });
    $.get('/check_ins/new', function(response){
     var auth_token = $(response).find('input[name="authenticity_token"]').val()
      this.setState({authenticity_token: auth_token})
    }.bind(this))
  },
  handleFormSubmit: function(event){
    event.preventDefault();
    var here = $(event.target);
    $.ajax({
      type: "POST",
      url: '/check_ins',
      data: here.serialize()
    }).done(function(resp){
      this.props.onUpdate('build')
    }.bind(this))
  },
  render: function(){
    return (
      <div className='container flow-text row' onSubmit={this.handleFormSubmit}>
        <form className='center-align col s12' acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value={this.state.authenticity_token} />
          <div id="slider" className="row swipe">
            <div className='swipe-wrap'>
              <div>
                <div className='row'>
                  <div className='input-field col s10 offset-s1 card'>
                    <div className="card-content">
                      <h5>I am feeling:</h5>
                      <input type="text" name="check_in[feeling]" id="check_in_feeling" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='row'>
                  <div className='input-field col s10 offset-s1 card'>
                    <div className="card-content">
                      <h5>Things I&#39;m thankful for:</h5>
                      <div className="input-field">
                        <input type="text" name="check_in[thankful1]" id="check_in_thankful1" />
                        <label htmlFor="check_in_thankful1">1.</label>
                      </div>
                      <div className="input-field">
                        <input type="text" name="check_in[thankful2]" id="check_in_thankful2" />
                        <label htmlFor="check_in_thankful2">2.</label>
                      </div>
                      <div className="input-field">
                        <input type="text" name="check_in[thankful3]" id="check_in_thankful3" />
                        <label htmlFor="check_in_thankful3">3.</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='row'>
                  <div className='input-field col s10 offset-s1'>
                    <div className="card">
                      <div className="card-content">
                        <div>
                          <h5>Tomorrow, I&#39;m looking forward to:</h5>
                          <input type="text" name="check_in[horizon]" id="check_in_horizon" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div id="build-button" className='container valign-wrapper'>
                        <div className="valign center-align">
                          <input className="build btn-large waves-effect waves-light" type="submit" name="commit" value="Build Tomorrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
})
