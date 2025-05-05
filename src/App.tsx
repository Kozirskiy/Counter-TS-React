import './App.css'
import styled from "styled-components";
import {Button} from "./components/Button.tsx";
import {useState} from "react";

function App() {


    const [counter, setCounter] = useState<number>(0)

    const incrementHandler = () => {
        const newCount: number = counter + 1
        setCounter(newCount)
    }

    const deleteIncrement = () => {
        setCounter(0)
    }

    return (
        <MainStyled>
            <MainBoxStyled>
                <NumberFieldStyled counter={counter}>{counter}</NumberFieldStyled>

                <ButtonFieldStyled>
                    <Button onClick={incrementHandler} title={'inc'} style={{
                        color: '#292C35',
                        backgroundColor: '#63DBFD',
                        fontSize: '35px',
                        marginRight: '20px',
                        padding: '5px',
                        width: '150px',
                        cursor: 'pointer'
                    }}/>

                    <Button
                        onClick={deleteIncrement}
                        title={'reset'} style={{
                        color: '#292C35',
                        backgroundColor: '#63DBFD',
                        fontSize: '35px',
                        marginRight: '20px',
                        padding: '5px',
                        width: '150px',
                        cursor: 'pointer'
                    }}/>
                </ButtonFieldStyled>
            </MainBoxStyled>
        </MainStyled>
    )
}

const MainStyled = styled.main`
    background-color: #292C35;
    height: 100%;
`
const MainBoxStyled = styled.div`
    background: none;
    border: 3px solid #63DBFD;
    padding: 20px;
    border-radius: 15px;
`
type TypeProps = {
    color?: string
    counter: number
}

const NumberFieldStyled = styled.div<TypeProps>`
    color: ${(props)=> props.counter >= 5 ? 'red' : '#292C35'};
    //color: #292C35;
    background-color: #63DBFD;
    width: 350px;
    height: 150px;
    border-radius: 15px;
    margin-bottom: 30px;
    font-size: 70px;
    font-weight: bold;
`

const ButtonFieldStyled = styled.div`
    border: 3px solid #63DBFD;
    border-radius: 15px;
    padding: 15px;
`


export default App
