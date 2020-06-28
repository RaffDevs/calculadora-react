import React, {useState} from 'react';
import './Calculator.css';

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    operation: null,
    valA: '0',
    valB: '0'
}

export default (props)=>{

    let state = initialState;

    const [valor, setDisplay] = useState(state.displayValue)

    function clearMemory(){
        setDisplay(state.displayValue = '0')
        state.operation = null;
        state.valA = '0';
        state.valB = '0';
    };

    function setOperation(operation){
        if(operation !== '='){
            setDisplay(state.displayValue = '0');
            if(state.operation === null){
                state.operation = operation;
            }
            else{
                operate();
                state.operation = operation;
            };
        }
        else{
            console.log(state.operation)
            operate();
        };
    };

    function operate(){
        let resultado;
        switch(state.operation){
            case '+':
                resultado = parseFloat(state.valA) + parseFloat(state.valB);
                setDisplay(state.displayValue = resultado);
                state.valA = resultado;
                state.valB = '0';
                state.operation = null;
                console.log(resultado);
                break;
            case '-':
                resultado = parseFloat(state.valA) - parseFloat(state.valB);
                setDisplay(state.displayValue = resultado);
                state.valA = resultado;
                state.valB = '0';
                state.operation = null;
                break;
            case '*':
                resultado = parseFloat(state.valA) * parseFloat(state.valB);
                setDisplay(state.displayValue = resultado);
                state.valA = resultado;
                state.valB = '0';
                state.operation = null;
                break;
            case '/':
                resultado = parseFloat(state.valA) / parseFloat(state.valB);
                setDisplay(state.displayValue = resultado);
                state.valA = resultado;
                state.valB = '0';
                state.operation = null;
                break;

        };
    };

    function addDigit(n){
        if(n === '.' && state.displayValue.includes('.')){
            return 
        };
        const valueScreen = state.displayValue === '0' ? state.displayValue = n : state.displayValue += n
        if(state.operation === null){
            console.log(state.operation)
            state.valA = valueScreen;
            console.log(state.valA);
        }
        else{
            console.log(state.operation)
            state.valB = valueScreen;
            console.log(state.valB);
        };
        
        
        setDisplay(valueScreen);
        
    }
    return (
        <div className="calculator">
            <Display value={state.displayValue} />
            <Button label="AC" click={clearMemory} triple/>
            <Button label="/" click={setOperation} operation/>
            <Button label="9" click={addDigit}/>
            <Button label="8" click={addDigit}/>
            <Button label="7" click={addDigit}/>
            <Button label="+" click={setOperation} operation/>
            <Button label="6" click={addDigit}/>
            <Button label="5" click={addDigit}/>
            <Button label="4" click={addDigit}/>
            <Button label="-" click={setOperation} operation/>
            <Button label="3" click={addDigit}/>
            <Button label="2" click={addDigit}/>
            <Button label="1" click={addDigit}/>
            <Button label="*" click={setOperation} operation/>
            <Button label="0" click={addDigit} double/>
            <Button label="." click={addDigit}/>
            <Button label="=" click={setOperation} operation/>
        </div>
    );
};