import { useState } from "react"
function AddTask({onAdd}) {
    
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [id, setId] = useState(0)


    const onSubmit = (e) =>{
        e.preventDefault()
        setId(id + 1)
    
        if(!text){
            alert('Please Add A Task')
        }

        onAdd({id, text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return(
    <form className="form" >
        <div>
            <div className="input-task">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText( e.target.value)}/>
            </div>

            <div className="input-day">
                <label htmlFor=""> Day & Time</label>
                <input type="text" placeholder="Add Day & Time" onChange={(e) => setDay(e.target.value)}/>
    
            </div>
        </div>

        <div >
            <button onClick={onSubmit} className="Submit-btn" type="submit"> Save Task</button>
        </div>
    </form>)
}

export default AddTask