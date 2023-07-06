import React, { Component } from "react";
export default 
class item extends Component{
    render(){
        let {todo}=this.props
        return(
            <li> 
                <div className="view">
                    <input type="checkbox" className="toggle" />
                    <label htmlFor="toggle">{todo.title}</label>
                    <button className="destroy"></button>
                </div>
                <input type="text" className="edit" />
            </li>
        )
    }
}