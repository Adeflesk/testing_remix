import { useActionData, json, redirect } from "remix"
import {db} from '~/utils/db.server'

function validateUsername(username){
    if(typeof username !== 'string' || title.length < 3){
      return 'Name should be at least 3 characters long'
    }
  }
function validatePassword(password){
    if(typeof password !== 'string' || title.length < 6){
      return 'Password should be at least 6 characters long'
    }
  }

function badRequest(data){
    return json(data, {status: 400})
}

export const action = async ({request}) => {
  const fomr = await request.formData()
  const loginType = form.get('loginType')
  const username = form.get('username')
  const password = form.get('password')

  const fields = {loginType,username,password}

  const fieldErrors = {
      username: validateUsername(username),
      password: validatePassword(password),
  }

  if (Object.values(fieldErrors).some(Boolean)){
    console.log(fieldErrors)
    return badRequest({fieldErrors, fields})
  } 


}

const Login = () => {
    const actionData = useActionData()
    return (
       <div className="auth-container">
           <div className="page-header">
               <h1>Login</h1>
           </div>
      
       <div className="page-content">
           <form method="POST">
               <fieldset>
                   <legend>Login or Register</legend>
                   <label>
                       <input type="radio" name='loginType'
                       value='login'
                       defaultChecked={!actionData?.fields?.loginType ||
                       actionData?.fields?.loginType === 'login' } /> Login
                   </label>
                   <label>
                       <input type="radio" name='loginType'
                       value='register' /> Register
                   </label>
               </fieldset>
               <div className="form-control">
                   <label htmlFor="username">Username</label>
                   <input type="text" name="username" id="username" />
                   <div className="error"></div>
               </div>
               <div className="form-control">
                   <label htmlFor="Password">Password</label>
                   <input type="text" name="password" id="password" />
                   <div className="error"></div>
               </div> 
               <button className="btn btn-block" type="submit">
                   Submit
               </button>
           </form>
       </div> 
       </div>
    )
}

export default Login
