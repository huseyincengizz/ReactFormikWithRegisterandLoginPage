import React from 'react'
import { useFormik} from 'formik'
import { mainSchema } from '../schemas'
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
    alert("Sitemize başarıyla üye oldunuz :)")
  };

function MainForm() {
    const {values, errors, handleSubmit, handleChange, isSubmitting} = useFormik({
        initialValues: {
          email: '',
          age: '',
          password: '',
          confirmPassword: ''
        },
        validationSchema : mainSchema,
        onSubmit,
    })
  return (
    <div onSubmit={handleSubmit} className='form'>
    <form className='mainForm'>
        <h1>ÜYELİK FORMU</h1>

        <div className="inputs">
        <label>Email</label>
        <input 
        type="email" 
        id="email"
        value={values.email}
        onChange={handleChange}
        placeholder='Mail adresinizi giriniz...'
        className={errors.email ? 'error' : ''}
         />
         {errors.email && <label className='errorText'>{errors.email}</label>}
        </div>

        <div className="inputs">
        <label>Yaş</label>
        <input 
        type="number" 
        id="age"
        value={values.age}
        onChange={handleChange}
        placeholder='Yaşınızı giriniz...'
        className={errors.age ? 'error' : ''}
         />
         {errors.age && <label className='errorText'>{errors.age}</label>}
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

        <div className="inputs">
        <label>Şifre Tekrar</label>
        <input 
        type="password" 
        id="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        placeholder='Şifrenizi tekrar giriniz...'
        className={errors.confirmPassword ? 'error' : ''}
         />
         {errors.confirmPassword && <label className='errorText'>{errors.confirmPassword}</label>}
        </div>

        <button disabled={isSubmitting} type='submit' className='register'>ÜYE OL</button>
        <Link to="signin">Giriş Yap</Link>
    </form>
    </div>
  )
}

export default MainForm