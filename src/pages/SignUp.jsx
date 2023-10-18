import { useState } from 'react';
import '../styles/Signup.css'
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        nameError: '',
        userNameError: '',
        emailError: '',
        mobileError: '',
        checkBoxError: ''
    })
    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })

    }
    function handleSubmit(e) {
        e.preventDefault();
        let hasError = false;

        const newErrors = {
            nameError: '',
            userNameError: '',
            emailError: '',
            mobileError: '',
            checkBoxError: ''
        };

        // Validation regex patterns
        const namePattern = /^[a-zA-Z\s]+$/;
        const usernamePattern = /^[a-zA-Z0-9_]+$/;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const mobilePattern = /^[0-9]{10}$/;
        if (!data.name || !namePattern.test(data.name)) {
            hasError = true;
            newErrors.nameError = 'Please enter a valid name';
        }

        if (!data.username || !usernamePattern.test(data.username)) {
            hasError = true;
            newErrors.userNameError = 'Please enter a valid username';
        }

        if (!data.email || !emailPattern.test(data.email)) {
            hasError = true;
            newErrors.emailError = 'Please enter a valid email address';
        }

        if (!data.mobile || !mobilePattern.test(data.mobile)) {
            hasError = true;
            newErrors.mobileError = 'Please enter a valid 10-digit mobile number';
        }

        if (!document.getElementById('checkbox').checked) {
            hasError = true;
            newErrors.checkBoxError = 'Check this box if you want to proceed';
        }
        setErrors(newErrors);

        if (!hasError) {
            localStorage.setItem('userData', JSON.stringify(data));
            localStorage.setItem('isLoggedIn', true);
            setErrors({
                nameError: '',
                userNameError: '',
                emailError: '',
                mobileError: '',
                checkBoxError: ''
            })
            setData({
                name: '',
                username: '',
                email: '',
                mobile: ''
            })
            navigate("/select")
        }
    }


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
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='inputDiv'>
                            <input type="text" name='name' id='name' placeholder='Name' onChange={handleChange} />
                            <span>{errors.nameError}</span>
                        </div>
                        <div className='inputDiv'>
                            <input type="text" name='username' id='username' placeholder='UserName' onChange={handleChange} />
                            <span>{errors.userNameError}</span>
                        </div>
                        <div className='inputDiv'>
                            <input type="email" name='email' id='email' placeholder='Email' onChange={handleChange} />
                            <span>{errors.emailError}</span>
                        </div>
                        <div className='inputDiv'>
                            <input type="number" name='mobile' id='mobile' placeholder='Mobile' onChange={handleChange} />
                            <span>{errors.mobileError}</span>
                        </div>
                        <div className='checkboxDiv'>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <p>Share my registration data with Superapp</p>
                        </div>
                        <span className='checkSpan'>{errors.checkBoxError}</span>
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
