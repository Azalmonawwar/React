import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (formData === '') {
      alert('Please enter a todo')
      return
    }
    setTodos([...todos, formData])
    setFormData('')
  }

  const removeTodo = () => {
    todos.pop()
    setTodos([...todos])
  }
  return (
    <>
      <h1 className='text-red-300 underline'>
        Todo list
      </h1>
      <div>
        <input type="text" onChange={(e) => setFormData(e.target.value)} value={formData} />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* list of all todos  */}
      <ul>
        {
          todos.map((todo) => {
            return (
              <div key={todo} className='flex gap-4 justify-between my-2'>
                <li >
                  {todo}
                </li>
                <button className='px-4 py-2 bg-black text-white' onClick={removeTodo}>Remove Todo</button>
              </div>
            )
          })
        }

      </ul>

    </>
  )
}

export default App
