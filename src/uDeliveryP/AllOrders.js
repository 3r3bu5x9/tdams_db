import orders from "../mockData/MOCK_DATA_ORDERS.json";
import {useEffect} from "react";
import axios from 'axios'
import {URL_all_orders} from "../apis/apis";
import {useDispatch, useSelector} from 'react-redux'

export default function AllOrders() {
    useEffect(() => {
        axios.get(URL_all_orders)
            .then((res) => dispatch({type: 'order/findAll', payload: res.data}))
            .then()
    }, [])
    const dispatch = useDispatch()
    const ordersResp = useSelector(state => state.DelpReducer)
    console.log(ordersResp)
    return (
        <>
            <center>
                <h2>
                    All Orders
                </h2>
                <div className={'MyTable'}>
                    {ordersResp.map((order) => (
                        <div className={'MyRow'}>
                            <div className={'MyRowElement'}>{order.oid}</div>
                            <div className={'MyRowElement'}>{order.customer.userCc.uname}</div>
                            {order.customer.tiffin.tiffinDetails.map((td) =>
                                <>
                                    <button className={'BtnItem'}>{td.item.name}</button>
                                    <button className={'ItemQty'}>{"x"+td.qty}</button>
                                </>)
                            }
                            <button className={'BtnBlue'}>Address</button>
                            <button className={'BtnPay'}>Accept</button>
                        </div>
                    ))}
                </div>
            </center>
        </>
    )
}