// export const Testing = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="py-4">
//           <h1> Testing Page</h1>
//         </div>
//       </div>
//     </>
//   );
// };
import React, { Component } from "react";

export class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
    };
  }
  updateName() {
    this.setState({ name: "ClassCompoent2" });
  }
  handleName = this.updateName.bind(this);
  render() {
    return (
      <div className="container">
        <div className="py-4">
          <h1> Test Page </h1>
          <p>Hi {this.state.name}</p>
          <button onClick={() => this.setState({ name: "ClassCompoent1" })}>
            Onclick
          </button>
          <button onClick={this.handleName}>Onclick2</button>
        </div>
      </div>
    );
  }
}

export default Testing;
