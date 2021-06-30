import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
function Register ({history}){
	const [input,setInput]= useState({email:'', password:'' , name:''})
	let signupData = JSON.stringify(input)
	const onSubmit = (e) =>{

		e.preventDefault()
		console.log(signupData)
		fetch('http://localhost:3002/signup',{
			method:'POST',
			body:signupData, 
			headers:{
				'Content-Type' : 'application/json'
			}
		}).then(result=> result.json()).then(res=> {
			console.log(res)
			if(res.success) return history.push('/')
			if(!res.success) {
				alert('Something went wrong, please try again')
			}
		}).catch(e=>console.log(e))
	}
	return (
		<>
		<h1 style={{color:'white' , textAlign:'center'}}> Register </h1>
		<div className='form-container'>
		<form onSubmit={onSubmit}>
			<label htmlFor="#name">Name</label>
			<input type='text' id='name' name='email' value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})}/>
			<label htmlFor="#email">Email</label>
			<input type='text' id='email' name='email' value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}/>
			<label htmlFor="#password">Password</label>
			<input type='password' name='password' id='password' value={input.password} onChange={(e)=> setInput({...input, password:e.target.value})}/>
			<button type='submit' >Register</button>
			<div style={{color:'white'}}> If you already have an account , <Link to="/login"> login</Link> </div>
		</form>
		</div>
		</>
	)
}
export default Register;