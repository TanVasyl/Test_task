import React from 'react'

const Item= [
    {
        id: 0,
        taste: 'с фуа-гра',
        valume: '0.5',
        quantity: 2,
        gift: 'мышь в подарок',
        selected: false,
        description: "Печень утки разварная с артишоками."
    },
    {
        id: 1,
        taste: 'с рыбой',
        valume: '2',
        quantity: 0,
        gift: '2 мыши в подарок',
        selected: false,
        description: "Головы щучьи с чесноком да свежайшая сёмгушка."
    },
    {
        id: 2,
        taste: 'с курой',
        valume: '5',
        quantity: 1,
        gift: '5 мышей в подарок',
        selected: true,
        description: "Филе из цыплят с трюфелями в бульоне."
    }
]
const Card: React.FC = () => {
    return( 
       <div className="container ">
            {Item.map((elem) => {
               return (
                    <div>
                        <div key={elem.id} className={((elem.quantity) ? 'block' : "block disabled") + ((!elem.selected) ? '' : ' selected') }>
                        <div className={(elem.quantity) ? '' : "overlay"}>
                            <div className='title__content'>
                                <span className='title'>Cказочное заморское яство</span>
                                <div className='name__brand'>
                                    <span>Нямушка</span>
                                    <span className='taste'>{elem.taste}</span>
                                </div>
                                <p className='optionally'>
                                    <span className='portions'>
                                    {+elem.valume * 20} порций
                                    </span>
                                    <span>{elem.gift}</span>
                                    <span>
                                    {(+elem.valume >= 5) ? 'заказчик доволен' : ''}
                                    </span>
                                </p>
                            </div>
                            <div className={(elem.quantity) ? 'valume' : " valume inactive "}>
                                <span className='weight'>{elem.valume}</span>
                                <span>кг</span>
                            </div>
                        </div>
                        </div>
                        <p className='footer'>
                            {(elem.selected) 
                            ? <div>{elem.description}</div> 
                            : (elem.quantity <= 0) ? <div style={{color:'#FFFF66'}}>
                                    Печалька, {elem.taste} закончился
                                </div> 
                            : <div>Чего сидишь? Порадуй котэ, 
                                    <button className='sell'>купи</button>
                                </div>  
                            }
                        </p>
                    </div>
                   
               )
            })}
        </div>
    )
}

export default Card
