import React,{Component} from 'react'
import './css/style.css'
var classNames=require("classnames")
export default 
class Child extends Component{
    constructor(){
        super()
        this.state={
            x:true,
            y:true,
        }
    }
    render(){
        let(x,y)=this.state;
        let classname=[{one:x},{two:y}];
        
       return(
        <div>
            <h3>Childzujian</h3>
            <div classNames={classone}>知识改变命运</div>
        </div>
       )
    }
}