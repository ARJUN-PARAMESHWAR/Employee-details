
function App() {

    let userName;
    let password;
    function userDetails1(e) {
        userName = e.target.value;
    }
    
    function userDetails2(e) {
        password = e.target.value;
    }

    function userCred(){
        console.log(userName);
        console.log(password);
        checkCred();
    }

    function checkCred(){
        console.log(userName.length);
        console.log(password.length);
        if(userName.length>=5 && password.length>=8)
        {
            alert("Welcome! " + userName)
            
            window.open("file:///home/arjunparameshwar/Desktop/demo1.html","blank");
        }

        else
        {
            alert("Please enter valid credentials");
        }
    }

    

  return (
    <div className="baseContainer">
    <div className="form">
        <span className="login">Login</span>
        <div className="formContents">

            <div className="username">
                <span className="fa-solid fa-user formicons"></span>
                <input name="username" type="text" placeholder="Enter username" className="inputBar" id="input1" onChange={userDetails1} />
            </div>

            <div className="password">
                <span className="fa-solid fa-lock formicons"></span>
                <input name ="password" type="password" placeholder="Password" className="inputBar" id="input2"  onChange={userDetails2}/>
            </div>
            <span className="forgotPassword"><a href="https://www.youtube.com/watch?v=KLhH-wnqaBg">Forgot Password?</a></span>


            <button className="loginButton" onClick={userCred}>LOGIN</button>

            

        </div>

        <hr className="line"/>

        <div className="formContents_1">
            <span className="signupOption"> or Sign Up Using</span>
            <div className="signupOption_1">
                <div className="signupPlatform">
                    <span className="fa-brands fa-facebook-f"></span>
                </div>
                <div className="signupPlatform">
                    <a href="https://www.instagram.com"> <span className="fa-brands fa-instagram"></span> </a>

                </div>

                <div className="signupPlatform">
                    <span className="fa-brands fa-twitter"></span>
                </div>
            </div>


        </div>

        <div className="formContents_2">
            <div>Don't have an account yet?</div>
            <div><a href="https://accounts.google.com/signup/">Create an account</a></div>
        </div>

    </div>
</div>

  );
}





export default App;
