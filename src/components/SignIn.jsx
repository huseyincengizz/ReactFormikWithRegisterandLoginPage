import React from 'react'
import { useFormik} from 'formik'
import { loginSchema } from '../schemas'
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
    alert("Başarıyla giriş yapıldı :)")
  };

function SignIn() {
    const {values, errors, handleSubmit, handleChange, isSubmitting} = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema : loginSchema,
        onSubmit,
    })
  return (
    <div className='form'>
    <form className='mainForm' onSubmit={handleSubmit}>
        <h1>OTURUM AÇ</h1>
        <div className="inputs">
        <label>Email</label>
        <input 
        type="email" 
        id="email"
        value={values.email}
        onChange={handleChange}
        placeholder='Mail adresinizi giriniz...'
        autoComplete='no'
        className={errors.email ? 'error' : ''}
         />
         {errors.email && <label className='errorText'>{errors.email}</label>}
        </div>


        <div className="inputs">
        <label>Şifre</label>
        <input 
        type="password" 
        id="password"
        value={values.password}
        onChange={handleChange}
        placeholder='Şifrenizi giriniz...'
        className={errors.password ? 'error' : ''}
         />
         {errors.password && <label className='errorText'>{errors.password}</label>}
        </div>

        <button disabled={isSubmitting} className='register' type='submit'>GİRİŞ YAP</button>
        <Link to="/">Üye Ol</Link>
    </form>
    </div>
  )
}

export default SignIn