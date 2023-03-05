import {Button, Table} from "reactstrap";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {URL_all_items, URL_cust_add_tiffin_details_post} from "../apis/apis";
import UserContext from "../contexts/UserContext";

export default function AddTiffinDetails() {
    const {loggedInUser} = useContext(UserContext)
    const [items, setItems] = useState([])
    const [itemDetails, setItemDetails] = useState([])
    const [itemDetailsQty, setItemDetailsQty] = useState([])
    const [isButtonDisabled, setIsButtonDisabled] = useState([])

    useEffect(() => {
        axios
            .get(URL_all_items)
            .then((res) => setItems(() => res.data))
    }, [])

    useEffect(() => {
        setItemDetails(()=>items.map((item) => ({item: item, qty: 0})))
        setItemDetailsQty(()=>items.map(() => 0))
        setIsButtonDisabled(()=>items.map(() => false))
    }, [items])

    const addToTiffin = (itemDetail, index) => {
        if (itemDetailsQty[index] !== 0) {
            setIsButtonDisabled(prev => {
                const temp = [...prev]
                temp[index] = true
                return temp
            })
            itemDetail.qty = itemDetailsQty[index]
            axios
                .post(URL_cust_add_tiffin_details_post(loggedInUser.cid), itemDetail)
                .then(() => console.log(itemDetail + " sent"))
        }
    }

    function Increment(stock, index) {
        if (itemDetailsQty[index] !== stock) {
            setItemDetailsQty(prev => {
                const temp = [...prev]
                temp[index]++
                return temp
            })
        }
    }

    function Decrement(index) {
        if (itemDetailsQty[index] !== 0) {
            setItemDetailsQty(prev => {
                const temp = [...prev]
                temp[index]--
                return temp
            })
        }
    }

    return (
        <>
            <center>
                <h2>Tiffin Details</h2>
                <Table
                    borderless
                    dark
                    hover
                    size="sm"
                >
                    <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            stock
                        </th>
                        <th>
                            price
                        </th>
                        <th>
                            qty
                        </th>
                        <th>
                            action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        itemDetails.map((itemDetail, index) =>
                            <tr key={index}>
                                <th scope="row">
                                    {itemDetail.item.iid}
                                </th>
                                <td>
                                    {itemDetail.item.name}
                                </td>
                                <td>
                                    {itemDetail.item.qty}
                                </td>
                                <td>
                                    {itemDetail.item.price}
                                </td>
                                <td>
                                    <div className={'ButtonContainer'}>
                                        <Button onClick={() => Increment(itemDetail.item.qty, index)}>+</Button>
                                        <div className={'Quantity'}>
                                            {itemDetailsQty[index]}
                                        </div>
                                        <Button onClick={() => Decrement(index)}>-</Button>
                                    </div>
                                </td>
                                <td>
                                    <Button onClick={() => addToTiffin(itemDetail, index)}
                                            disabled={isButtonDisabled[index]}
                                    >Add Item</Button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </center>
        </>
    )
}