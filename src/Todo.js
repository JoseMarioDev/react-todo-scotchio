import React from 'react'

export const Todo = ({todo}) => {
    return (
        <div className='todo'>
            {todo.text}            
        </div>
    )
}
