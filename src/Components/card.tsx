import { title } from 'process'
import React from 'react'

const Items = [1,2,3,4,5]
const Item = [
    {
        id: 0,
        taste: 'fish',
        valume: 0.5,
        quantity: 2
    },
    {
        id: 1,
        taste: 'fish',
        valume: 0.5,
        quantity: 0
    }
]
const Card: React.FC = () => {
    return( 
       <>
            {Item.map((elem) => {
               return (
                <div className="container ">
                <div key={elem.id} className={(elem.quantity) ? 'block' : "block disabled"}>
                    <div className='title__content'>
                        <span className='title'>Cказочное заморское яство</span>
                        <h2 className='name__brand'>Нямушка</h2>
                        <h3>{elem.taste}</h3>
                        <span>
                        10 порций
                        Мышь в подарок
                        </span>
                    </div>
                        <div className='volume'>
                        <span>0,5 кг.</span>
                        </div>
   
                    </div>
                    <span className='footer'>Чего сидишь? Порадуй котэ, <a href="">купи</a></span>
                </div>
               )
            })}
            
            </>
        
    )
}

export default Card