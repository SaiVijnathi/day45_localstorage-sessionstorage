import React, { useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from './TopNavigation';

function SignupForm() {
    const [profilePic, setProfilePic]= useState("./images/profile.jpg");
    const [ageCategory, setAgeCategory] = useState();
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [firstNameMessage, setFirstNameMessage] = useState("");
    const [lastNameValid, setLastNameValid] = useState(true);
    const [lastNameMessage, setLastNameMessage] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordMessage, setPasswordMessage] = useState("");



    let msgLabelRef= useRef();
    let stateSelectRef = useRef();
    let fnInputRef = useRef();
    let lnInputRef = useRef();
    let maleRbRef = useRef();
    let femaleRbRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();  
    let passwordInputRef = useRef();  

    let selectedGender;
    let salutation;
    let maritalStatus;

    let languagesKnown = {
        tel:"false",
        hin:"false",
        eng:"false",
        tam:"false",
        kan:"false"
    }
    

    let onCreateAccount = ()=>{
        if(selectedGender == "Male"){
            salutation="Mr";
        }
        else{
            if(maritalStatus == "Married"){
                salutation = "Mrs"
            }
            else{
                salutation = "Ms";
            }
        }

        console.log(languagesKnown);
        msgLabelRef.current.innerHTML = `${salutation}. ${fnInputRef.current.value} ${lnInputRef.current.value} 
        from ${stateSelectRef.current.value}, your account has been created. You know 
        ${languagesKnown.tel == true? "Telugu ":""} 
        ${languagesKnown.hin == true? "Hindi ":""}
        ${languagesKnown.eng == true? "English ":""}
        ${languagesKnown.tam == true? "Tamil ":""}
        ${languagesKnown.kan == true? "Kannada":""}.`;
    }


    const handleAgeChange = () => {
        let age = Number(ageInputRef.current.value);
        if (age <= 5) {
            setAgeCategory('Infant');
        } else if (age <= 12) {
            setAgeCategory('Child');
        } else if (age <= 19) {
            setAgeCategory('Teenager');
        } else if (age <= 30) {
            setAgeCategory('Youth');
        } else if (age <= 65) {
            setAgeCategory('Middle Aged');
        } else if (age <= 100) {
            setAgeCategory('Old');
        } else {
            setAgeCategory('Not a valid age');
        }
    };
    
    let onFirstNameChange = () => {
        const firstName = fnInputRef.current.value;
        if (!firstName) {
            setFirstNameValid(false);
            setFirstNameMessage("❌Invalid");
        } else if (!/^[A-Za-z]+$/.test(firstName)) {
            setFirstNameValid(false);
            setFirstNameMessage("❌Invalid");
        } else {
            setFirstNameValid(true);
            setFirstNameMessage("");
        }
    };

    
    let onLastNameChange = () => {
        const lastName = lnInputRef.current.value;
        if (!lastName) {
            setLastNameValid(false);
            setLastNameMessage("❌Invalid");
        } else if (!/^[A-Za-z]+$/.test(lastName)) {
            setLastNameValid(false);
            setLastNameMessage("❌Invalid");
        } else {
            setLastNameValid(true);
            setLastNameMessage("");
        }
    };



let onEmailChange = () => {
    const email = emailInputRef.current.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
        setEmailValid(false);
        setEmailMessage("❌Invalid");
    } else if (!emailPattern.test(email)) {
        setEmailValid(false);
        setEmailMessage("❌Invalid");
    } else {
        setEmailValid(true);
        setEmailMessage("");
    }
};



let onPasswordChange = () => {
    const password = passwordInputRef.current.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password) {
        setPasswordValid(false);
        setPasswordMessage("❌Invalid");
    } else if (!passwordPattern.test(password)) {
        setPasswordValid(false);
        // alert("Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit.")
        setPasswordMessage("❌Invalid");
    } else {
        setPasswordValid(true);
        setPasswordMessage("");
    }
};





  return (
    <div>
    <TopNavigation/>
    <h1>Signup</h1>
    <form>
    <div>
        <label>Profile Pic</label>
        <input type='file' onChange={(e)=>{
            console.log(e.target.files);
            let selectedImage= URL.createObjectURL(e.target.files[0]);
            console.log(selectedImage);
            setProfilePic(selectedImage);
        }}></input>
    </div>
    <div>
            <img src={profilePic} alt="imgURL"></img>
        </div>

        <div>
            <label>First Name</label>
            <input ref={fnInputRef} onChange={onFirstNameChange}></input>
    {!firstNameValid && <span style={{color: "red"}}>{firstNameMessage}</span>}
        </div>


        <div>
            <label>Last Name</label>
            <input ref={lnInputRef} onChange={onLastNameChange}></input>
            {!lastNameValid && <span style={{color: "red"}}>{lastNameMessage}</span>}        
        </div>

        
        <div>
            <label>Gender</label>
            <input type="radio" name='gender' ref={maleRbRef} onChange={()=>{
                if(maleRbRef.current.checked == true){
                    selectedGender="Male";
                }
            }}></input>
            <label>Male</label>
            <input type="radio" name='gender' ref={femaleRbRef} onChange={()=>{
                if(femaleRbRef.current.checked == true){
                    selectedGender="Female";
                }
            }}></input>
            <label>Female</label>
        </div>

        <div>
            <label>Marital Status</label>
            <input type="radio" name="marraige" onChange={(eo)=>{
                console.log(eo);
                if(eo.target.checked == true){
                    maritalStatus="Married";
                }
            }}></input>
            <label>Married</label>

            <input type="radio" name="marraige" onChange={(e)=>{
                if(e.target.checked == true){
                    maritalStatus = "Unmarried";
                }
            }}></input>
            <label>Unmarried</label>
        </div>

        <div>
    <label>Age</label>
    <input
        ref={ageInputRef}
        onChange={handleAgeChange}  
    ></input>
    <span>{ageCategory}</span>
</div>
        <div>
            <label>Email</label>
            <input ref={emailInputRef} type="email" onChange={onEmailChange}></input>
            {!emailValid && <span style={{color: "red"}}>{emailMessage}</span>}        </div>
        <div>
            <label>Password</label>
            <input ref={passwordInputRef} type="password" onChange={onPasswordChange}></input>
            {!passwordValid && <span style={{color: "red"}}>{passwordMessage}</span>}        </div>
        <div>
            <label>State</label>
            <select ref={stateSelectRef}>
                <option>Select State</option>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
                <option>Karnataka</option>
                <option>Tamilnadu</option>
                <option>Kerala</option>
                <option>MadhyaPradesh</option>
            </select>
        </div>

            <div>
                <label>Languages</label>
                <div id="lang">
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.tel = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>Telugu</label>
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.hin = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>Hindi</label>
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.eng = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>English</label>
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.tam = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>Tamil</label>
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.kan = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>Kannada</label>
                </div>
            </div>

        <div>
            <button type='button' onClick={()=>{
                onCreateAccount();
            }}>Signup</button>
        </div>

        <label id="msg" ref={msgLabelRef}></label>
    </form>
    <div className='validate'>
    <p style={{color:"white"}}>Already have an account? </p>
    <Link to="/" style={{textDecoration:"none",color:"yellow",fontSize:"1.3rem"}}>LogIn</Link>
    </div>
    </div>
  )
}

export default SignupForm;