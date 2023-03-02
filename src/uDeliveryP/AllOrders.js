import {useEffect, useState} from "react";
import axios from 'axios'
import {URL_all_orders} from "../apis/apis";
import {useDispatch, useSelector} from 'react-redux'
import Modal from "./Modal";
import AddressInfo from "./AddressInfo";

export default function AllOrders() {
    useEffect(() => {
        axios.get(URL_all_orders)
            .then((res) => dispatch({type: 'order/findAll', payload: res.data}))
            .then()
    }, [])
    const dispatch = useDispatch()
    const ordersResp = useSelector(state => state.DelpReducer)
    const [userModalIsOpen, setUserModalIsOpen] = useState(false)
    return (
        <>
            <center>
                <h2>
                    All Orders
                </h2>
                <div className={'MyTable'}>
                    {ordersResp.map((order) => (
                        <div key={order.oid} className={'MyRow'}>
                            <div className={'MyRowElement'}>{order.oid}</div>
                            <div className={'MyRowElement'}>{order.customer.userCc.uname}</div>
                            {
                                order.customer.tiffin.tiffinDetails.map((td) =>
                                <>
                                    <button className={'BtnItem'}>{td.item.name}</button>
                                    <button className={'ItemQty'}>{"x" + td.qty}</button>
                                </>)
                            }
                            <button className={'BtnBlue'}
                            onClick={()=>setUserModalIsOpen(true)}
                            >Address</button>
                            <Modal open={userModalIsOpen}
                                   onClose={()=>setUserModalIsOpen(false)}>
                                    <AddressInfo user={order.customer.userCc}/>
                            </Modal>
                            <button className={'BtnPay'}>Accept</button>
                        </div>
                    ))}
                </div>
            </center>
        </>
    )
}