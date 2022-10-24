import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {frontendLogout} from "../modules/frontendReducer";


export default () => {
    const dispatch = useDispatch();
    return <>
    <Button onClick = {e => {dispatch (frontendLogout())}} > LOGOUT SAFELY </Button>
    </>
}