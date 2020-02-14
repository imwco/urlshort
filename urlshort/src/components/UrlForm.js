import React from 'react';

export default class UrlForm extends React.Component {
    constructor(props) {
          super(props);
          this.state = {value: ''};

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleClick = this.handleClick.bind(this);
        }

    handleChange(event) {
          this.setState({value: event.target.value});
        }

    handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }

    handleClick(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
    }

    render() {
          return (
                  <div class="container-fluid">
                    <div class="row">
                    <label> Link: </label>
                      <form onSubmit={this.handleSubmit}>
                        <div class="input-group input-group-lg">
                          <span class="input-group-addon">https://</span>
                          <input type="text" class="form-control" placeholder="Shorten this link" value={this.state.value} onChange={this.handleChange} />
                          <span class="input-group-btn">
                            <button class="btn btn-default" type="button" onClick={this.handleClick}>Go!</button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                );
        }
}
