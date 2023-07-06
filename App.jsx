import React,{Component} from 'react'
import "@/css/index.css"
import Footer from './components/Footer'
import Item from './components/Item'
export default 
class App extends Component{
  constructor(){
    super()
    this.state={
      todoDatas:[], //存储所有头都的数组 
    }
  }
  //功能模块1：添加todo
  addTodo=(event)=>{
    if(event.key!=="Enter")return 
    
    console.log("addTodo被调用了");
    let {todoDatas}=this.state;
    //创建todo
    let todo={};
    todo.id=Date.now();
    todo.title=event.target.value.trim();
    todo.hasCompleted=false;
    todoDatas.push(todo);
    this.setState({todoDatas:todoDatas})
    event.target.value=""
  }
render(){
  let {todoDatas}=this.state;
  let items=todoDatas.map(todo=>{
    return(
      <Item key={todo.id} todo={todo}></Item> /* todo传参 */
    )
  })
return(
  <section className="todoapp">
    <header className="header">
      <h1>Todos</h1>
      <input type="text" 
      onKeyUp={this.addTodo}
      className='new-todo' placeholder='What need to be done?' />
    </header>
    <section className="main"> {/* 左上角，全选全不选 */}
      
      <input type="checkbox" id="toggle-all" className="toggle-all" />
      <label htmlFor="toggle-all" ></label>
      <ul className="todo-list">{/* 展示todo */}
      {items}
      </ul>
    </section>
    <Footer></Footer>
  </section>
)
}
}
