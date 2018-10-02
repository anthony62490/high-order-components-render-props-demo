import React from 'react';
import axios from 'axios';

class swapiContainer extends React.Component 
  {
    constructor()
    {
      super();
      this.state =
      {
        data: []
      };
    }

    componentDidMount()
    {
      axios
        .get(`https://swapi.co/api/planets`)
        .then(response => this.setState({data: response.data.results}))
        .catch(err => console.log(err));
    }
    render()
    {
      return <div>{this.props.render(this.state)}</div>
    }
  }

export default swapiContainer;