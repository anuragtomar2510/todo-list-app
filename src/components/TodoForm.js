import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')


    const inputRef = useRef(null)

    useEffect(() => {

        inputRef.current.focus()

    })

    const handleSubmit = (e) => {

        e.preventDefault()

        

        props.onSubmit({
            
            id : Math.floor(Math.random() * 10000),
            text : input

        })


        



        setInput('')

    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (

                            <>
                                <input
                                    type="text"
                                    placeholder="Update your todo..."
                                    value={input}
                                    name="text"
                                    className="todo-input" 
                                    onChange={(e) => setInput(e.target.value)}
                                    ref={inputRef}
                                />
                                <button className="todo-button">Edit</button>
                            </>
            ) : (

                            <>
                                <input
                                    type="text"
                                    placeholder="Add a todo..."
                                    value={input}
                                    name="text"
                                    className="todo-input" 
                                    onChange={(e) => setInput(e.target.value)}
                                    ref={inputRef}
                                />
                                <button className="todo-button">Add</button>
                        </>

            )}

        </form>
    )
}

export default TodoForm
