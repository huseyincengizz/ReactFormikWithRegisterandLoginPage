import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function WrongPage() {

  const Navigate = useNavigate();

  return (
    <>
    <h1>Bu sayfa bulunmamaktadır !</h1>
    <div className='back'>
    <Link onClick={Navigate("/")} className='backHome'>Anasayfa</Link>
    </div>
    </>
  )
}

export default WrongPage