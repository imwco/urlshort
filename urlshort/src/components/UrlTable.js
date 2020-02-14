import React from 'react';

export default class UrlTable extends React.Component {
    constructor(props) {
          super(props);
          this.state = {value: ''};

          this.handleChange = this.handleChange.bind(this);
        }

    handleChange(event) {
          this.setState({value: event.target.value});
        }

    render() {
          return (
                  <form onSubmit={this.handleSubmit}>
                    <div class="input-group input-group-lg">
                      <span class="input-group-addon">https://</span>
                      <input type="text" class="form-control" placeholder="Shorten this link" value={this.state.value} onChange={this.handleChange} />
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Go!</button>
                      </span>
                    </div>
                  </form>
                );
        }
}
