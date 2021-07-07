import React, {useState} from 'react'

const Form = props => {
    
    const [member,setMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChanges = e => {
        setMember({...member,
        [e.target.name]:e.target.value})
    }

    const submitForm = e => {
        e.preventDefault()
        props.addNewMember(member)
        setMember({
            name:'',
            email: '',
            role: ''
        })
    }

    return (
        <>
        <form onSubmit={submitForm}>
            <label>
                Name : <input 
                type='text' 
                value = {member.name}
                name='name'
                placeholder='name'
                onChange={handleChanges}
                />
            </label>
            <label>
                Email : <input 
                type='email' 
                value={member.email}
                name='email'
                placeholder='email'
                onChange={handleChanges}
                />
            </label>
            <label>
                Role : <input 
                type='text' 
                value={member.role}
                name='role'
                placeholder='role'
                onChange={handleChanges}
                />
            </label> <br/>
            <button type='submit'>Add</button>
        </form>
        </>
    )
}

export default Form