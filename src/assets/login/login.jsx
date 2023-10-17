import "./login.scss";



function Login() {

    return (
        <div className="login container">
            <h1>LCKD</h1>
            <h3>KEEPING YOUR PASSWORDS SAFE</h3>
            <div>
                <small>USERNAME</small>
                <input type="text" placeholder="username" />
                <small>PASSWORD</small>
                <input type="text" placeholder="password"/>
            </div>
            <button>LET ME IN</button>
        
        </div>
    )
}

export default Login;