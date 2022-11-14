import logo from './logo.svg';
import './App.css';
//import Form from './Components/MainMenu/Form';
function App() 
{
  return (<>
  {/* <div className="App">
      <Form />
    </div> */}

  <div className="container-fluid">
    
	<div className="header">
		<h2 align="center">Registeration Form</h2>

	</div>
  
	   <form id="form" className="form" onSubmit="signup()">
     <div className="form-control">
			<label for="username">First Name</label>
			<input type="text" placeholder="First" id="username" className="cls1" />
			<i className="fas fa-check-circle"></i>
			<i className="fas fa-exclamation-circle"></i>
			<small>Error message</small>
      
		</div>
		<div className="form-control">
			<label for="lastname">Last Name</label>
			<input type="text" placeholder="Last" id="lastname" className="cls2"/>
			<i className="fas fa-check-circle"></i>
			<i className="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div className="form-control">
			<label for="username">Email</label>
			<input type="email" placeholder="abcd@gmail.com" id="email" className="cls3"/>
			<i className="fas fa-check-circle"></i>
			<i className="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div className="form-control">
			<label for="username">Password</label>
			<input type="password" placeholder="Password" id="password" className="cls4"/>
             <span>
                <i className="bi bi-eye"></i>
             </span>
            <p id="message">Password is <span id="strenght"></span> </p>
			<small>Error message</small>
		</div>
		<div className="form-control">
			<label for="username">Confirm Password</label>
			<input type="password" placeholder="Confirm Password" id="confirmpassword" className="cls5"/>
			<i className="fas fa-check-circle"></i>
			<i className="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
        <div className="form-control">
            <form id="login" onsubmit="process(event)">
              <span>Phone Number:</span>
              <input id="phone" type="number" name="phone" placeholder="Phone Number" className="cls6"/>
              </form>
		</div>
        <div>
            Date of birth* : <input type="date" /><br /><br />
        </div>
      
        <div id="gender">
            <span className="legend">Gender: </span>
            <fieldset id="setD" className="cls7">&nbsp;&nbsp;&nbsp;
                <input id="setD_male" type="radio" name="setD_gender" />
                    <label for="setD_male">Male</label>
                <input id="setD_female" type="radio" name="setD_gender" />
                    <label for="setD_female">Female</label>
                    <input id="setD_other" type="radio" name="setD_gender" />
                    <label for="setD_other">Other</label>
            </fieldset>
        </div>
<br />
    <div className="form-control">
        <label for="state" className="cls8" >State:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <i className="fas fa-check-circle"></i>
        <i className="fas fa-exclamation-circle"></i>
        
        <select name="slct1" id="slct1" onchange="populate(this.id,'slct2')">
            <option value="">----------------------Select State--------------------</option>
            <option value="andrapradesh">Andra Pradesh</option>
            <option value="telangana">Telangana</option>
        </select>
        
        <div className="form-control">
            <br />
            <label for="city">City:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select name="slct2" id="slct2">
            <option value="state">---------------------------City--------------------------</option>
            </select>
        </div>
    </div>
      <div className="form-control">
    <label for="address" className="cls9">Address</label><br />
    <textarea type="text" maxlength="400" className="" id="uname" value="" onkeyup="myfun()"></textarea> <br />
    <div className="d-block">
        <span id="uname_span">0</span>/400
     </div>
    <meter id="uname_meter"  max="400" min="0" value="" ></meter>
        </div>
        <div>
            <span className="legend">Known Languages: </span>
            <fieldset id="setD" className="cls10"> &nbsp;&nbsp;&nbsp;
                <input id="telugu" type="checkbox" name="telugu" />
                    <label for="telugu">Telugu</label>
                <input id="hindi" type="checkbox" name="hindi" />
                    <label for="hindi">Hindi</label>
                <input id="english" type="checkbox" name="english" />
                <label for="english">English</label>
            </fieldset>
            
        </div>
        <div className="form-control">
            <br />
            <label for="" >Upload File</label>
            <input type="file" accept="image/*" onchange="loadFile(event)" className="cls11" />
             <img id="output" width="150px"/>
        </div>
        <div>
            <span id="setD">
                <input id="telugu" type="checkbox" name="telugu" className="cls12" />
                    <label for="agree">I agree With Terms and Conditions</label></span>
        </div>
        
              <button >Submit</button>
	</form>
</div> 

</>)
}

export default App;
