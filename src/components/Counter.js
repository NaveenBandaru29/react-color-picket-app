import React from 'react'
import './Counter.css'
const Counter = (props) => {

    const [colorInput,setColorInput] = React.useState(props.count)

    const { step, max } = props
    
    const incNum = (num) => {
        if (num < max) {
            return Math.round((num + step)*100)/100
        }
        return 0   
    }
    const decNum = (num) => {
        if (num > 0) {
            return Math.round((num - step)*100)/100
        }
        return max
        
    }


    const increment = () => {
        setColorInput((prevCount) => incNum(prevCount))
        props.onSetCount((prevCount) =>incNum(prevCount))
    }
    
    const decrement = () => {
        setColorInput((prevCount) => decNum(prevCount))
        props.onSetCount((prevCount) => decNum(prevCount))
    }

    const changeHandler = (event) => {
        const colorNumber = event.target.value
        if (isNaN(colorNumber) ||  colorNumber > max || colorNumber < 0) {
            return
        }
        setColorInput(prev => Number(colorNumber))
        props.onSetCount(prevnum=> Number(colorNumber))
    }

    return (
        <div>
        <div className='title'>{ props.title}</div>
        <div className='counter'>
            <button className='plus' onClick={increment}>+</button>
            <input type='text' className='input' value={colorInput} onChange={changeHandler} />
            <button className='minus' onClick={decrement}>-</button>
        </div>
        </div>
    )
}

export default Counter