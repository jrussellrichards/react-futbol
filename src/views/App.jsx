import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
// import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App