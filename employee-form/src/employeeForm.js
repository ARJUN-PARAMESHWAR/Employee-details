import "../src/employeeForm.css"

function employeeForm() {

    return(
        
        <div class="fullContainer">
        <div class="form">
            <div class="formPart1">
                <div>Name</div>
                <div>Date of birth</div>
                <div>Gender</div>
                <div>Role</div>
                <div>Employee id</div>
                <div>Mobile number</div>
                <div>Nationality</div>
                <div>Address</div>

            </div>

            <div class="formPart2">
                <div>
                    <input type="text" placeholder="First Name" class="inputBar_Form name" />
                    <input type="text" placeholder="Last Name" class="inputBar_Form name"/>
                </div>

                <div>
                    <input type="date" placeholder="dd/mm/yyyy" class="inputBar_Form"/>
                </div>

                <div id="radioButton">
                    <input type="radio" id="male" name="gender"/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender"/>
                    <label for="female">Female</label>
                    <input type="radio" id="others" name="gender"/>
                    <label for="others">Others</label>
                </div>

                <div>
                    <input type="text" placeholder="e-g: Developer" class="inputBar_Form"/>
                </div>

                <div>
                    <input type="text" placeholder="e-g: 1ps001" class="inputBar_Form"/>
                </div>

                <div>
                    <input type="text" placeholder="(+91)" class="inputBar_Form"/>
                </div>

                <div>
                    <select>
                        <option value="" disabled selected>Choose your country</option>
                        <option>India</option>
                        <option>U.S.</option>
                        <option>U.K</option>
                        <option>Singapore</option>
                        <option>Malaysia</option>

                    </select>
                </div>

                <div>
                    <input type="text" placeholder="Line1" class="inputBar_Form addressLine" />
                    <input type="text" placeholder="Line2" class="inputBar_Form addressLine"/>
                    <input type="text" placeholder="Line3" class="inputBar_Form addressLine"/>
                </div>

                <div>
                    <input type="checkbox"/>
                    <span>I read all the</span>
                    <span><a href="https://www.facebook.com">terms and conditions</a> and I acknowledge that I have understood
                        them completely.</span>
                </div>

            </div>

            <button class="submitButton" onclick="submit()">Submit</button>


        </div>
    </div>
       
    );
}

export default employeeForm;

