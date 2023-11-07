import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formData.email + ' Sign up successfully')
    setFormData({
      fullname: '',
      email: '',
      password: '',
    })
    console.log(formData);

  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  return (
    <>
      {/* create a form for signup */}
      <div className="  bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div className="relative mb-4">
          <label forHtml="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
          <input onChange={handleChange} value={formData.fullname} type="text" id="fullname" name="fullname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label forHtml="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label forHtml="password" className="leading-7 text-sm text-gray-600">Password</label>
          <input onChange={handleChange} value={formData.password} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Button</button>
        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
      </div>
    </>
  )
}

export default App
