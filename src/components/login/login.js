import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeValue } from "./loginActions";
import TextField from '@material-ui/core/TextField';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <label>{this.props.value}</label>
        <br />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Seu nome aqui"
            name="userName"
            autoComplete="text"
            autoFocus
            onChange={this.props.changeValue} 
            value={this.props.value}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.login.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
