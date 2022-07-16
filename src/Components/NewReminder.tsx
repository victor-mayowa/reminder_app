import React, {useState} from 'react'

interface NewReminderProps{
    onAddReminder:( title:string) => void
}

const NewReminder = ({onAddReminder}:NewReminderProps): JSX.Element => {

    const [title, setTitle] = useState("")

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        if(!title) return
        onAddReminder(title)
        setTitle("")
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='title'>Inputs</label>
            <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} className='form-control' />
            <button className='btn btn-primary rounded-pill my-4'>Add reminder</button>
        </form>
    )
}

export default NewReminder