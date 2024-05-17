import React from 'react'
import AuthenticationLayout from '../layout/Authentication/AuthenticationLayout'
import Input from '../components/Authentication/Input'
import Button from '../components/Authentication/Button'
import RecommendText from '../components/Authentication/RecommendText'

const Login = () => {
  return (
    <div>
      <AuthenticationLayout title={"Signin"}>
        <form className='mb-[31px]'>
          <Input placeholder={"Enter your email"} type={"text"} />
          <Input placeholder={"Enter your password"} type={"password"} />
          <p className='text-[30px]'>Forgot password?</p>
          <Button title={"Signin"} />
        </form>
        <RecommendText content={"Don't have an account?"} routeTo={"/auth/signup"} routeToText={"Signup"} />
      </AuthenticationLayout>
    </div>
  )
}

export default Login