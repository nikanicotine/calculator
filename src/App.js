import './App.css';
import {useState} from "react";
import {Button} from "antd";

function App() {
    const [input, setInput] = useState('0')
    const [secondNumber, setSecondNumber] = useState('')
    const [sign, setSign] = useState('')

    const dot = () => {
        !input.toString().includes('.') ? setInput(input + '.') : console.log(input)
        // !input.includes('.') ? setInput(input + '.') : console.log(input)
        console.log(input)
    }

    const inv = () => {
        setInput((input * -1).toString())
        console.log(input, typeof input)
    }

    const insert = (e) => {
        sign !== '' ? setSecondNumber(secondNumber.concat(e.target.name)) : setInput((input.concat(e.target.name)))
        console.log(input, secondNumber, sign)
    }

    const insertSign = (e) => {
        input !== '0' && secondNumber === '' ? setSign(sign.concat(e.target.name)) : console.log(input, secondNumber) //тут не concat??
        console.log(input, secondNumber, sign)
    }

    const clearAll = () => {
        setInput('0')
        setSecondNumber('')
        setSign('')
        console.log(input, typeof input, input.length)
    }

    const clear = () => {
        console.log(typeof input, input, input.length)
        setInput(input.toString())
        console.log(typeof input, input, input.length)
        secondNumber !== '' ? setSecondNumber(secondNumber.substring(0, input.length - 1)) :
            sign !== '' ? setSign('') :
                input.length === 1 ? setInput('0') : setInput(input.substring(0, input.length - 1))
        console.log(typeof input, input, input.length)
        console.log(typeof secondNumber, secondNumber, secondNumber.length)
    }

    const operations = () => {
        console.log(typeof input, input, secondNumber, sign)
        switch (sign) {
            case ('+'):
                setInput((+input) + (+secondNumber))
                console.log(typeof input, input, secondNumber, sign)
                setSecondNumber('')
                setSign('')
                console.log(typeof input, input, typeof secondNumber, secondNumber, sign)
                break
            case ('-'):
                setInput(input - secondNumber)
                setSecondNumber('')
                setSign('')
                console.log(typeof input, input, secondNumber, sign)
                break
            case ('/'):
                secondNumber == '0' ? setInput('Error') : setInput(input / secondNumber)
                setSecondNumber('')
                setSign('')
                console.log(typeof input, input, secondNumber, sign)
                break
            case ('*'):
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
        <div className="App">
            <header className="App-header">
                <div className="calc">
                    <div className="calc-screen">
                        <p>{input} {sign} {secondNumber}</p>
                    </div>
                    <div className="buttons">
                        {/*<button className="btn ac bgLightBlue" onClick={clearAll}>AC</button>*/}
                        <Button className="btn ac bgLightBlue" onClick={clearAll}>AC</Button>
                        <button className="btn c bgLightBlue" onClick={clear}>C</button>
                        <button className="btn plusMinus bgLightBlue" onClick={inv}>+/-</button>
                        <button className="btn division bgBlue" name='/' onClick={insertSign}>/</button>

                        <button className="btn seven" name='7' onClick={insert}>7</button>
                        <button className="btn eight" name='8' onClick={insert}>8</button>
                        <button className="btn nine" name='9' onClick={insert}>9</button>
                        <button className="btn multiply bgBlue" name='*' onClick={insertSign}>*</button>

                        <button className="btn four" name='4' onClick={insert}>4</button>
                        <button className="btn five" name='5' onClick={insert}>5</button>
                        <button className="btn six" name='6' onClick={insert}>6</button>
                        <button className="btn minus bgBlue" name='-' onClick={insertSign}>-</button>

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
        </div>
    );
}

export default App;