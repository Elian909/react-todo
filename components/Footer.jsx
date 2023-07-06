import React, {Component} from 'react'
export default 
class Footer extends Component{
    render(){
        return(
            <footer className='footer'>
                <span className='todo-count'>
                <strong>0</strong>
                <span>item left</span>
                </span>
                <ul className='filters'>
                    <li>
                        <a href="#/all" className='selected'>All</a>
                    </li>
                    
                    <li>
                        <a href="#/aactive" className='selected'>active</a>
                    </li>
                    
                    <li>
                        <a href="#/completed" className='selected'>completed</a>
                    </li>
                    <button className='clear-completed'>Clear Completed</button>
                </ul>
            </footer>
        )
    }
}