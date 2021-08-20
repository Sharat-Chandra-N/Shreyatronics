import './AdminLogin.css'
import { useAdminContext } from '../context/AdminContext';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const AdminLogin = () => {

    const {updateLoginCount, loginCount, updateLoginStatus} = useAdminContext()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const loginHandler = () => {
        if(process.env.REACT_APP_USER_NAME === username && process.env.REACT_APP_PASSWORD === password){
            history.push('/Shreyatronics/Admin/Home')
            updateLoginStatus()
        }else{
            updateLoginCount()
        }
    }

    return ( 
        <section className="login-section">
            <div className="login-main-section">
                <div className="login-message-section">
                    {loginCount >= 3 && <p>{`Account is blocked, please try later`}</p>}
                    {loginCount !== 0 && loginCount <= 2 && <p>{`Username and Password is wrong, login attemps left is ${3 - loginCount}`}</p>}
                </div>
                <div className="login-main-header">
                    <h2>Admin Login</h2>
                </div>
                <div className="main-input-section">
                    <label className="input-label-section">User Name : </label>
                    <input 
                        type="text" 
                        className="input-section" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className="main-input-section">
                    <label className="input-label-section">Password : </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="input-section"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className="login-button-section">
                    <button 
                        className="login-button" 
                        onClick = {() => loginHandler()}
                        disabled = {loginCount === 3 ? true : false}
                    >Login</button>
                </div>
            </div>
        </section>
     );
}

export default AdminLogin;