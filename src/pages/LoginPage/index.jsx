import React from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input/Index'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import Overlay from '../../components/Overlay'

const LoginPage = () => {
  return (
  <Banner
      path_img={'/public/assets/img/kelurahan.png'}
      className={'min-h-screen'}
    > 
      <Navbar />  <Overlay>
      <div className='relative shadow-2xl w-4/5 p-6 rounded-md md:w-1/3 inset-0 bg-white bg-opacity-50 mt-6'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl text-black'>Login</h1>
          <p className='text-sm'>Welcome, please enter your detail</p>
        </div>
        <form className='space-y-5 text-left' >
          <Input
            label={'Username'}
            id={'username'}
            type={'input'}
            placeholder={'Enter your username'}
            required={true}
          />
          <Input
            label={'Password'}
            id={'password'}
            type={'password'}
            placeholder={'Enter your password'}
            required={true}
          />
          <Button className={'w-full py-2 bg-black text-white '} type={'submit'}>
            Submit
          </Button>
    
          <p className='text-center'>
            Don't have an account?{' '}
            <Link
              to={'/register'}
              className='font-bold text-black hover:text-gray-700'
            >
              Register
            </Link>
          </p>
        </form>
      </div>   </Overlay>
    </Banner>
  )
}

export default LoginPage
