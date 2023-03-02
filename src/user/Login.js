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
                <button className={'BtnPay'}
                        onClick={() => {
                            setloggedInUser(() => delpList[0])
                            console.log(delpList[0])
                        }}
                >Vendor 1
                </button>
                <br/>
                <button className={'BtnPay'}
                        onClick={() => {
                            setloggedInUser(() => delpList[1])
                            console.log(delpList[1])
                        }}
                >Vendor 2
                </button>
                <br/>
                <button className={'BtnPay'}
                        onClick={() => {
                            setloggedInUser(() => delpList[2])
                            console.log(delpList[2])
                        }}
                >Vendor 3
                </button>
                <br/>
                <button className={'BtnPay'}
                        onClick={() => {
                            setloggedInUser(() => delpList[3])
                            console.log(delpList[3])
                        }}
                >Vendor 4
                </button>
                <br/>
                <button className={'BtnPay'}
                        onClick={() => {
                            setloggedInUser(() => delpList[4])
                            console.log(delpList[4])
                        }}
                >Vendor 5
                </button>

            </center>
        </>
    )
}