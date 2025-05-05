import './App.css'
import styled from "styled-components";
import {Button} from "./components/Button.tsx";
import {useEffect, useState} from "react";

function App() {

    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        console.log(localStorage.getItem('counterValue'))
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])


    //increment
    const incrementCounterHandler = () => {

        const newCount: number = counter + 1
        setCounter(newCount)
        // if(newCount <= 5) {
        //     setCounter(newCount)
        // } else  {
        //     console.warn('Максимум досягнуто')
        // }

    }

    // delete counter
    const deleteIncrementCounterHandler = () => {
        setCounter(0)
    }
    //set localStorage
    // const setLocalStorageHandler = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(counter))
    // }

    //get localStorage
    // const getLocalStorageHandler =() => {
    //     const valueAsString = localStorage.getItem('counterValue')
    //     if(valueAsString ) {
    //         const newValue = JSON.parse(valueAsString)
    //         setCounter(newValue)
    //     }
    // }

    //clear localStorage
    // const clearLocalStorageHandler =() => {
    //     localStorage.clear()
    //     setCounter(0)}

    return (
        <MainStyled>
            <MainBoxStyled>
                <NumberFieldStyled>

                </NumberFieldStyled>
                <ButtonFieldStyled>
                    <Button
                    title={'set'}
                    style={{
                        color: '#292C35',
                        backgroundColor: '#63DBFD',
                        fontSize: '35px',
                        padding: '5px',
                        width: '150px',
                        cursor: 'pointer'
                    }}
                    />
                </ButtonFieldStyled>
            </MainBoxStyled>
            <MainBoxStyled>
                <NumberFieldStyled counter={counter}>{counter}</NumberFieldStyled>

                <ButtonFieldStyled>
                    <Button onClick={incrementCounterHandler}
                            title={'inc'}
                            disabledButton={counter >= 5}
                            className={counter >= 5 ? 'disabled-style' : ''}
                            style={{
                                color: '#292C35',
                                backgroundColor: '#63DBFD',
                                fontSize: '35px',
                                padding: '5px',
                                width: '150px',
                                cursor: counter >= 5 ? 'not-allowed' : 'pointer',
                                opacity: counter >= 5 ? 0.5 : 1
                            }}/>
                    <Button
                        onClick={deleteIncrementCounterHandler}
                        title={'reset'}
                        disabledButton={counter == 0}
                        className={counter == 0 ? 'disabled-style' : ''}
                        style={{
                            color: '#292C35',
                            backgroundColor: '#63DBFD',
                            fontSize: '35px',
                            padding: '5px',
                            width: '150px',
                            // cursor: 'pointer',
                            cursor: counter == 0 ? 'not-allowed' : 'pointer',
                            opacity: counter == 0 ? 0.5 : 1
                        }}/>
                </ButtonFieldStyled>
            </MainBoxStyled>

        </MainStyled>
    )
}

const MainStyled = styled.main`
    background-color: #292C35;
    height: 100%;
    display: flex;
    gap: 50px;
`
const MainBoxStyled = styled.div`
    background: none;
    border: 3px solid #63DBFD;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
type TypeProps = {
    color?: string
    counter: number
}

const NumberFieldStyled = styled.div<TypeProps>`
    color: ${(props) => props.counter >= 5 ? 'red' : '#292C35'};
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
    display: flex;             /* додаємо Flexbox */
    justify-content: center;   /* центрує по горизонталі */
    gap: 20px;                 /* відступ між кнопками */
    flex-wrap: wrap;
`


export default App
