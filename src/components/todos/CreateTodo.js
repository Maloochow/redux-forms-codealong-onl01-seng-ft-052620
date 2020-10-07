import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = {
    todo: "",
  };

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({ type: "ADD_TODO", ...this.state });
    this.setState({
      todo: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              value={this.state.todo}
              onChange={(e) => this.handleChange(e)}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect()(CreateTodo);
