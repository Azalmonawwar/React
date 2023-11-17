import { Routes, Route } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import Signin from './_auth/forms/Signin'
import Signup from './_auth/forms/signup'
import RootLayout from './_root/RootLayout'
import Home from './_root/profile/Home'


function App() {

  return (
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Route>
      {/* private routes */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />

      </Route>
    </Routes>
  )
}

export default App
