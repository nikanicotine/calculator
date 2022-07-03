import './App.css';
import {useState} from "react";

function App() {
    const [input, setInput] = useState('0')
    const [secondNumber, setSecondNumber] = useState('')
    const [sign, setSign] = useState('')

    const dot = () => {
        !input.toString().includes('.') ? setInput(input + '.') : console.log(input)
        !secondNumber.toString().includes('.') && secondNumber !== '' ? setSecondNumber(secondNumber + '.') : console.log(setSecondNumber)
    }

    const inv = () => {
        setInput((input * -1).toString())
        console.log(input, typeof input)
    }

    const insert = (e) => {
        console.log(typeof input, input, secondNumber, sign)
        sign !== '' ? setSecondNumber(secondNumber.concat(e.target.name)) :
            input === '0' || typeof input === "number" ? setInput(e.target.name) : setInput((input.concat(e.target.name)))
        console.log(input, secondNumber, sign)
        input === 'Error' ? clearAll() : console.log(input)
    }

    const insertSign = (e) => {
        input !== '0' ? setSign(e.target.name) : console.log(input, secondNumber)
        console.log(input, secondNumber, sign)
        input === 'Error' ? clearAll() : console.log(input)
    }

    const clearAll = () => {
        setInput('0')
        setSecondNumber('')
        setSign('')
        console.log(input, typeof input, input.length)
    }

    const clear = () => {
        console.log(typeof input, input, input.length)
        setInput(input => input.toString())
        setSecondNumber(secondNumber => secondNumber.toString())
        console.log(typeof input, input, input.length)
        secondNumber !== '' ? setSecondNumber(prevSecondNumber => prevSecondNumber.substring(0, prevSecondNumber.length - 1)) :
            sign !== '' ? setSign('') :
                input.length === 1 ? setInput('0') : setInput(prevInput => prevInput.substring(0, prevInput.length - 1))
        console.log(typeof input, input, input.length)
        console.log(typeof secondNumber, secondNumber, secondNumber.length)
    }

    const operations = () => {
        console.log(typeof input, input, secondNumber, sign)
        switch (sign) {
            case ('+'):
                setInput((+input) + (+secondNumber))
                // setInput(prevInput => (+prevInput) + (+secondNumber))
                console.log(typeof input, input, secondNumber, sign)
                setSecondNumber('')
                setSign('')
                console.log(typeof input, input, typeof secondNumber, secondNumber, sign)
                break
            case ('‒'):
                setInput(input - secondNumber)
                setSecondNumber('')
                setSign('')
                console.log(typeof input, input, secondNumber, sign)
                break
            case ('/'):
                secondNumber === '0' ? setInput('Error') : setInput(input / secondNumber)
                console.log()
                setSecondNumber('')
                setSign('')
                console.log(typeof input, input, secondNumber, sign)
                break
            case ('✕'):
                setInput(input * secondNumber)
                setSecondNumber('')
                setSign('')
                console.log(typeof input, input, secondNumber, sign)
                break
            case ('%'):
                setInput(input / 100 * secondNumber)
                setSecondNumber('')
                setSign('')
                console.log(input, sign)
                break
            default:
            // do nothing
        }
        console.log(input, secondNumber, sign)
    }

    return (
        <header className="App-header">
            <div className="calc">
                <div className="calc-screen">
                    <p>{input} {sign} {secondNumber}</p>
                </div>
                <div className="buttons">
                    <button className="btn ac bgLightBlue" onClick={clearAll}>AC</button>
                    <button className="btn c bgLightBlue" onClick={clear}>C</button>
                    <button className="btn plusMinus bgLightBlue" onClick={inv}>+/-</button>
                    <button className="btn division bgBlue" name='/' onClick={insertSign}>/</button>

                    <button className="btn seven" name='7' onClick={insert}>7</button>
                    <button className="btn eight" name='8' onClick={insert}>8</button>
                    <button className="btn nine" name='9' onClick={insert}>9</button>
                    <button className="btn multiply bgBlue" name='✕' onClick={insertSign}>✕</button>

                    <button className="btn four" name='4' onClick={insert}>4</button>
                    <button className="btn five" name='5' onClick={insert}>5</button>
                    <button className="btn six" name='6' onClick={insert}>6</button>
                    <button className="btn minus bgBlue" name='‒' onClick={insertSign}>‒</button>

                    <button className="btn one" name='1' onClick={insert}>1</button>
                    <button className="btn two" name='2' onClick={insert}>2</button>
                    <button className="btn three" name='3' onClick={insert}>3</button>
                    <button className="btn plus bgBlue" name='+' onClick={insertSign}>+</button>

                    <button className="btn zero" name='0' onClick={insert}>0</button>
                    <button className="btn dot" onClick={dot}>.</button>
                    <button className="btn percent" name='%' onClick={insertSign}>%</button>
                    <button className="btn equal bgBlue" onClick={operations}>=</button>
                </div>
            </div>
        </header>
    );
}

export default App;