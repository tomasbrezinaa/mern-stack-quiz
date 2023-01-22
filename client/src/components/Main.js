import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Main() {
    const inputRef = useRef(null)
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz App</h1>

            <ol>
                <li>You will be asked 10 questions in a row.</li>
                <li>For correct answer you receive 10 points</li>
                <li>Each question have three options , only one is correct</li>
                <li>You can change answer before the quiz finish</li>
                <li>You will receive a result at the end</li>
            </ol>

            <form id='form'>
                <input ref={inputRef} type='text' placeholder='Username*' />
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'}>I'm ready</Link>
            </div>

        </div>
    )
}

export default Main
