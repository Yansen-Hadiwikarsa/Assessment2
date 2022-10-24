import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {frontendSignUp} from "../modules/frontendReducer";

export default  () =>{
    const dispatch = useDispatch();
    let [username, frontendSetUpUsername] = useState('');
    let [password, frontendSetUpPassword] = useState('');
    function onSignUpSubmit (event){
        event.preventDefault(); //preventDefault is preventing the page for being refreshed
        dispatch (frontendSignUp(username, password));

    }


    return (
        <>
        <Form onSubmit={onSignUpSubmit}>
            <FormGroup>
                <FormLabel> Username </FormLabel>
                <FormControl>
                    type={"text"}
                    placeholder={"username"}
                    onChange={e => frontendSetUpUsername(e.target.value)}
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel> Password </FormLabel>
                <FormControl>
                    type = {"password"}
                    placeholder={"username"}
                    onChange={e => frontendSetUpPassword(e.target.value)}
                </FormControl>
            </FormGroup>

            <Button type = {"submit"}> Sign-Up Now! </Button>
        </Form>
        </>
        )
}