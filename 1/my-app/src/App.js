import React from "react";
import "./App.css"
import Todo from "./Todo";
import { Button,Form,Row,Col } from 'react-bootstrap';


class App extends React.Component {
   

    render() {
        return (
            <div>
                {/* <Todo/> */}
                {/* <div id="app-container"></div> */}
                {/* <TTodo/> */}
                <Todo/>
                </div>
                
            )
    }
}

export default App;
