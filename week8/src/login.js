import React,{useState} from 'react'
import {Link , Redirect} from 'react-router-dom'
function Login ({history}){
	const [input,setInput]= useState({email:'', password:''})
	let loginData = JSON.stringify(input)
	const onSubmit = (e) =>{

		e.preventDefault()
		console.log(loginData)
		fetch('http://localhost:3002/signin',{
			method:'POST',
			body:loginData, 
			headers:{
				'Content-Type' : 'application/json'
			}
		}).then(result=> result.json()).then(res=> {
			console.log(res)
			if(res.success) return history.push('/')
			if(!res.success) {
				alert('something went wrong, please try again with a registered email')
			}
		}).catch(e=>console.log(e))
	}
	return (
		<>
		<h1 style={{color:'white' , textAlign:'center'}}> Login </h1>
		<div className='form-container'>
		<form onSubmit={onSubmit}>
			<label htmlFor="#email">Email</label>
			<input type='text' id='email' name='email' value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}/>
			<label htmlFor="#password">Password</label>
			<input type='password' name='password' id='password' value={input.password} onChange={(e)=> setInput({...input, password:e.target.value})}/>
			<button type='submit' >Submit</button>
			<div> If you dont have an account , <Link to="/register"> sign up</Link> </div>
		</form>
		</div>
		</>
	)
}
export default Login;