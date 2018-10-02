import React from 'react';
import axios from 'axios';

const withSwapi = Component => {
  return class extends React.Component 
  {
    constructor()
    {
      super();
      this.state =
      {
        data: ''
      };
    }

    componentDidMount()
    {
      axios
        .get(`https://swapi.co/api/planets/1`)
        .then(response => this.setState({data: response.data}))
        .catch(err => console.log(err));
    }
    render()
    {
      return <div><Component data={this.state.data} {...this.props}/></div>
    }
  }
};

export default withSwapi;