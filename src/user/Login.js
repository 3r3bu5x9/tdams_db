import userContext from "../contexts/UserContext";
import UserContext from "../contexts/UserContext";
import delpList from "../mockData/dlepList";
import {useContext} from "react";

export default function Login() {
    const {setloggedInUser} = useContext(UserContext)
    const {loggedInUser} = useContext(UserContext)
    return (
        <>
            <center>
                <h2>Login</h2>
                <br/>
                <button className={'BtnCheckout'}
                        onClick={() => {
                            setloggedInUser(() => delpList[0])
                            console.log(delpList[0])
                        }}
                >Delivery Personnel 1
                </button>
                <br/>
                <button className={'BtnCheckout'}
                        onClick={() => {
                            setloggedInUser(() => delpList[1])
                            console.log(delpList[1])
                        }}
                >Delivery Personnel 2
                </button>

            </center>
        </>
    )
}