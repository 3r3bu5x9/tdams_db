import {useEffect, useState} from "react";
import axios from "axios";
import {URL_all_users, URL_get_logged_user, URL_get_user_by_id, URL_login} from "../apis/apis";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify';
import getAccessToken from "../util/getAccessToken";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: "", password: ""});
    const [userList, setUserList] = useState([]);


    const HandleChange = (args) => {
        const copyUser = {...user};
        copyUser[args.target.name] = args.target.value;
        setUser(copyUser);
        console.log(user);
    };
    const Validate = () => {
        axios.post(URL_get_logged_user, user,
            {headers: {Authorization: getAccessToken()}})
            .then((res) =>
                sessionStorage.setItem("loggedUser", JSON.stringify(res.data)))
    }
    const handleLogin = () => {
        const bodyFormData = new FormData();
        bodyFormData.append('username', user.username);
        bodyFormData.append('password', user.password)
        axios({
            method: "post",
            url: URL_login,
            data: bodyFormData,
            headers: {"Content-Type": "multipart/form-data"},
        })
            .then((res) => {
                sessionStorage.setItem("AccessToken", JSON.stringify(res.data.accessToken))
                toast.success("User validated!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark"
                })
            })
            .catch((res) =>
                toast.error("Invalid user!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark"
                })
            )
            .then(Validate)
    }
    return (
        <>
            <ToastContainer autoClose={3000}/>
            <div className={'FormContainer'}>
                <Form>
                    <div className={'PageHeading'}>
                        <h1>😎</h1>
                    </div>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Username
                        </Label>
                        <Input
                            name={'username'} type={'text'} placeholder={"Enter your username"}
                            value={user.username} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            name={'password'} type={'text'} placeholder={"Enter your password"}
                            value={user.password} onChange={HandleChange}
                        />
                    </FormGroup>
                    <div className={'btnContainer'}>
                        <Button
                            className={'btn-success'}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Button
                            className={'btn-info'}
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}