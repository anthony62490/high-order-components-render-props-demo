import React from 'react';

const withText = Component => 
{
  return class extends React.Component 
  {
    constructor()
    {
      super();
      this.state =
      {
        text: 'Bezos'
      }
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(val)
    {
      this.setState({text: val});
    }

    render()
    {
      // Each component is defined as a closure, so every rendered component will have its own state
      console.log('value', this.state);
      //Do not forget to pass props down to the component or it will lose its desired props
      return (
        <div>
          <input onChange={e => this.handleTextChange(e.target.value)}/>
          <Component text={this.state.text} {... this.props}/>
        </div>);
    }
  }
}

export default withText;  