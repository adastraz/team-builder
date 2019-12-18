import React, {useState} from 'react';
import './App.css';
import Form from './Form'
import Members from './Members'

function App() {
  const [teamMembers,addMembers] = useState([
    {
      name: 'Tyler',
      email : 'tylergosox@gmail.com',
      role : 'Web Developer'
    }
  ])

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    addMembers([...teamMembers,newMember])
  }
  return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
      <Members teamMembers={teamMembers}/>
    </div>
  );
}

export default App;