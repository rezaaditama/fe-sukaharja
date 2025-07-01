import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input/Index';
import Button from '../../components/Button';
import Overlay from '../../components/Overlay';
import { useEffect, useState } from 'react';
import { getAllusers } from '../../Services/user.service';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await getAllusers();
        setUsers(response.data);
      } catch (error) {
        console.error('Gagal Membuat Data Petani: ', error);
      }
    };
    fetchDataUser();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      nik: Number(e.target.nik.value),
      password: e.target.password.value,
    };
    const user = users.find(
      (user) => user.nik === data.user_nik && user.password === data.password
    );
    if (user) {
      localStorage.setItem('username', JSON.stringify(user));
      navigate('/admin');
    } else {
      alert('Username atau password salah');
    }
  };

  return (
    <Banner path_img={'/assets/img/kelurahan.png'} className={'min-h-screen'}>
      <Navbar type={'admin'} />
      <Overlay>
        <div className='relative shadow-2xl w-4/5 p-6 rounded-md md:w-1/3 inset-0 bg-white bg-opacity-50 mt-6'>
          <div className='text-center mb-6'>
            <h1 className='font-bold text-2xl text-black'>Login</h1>
            <p className='text-sm'>Welcome, please enter your detail</p>
          </div>
          <form className='space-y-4 text-left' onSubmit={handleLogin}>
            <Input
              label={'NIK'}
              id={'nik'}
              type={'input'}
              placeholder={'Enter your NIK'}
              required={true}
            />
            <Input
              label={'Password'}
              id={'password'}
              type={'password'}
              placeholder={'Enter your password'}
              required={true}
            />
            <div className=' flex justify-center'>
              <Button
                className={'w-full py-2 bg-black text-white '}
                type={'submit'}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Overlay>
    </Banner>
  );
};

export default LoginPage;
