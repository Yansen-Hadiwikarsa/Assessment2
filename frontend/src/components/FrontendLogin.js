import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {frontendLogin} from "../modules/frontendReducer";
import {useState} from "react";
import {useDispatch} from "react-redux";

export default ()=>{
    const dispatch = useDispatch();
    let [username,frontendSetUpUsername] = useState('');
    let [password,frontendSetUpPassword] = useState('');
    function onLoginSubmit(event){
        event.preventDefault(); //preventDefault, prevent the page for being refreshed.
        dispatch(frontendLogin(username,password)); //frontendLogin is set up at frontendReducer
    }
    return (
        <>
            <Form onSubmit={onLoginSubmit}>
                <FormGroup>
                    <FormLabel> Username </FormLabel>
                    <FormControl
                        type={"text"}
                        placeholder={"username"}
                        onChange={e => frontendSetUpUsername(e.target.value)}>
                    </FormControl>
                </FormGroup>

                <FormGroup>
                    <FormLabel> Password </FormLabel>
                    <FormControl
                        type={"password"}
                        placeholder={"username"}
                        onChange={e => frontendSetUpPassword(e.target.value)}>
                    </FormControl>
                </FormGroup>

                <Button type={"submit"}>Login</Button>
            </Form></>
    );
}