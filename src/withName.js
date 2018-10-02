import React from 'react';

const withName = (BaseComponent) => {
  return class extends React.Component {
    // Code for a closure goes here
    constructor(props)
    {
      super()
      this.state =
      {
        name: 'Jeff'
      };
    }
    render() {
      //return the base component and decorate it with additional data on props
      //identical to 'connect'ing a component to Redux
      return <BaseComponent name={this.state.name} {... this.props}/>
    }
  };
};

export default withName;