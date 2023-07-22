import React from 'react'
import '../Styles/box.css'


const Box = () => {
  return (
    <> 
        <div className='reg-page'>
            <div className='box'>
                 <div className='text'>
                    <h1>Зарегистрироваться как заказчик или работник</h1>
                 </div>
                 <div className='registerselection'>
                        <div className='customer'>
                            
                        </div>
                        <div  className='freelancer'>
                            
                        </div>
                 </div>
                 <button className='btn'>Создать аккаунт</button>
            </div>
        </div>
    </>
  )
}

export default Box