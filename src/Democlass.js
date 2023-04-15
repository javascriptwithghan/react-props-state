import React from "react";

class Demo extends React.Component {
    constructor(props) {
       super(props);
       this.state = {model:'Ford'};
    }
    render() {
        return (
            <>
               <div>This is my class component <b>{this.state.model}</b></div>
            </>
        )
    }
}

export default Demo;
