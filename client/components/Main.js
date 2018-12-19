import React from "react";
import axios from "axios";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    await axios.post('/api/users/signup', this.state)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default Main;
