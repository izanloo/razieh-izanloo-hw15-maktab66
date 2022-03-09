import React from "react";
import "./App.css"
import Todo from "./Todo";

class App extends React.Component {
    render() {
        return (
            <div className="appComponent">
                <Todo />
            </div>
        )
    }
}
export default App;
