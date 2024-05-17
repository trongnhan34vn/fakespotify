import React, { useEffect, useState } from 'react'
import AuthenticationLayout from '../layout/Authentication/AuthenticationLayout'
import Input from '../components/Authentication/Input'
import Button from '../components/Authentication/Button'
import RecommendText from '../components/Authentication/RecommendText'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../thunk/authThunk'
import { userSelector } from '../redux/selectors'
import LoadingOverlayComp from '../components/Overlay/LoadingOverlayComp'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerResponse = useSelector(userSelector);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "", password: "", rePassword: ""
    }
  });

  const [isLoadingOverlay, setLoadingOverlay] = useState(false);

  const onHandleSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    if (data.rePassword !== data.password) {
      toast.error("Error: The password and confirmation password do not match!")
      return;
    }
    setLoadingOverlay(true);
    setTimeout(() => {
      // dispatch(signup({ email: data.email, password: data.password }))
    }, 2000)
  }

  useEffect(() => {
    if (registerResponse.accessToken) {
      toast.success("Signed up successfully!")
      setTimeout(() => {
        navigate("/auth/signin");
      }, 2000)
      return;
    }
    toast.error("Oops! Something went wrong!")

  }, [registerResponse])

  return (
    <div>
      <AuthenticationLayout title={"Signup"}>
        <form onSubmit={handleSubmit(onHandleSubmit)} className='mb-[31px]'>
          <Input
            errors={errors}
            register={register}
            field={"email"}
            fieldName={"Email"}
            placeholder={"Enter your email"}
            type={"text"}
          />
          <Input
            errors={errors}
            register={register}
            field={"password"}
            fieldName={"Password"}
            placeholder={"Create a password"}
            type={"password"}
          />
          <Input
            errors={errors}
            register={register}
            field={"rePassword"}
            placeholder={"Enter your password"}
            type={"password"}
          />
          {/* <p className='text-orange-500 text-[14px]'>Your password must meet the following criteria:</p>
          <p className='text-orange-500 text-[14px]'>- At least 6 characters long</p>
          <p className='text-orange-500 text-[14px]'>- Contains at least one uppercase letter (A-Z)</p>
          <p className='text-orange-500 text-[14px]'>- Contains at least one special character (!,@,#,$,%,^,&,*,(,),...)</p> */}
          <Button title={"Signup"} />
        </form>
        <RecommendText content={"Already have an account?"} routeTo={"/auth/signin"} routeToText={"Login"} />
      </AuthenticationLayout>
      <LoadingOverlayComp isActive={isLoadingOverlay} message={"Signing Up! Take a minute..."} />
    </div>
  )
}

export default Register