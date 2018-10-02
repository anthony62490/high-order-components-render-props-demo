//RENDER PROPS
// NOT a function. Render props are components

// Specializes in hoisting state and exposing it to other components
// import React, {Component} from 'react';


// class AddName extends Component {
//   state = {name: 'Jeff'};
//   render() {
//     // The div
//     return <div>{this.props.render(this.state)}</div>
//   }
// }

// export default AddName;


import React, {Component} from 'react';


class AddName extends Component {
  state = {name: 'Jeff'};
  render() {
    return <div>{this.props.children(this.state)}</div>
  }
}

export default AddName;