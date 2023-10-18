import "./storedPasswords.scss";
import logo from "../../images/Logo.svg";


function StoredPasswords() {

    return (
        <div className="storedPasswords container">
            <header className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <h2 className="header__text">LCKD</h2>                
            </header>

            <div className="storedPasswords__showPasswords">
                <small>STORED PASSWORDS</small>
                <div className="storedPasswords__showPasswords__passwordContainer">
                <input type="text" placeholder="www.google.com" />
                <input type="text" placeholder="www.facebook.com"/>
                <input type="text" placeholder="www.twitter.com"/>
                <input type="text" placeholder="www.illuminati.org"/>                    
                </div>

            </div>
            <button className="btn">NEW LCKD</button>
        
        </div>
    )
}

export default StoredPasswords;