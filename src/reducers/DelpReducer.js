import axios from "axios";

export default function DelpReducer(state=[], action) {
    switch (action.type) {
        case 'order/findAll':
            console.log(action.payload)
            return action.payload
        case 'user/add':
            return state
        case 'user/update':
            return state
        case 'user/delete':
            return state
        default:
            return state
    }
}