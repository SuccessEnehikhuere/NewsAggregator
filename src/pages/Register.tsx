import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link} from 'react-router-dom'


const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 capitalize"
      >
        <h4 className="text-center text-3xl font-bold">register</h4>
        <FormInput type="text" name="username" label="name" />
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />
        <div className="mt-4">
          <SubmitBtn text="submit" />
        </div>

        <p className="text-center">
          already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary font-bold"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register