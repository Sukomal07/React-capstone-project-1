import '../styles/SignUp.css'
function SignUp() {
    return (
        <div className="signupContainer">
            <div className="leftContainer">
                <h1 className='signupHeading'>Discover new things on Superapp</h1>
            </div>
            <div className="rightContainer">
                <div className='formDiv'>
                    <div className='titleDiv'>
                        <h1>Supper app</h1>
                        <p>Create your new account</p>
                    </div>
                    <form className='form'>
                        <div className='inputDiv'>
                            <input type="text" name='name' id='name' placeholder='Name' />
                            <span></span>
                        </div>
                        <div className='inputDiv'>
                            <input type="text" name='username' id='username' placeholder='UserName' />
                            <span></span>
                        </div>
                        <div className='inputDiv'>
                            <input type="email" name='email' id='email' placeholder='Email' />
                            <span></span>
                        </div>
                        <div className='inputDiv'>
                            <input type="number" name='mobile' id='mobile' placeholder='Mobile' />
                            <span></span>
                        </div>
                        <div className='checkboxDiv'>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <p>Share my registration data with Superapp</p>
                        </div>
                        <span className='checkSpan'></span>
                        <button type="submit" className='signupBtn'>Sign Up</button>
                        <div className='policyDiv'>
                            <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
