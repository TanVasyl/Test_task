import React from 'react'

type State = {
    id: number;
    taste: string;
    valume: string;
    quantity: number;
    gift: string;
    selected: boolean;
    description: string;
}

const initialState:State[]= [
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
        selected: false,
        description: "Филе из цыплят с трюфелями в бульоне."
    }
]
const Card: React.FC = () => {
    const [items, setItems] = React.useState(initialState)
    const [leaveElem, setLeaveElem] = React.useState(false)
    console.log('render');
    
    const select = (elem:State) => {
        const newItems = items.map((item) => {
            if(item.id === elem.id) {
                return {...item, selected: !item.selected}
            }
            return item
        })
        setItems(newItems)
    }
    const handlerMouseLeave = React.useCallback((event:React.MouseEvent<Element, MouseEvent>) => {
        if(event.type === 'mouseleave') {
            setLeaveElem(true)
        }        
    },[])
    const handlerMouseEnter = React.useCallback((event:React.MouseEvent<Element, MouseEvent>) => {
        if(event.type === 'mouseenter') {
            setLeaveElem(false)
        }
    },[])
    const hover = () =>{
        if(leaveElem) {
            return '__hover'
        } else {
            return ''
        }
    }
    const cls = (elem:State) => {
        if(elem.quantity) {
            if(elem.selected) {
                return ` selected${hover()}`
            }
            return ` block${hover()}`
        } else {
            return ` disabled`
        } 
    }
    return( 
       <div className="container">
            {items.map((elem) => {
               return (
                    <div key={elem.id} >
                        <div 
                        className={'block' + cls(elem)} 
                        onMouseLeave={handlerMouseLeave}
                        onMouseEnter={handlerMouseEnter}
                        onClick={() =>select(elem)}
                        >
                        <div className={(elem.quantity) ? '' : "overlay"}>
                            <div className='title__content'>
                                {
                                (('block' + cls(elem)) !== 'block selected__hover') 
                                ?
                                <span className='title'>Cказочное заморское яство</span>
                                :
                                <span className='title__selected'>Котэ неодобряет?</span>
                                }
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
                                <span className='weight'>{elem.valume.replace('.' , ",")}</span>
                                <span>кг</span>
                            </div>
                        </div>
                        </div>
                        <p className='footer'>
                            {(elem.selected) 
                            ? <span>{elem.description}</span> 
                            : (elem.quantity <= 0) ? <span style={{color:'#FFFF66'}}>
                                    Печалька, {elem.taste} закончился
                                </span> 
                            : <span>Чего сидишь? Порадуй котэ,  
                                    <button className='btn__sell'  onClick={() =>select(elem)}
                                    > купи</button>
                                </span>  
                            }
                        </p>
                    </div>
               )
            })}
        </div>
    )
}

export default Card
