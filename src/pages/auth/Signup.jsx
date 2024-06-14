import React, { Component } from 'react'
// import avatar from '../avatar-default-svgrepo-com 2.svg'


import Firstmessage from './Firstmessage';
import Industrydetails from './Industrydetails';
import Userdetails from './Userdetails';
import Livechat from './Livechat';
// import Dashboards from "../../Layouts/dashboard/Dashboards"
import Dashboard from '../dashboard/Dashboard';

export default class Signup extends Component {
  


  state = {
    step: 1,
    name: '',
    colorScheme: '--bg-color',
    avatar: '',
    language: '',
    chat: '',
  }
  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  // handle field change
  handleColor = li => e => {
    this.setState({ [li]: e.target.value });
    console.log(e.target.value);
  }



  render() {
    const { step } = this.state;
    const { name, colorScheme, avatar, language, chat } = this.state;
    const values = { name, colorScheme, avatar, language, chat }

    switch (step) {
      case 1:
        return (
          <Userdetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleColor={this.handleColor}
            values={values}
          />
        )
      case 2:
        return (
          <Industrydetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Firstmessage
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <Livechat
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return (
          <Dashboard />
          // never forget the default case, otherwise VS code would be mad!
        )
      default:
      // do nothing
    }
  }
}
