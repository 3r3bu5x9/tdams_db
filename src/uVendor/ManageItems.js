import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {URL_Delp_by_id, URL_Delp_cancel_order, URL_vendor_items} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import CounterContext from "../uDeliveryP/CounterContext";

export default function ManageItems(){
    const vendor = JSON.parse(sessionStorage.getItem("loggedUser"))
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const {counter} = useContext(CounterContext)
    const {setCounter} = useContext(CounterContext)
    useEffect(() => {
        axios.get(URL_vendor_items(vendor.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setItems(() => res.data))
    }, [])
    useEffect(() => {
        axios.get(URL_vendor_items(vendor.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setItems(() => res.data))
    }, [counter])
    return(
        <center>
            <h2>My Items</h2>
            <div className={'MyTable'}>
                {items.map((item, index) => (
                    <div key={index} className={'MyRow'}>
                        <div className={'InfoContainer'}>
                            <div className={'ModalElementValUser'}>
                                {"Name:"}
                            </div>
                            <div className={'MyRowElementDesc'}>{item.name}</div>
                        </div>
                        <div className={'InfoContainer'}>
                            <div className={'ModalElementValUser'}>
                                {"Price:"}
                            </div>
                            <div className={'MyRowElementDesc'}>{item.price}</div>
                        </div>
                        <div className={'InfoContainer'}>
                            <div className={'ModalElementValUser'}>
                                {"Stock:"}
                            </div>
                            <div className={'MyRowElementDesc'}>{item.qty}</div>
                        </div>
                        <button className={'BtnItem'}
                        >
                            Edit
                        </button>
                        <button className={'BtnCancel'}
                                >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </center>
    )
}