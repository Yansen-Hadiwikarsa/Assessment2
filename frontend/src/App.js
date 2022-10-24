import './App.css';
import {useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
// import {Alert, Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
// import {useState} from "react";
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import {frontendLogin, getTheBackendIndexController} from "./modules/frontendReducer";
// import {render} from "@testing-library/react";
import FrontendLogin from "./components/FrontendLogin";
import FrontendLogout from "./components/FrontendLogout";
import FrontendSignUp from "./components/FrontendSignUp";

function App() {

// this is to create an alert reference:
    // function AlertDismissibleExample() {
    //     const [show, setShow] = useState(true);
    //     if (show) {
    //         return (
    //             <Alert variant="danger" onClose={() => setShow(false)} dismissible>
    //                 <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    //                 <p>
    //                     ERROR MESSAGE HERE
    //                 </p>
    //             </Alert>
    //         );
    //     }
    //     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
    // }
    //
    // render(<AlertDismissibleExample />);
    // console.log(AlertDismissibleExample)

    let dispatch = useDispatch(); //this is to make a call for the variable call "dispatch"
    let token = useSelector(state => state.token) //refer to line 2 on frontend reducer.


    if (token){
        return(
        <>
            <FrontendLogout></FrontendLogout>
            <p> You have been successfully logged in! </p>
        </>
        );
    } else {
        return (
            <>
                <FrontendLogin></FrontendLogin>
                <FrontendSignUp></FrontendSignUp>
            </>
        )
    }



{/*<div>*/}
{/*          <p>*/}
{/*          <Dropdown className="d-inline mx-2">*/}
{/*              <Dropdown.Toggle id="dropdown-autoclose-true">*/}
{/*                  AVENGERS*/}
{/*              </Dropdown.Toggle>*/}

{/*              <Dropdown.Menu>*/}
{/*                  <Dropdown.Item href="#">Thor</Dropdown.Item>*/}
{/*                  <p><Dropdown.Item href="#">Captain America</Dropdown.Item></p>*/}
{/*                  <Dropdown.Item href="#">Iron Man</Dropdown.Item>*/}
{/*              </Dropdown.Menu>*/}
{/*          </Dropdown>*/}
{/*          </p>*/}
{/*</div>*/}

{/*<div>*/}
{/*          <p>*/}
{/*          <Dropdown className="d-inline mx-2" autoClose="inside">*/}
{/*              <Dropdown.Toggle id="dropdown-autoclose-inside">*/}
{/*                  JUSTICE LEAGUE*/}
{/*              </Dropdown.Toggle>*/}

{/*              <Dropdown.Menu>*/}
{/*                  <Dropdown.Item href="#">Superman</Dropdown.Item>*/}
{/*                  <p><Dropdown.Item href="#">Batman</Dropdown.Item></p>*/}
{/*                  <Dropdown.Item href="#">Aquaman</Dropdown.Item>*/}
{/*              </Dropdown.Menu>*/}
{/*          </Dropdown>*/}
{/*          </p>*/}
{/*</div>*/}

{/*<div>*/}
{/*          <p>*/}
{/*          <Dropdown className="d-inline mx-2" autoClose="outside">*/}
{/*              <Dropdown.Toggle id="dropdown-autoclose-outside">*/}
{/*                  MORTAL KOMBAT*/}
{/*              </Dropdown.Toggle>*/}

{/*              <Dropdown.Menu>*/}
{/*                  <Dropdown.Item href="#">Liu Kang</Dropdown.Item>*/}
{/*                 <p> <Dropdown.Item href="#">Kung Lao</Dropdown.Item></p>*/}
{/*                  <Dropdown.Item href="#">Sub Zero</Dropdown.Item>*/}
{/*              </Dropdown.Menu>*/}
{/*          </Dropdown>*/}
{/*          </p>*/}
{/*</div>*/}
{/*          <button onClick={()=>dispatch(getTheBackendIndexController())}>OK</button> <pre></pre>*/}



}

export default App;
