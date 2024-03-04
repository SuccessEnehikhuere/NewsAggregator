import React from 'react'
import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

const Login = () => {
  const userLogin = () => {}
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 capitalize"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />
        <div className="mt-4">
          <Link to='/'>
            <SubmitBtn text="login" />
          </Link>
        </div>
        <p className="text-center">
          not a member yet?
          <Link to="/register" className="ml-2 link link-hover link-primary font-bold">
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login
