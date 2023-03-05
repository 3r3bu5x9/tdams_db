export const URL_base = "http://localhost:8080"
export const URL_all_orders = URL_base + "/order" + "/all"
export const URL_get_Item_Vendor = (vid) => URL_base + "/item/" + vid + "/get/vendor"
export const URL_Delp_accept_order = (dpid, oid, status) => URL_base+"/order/accept/"+oid+"/delp/"+dpid+"/status/"+status
export const URL_Delp_by_id = (dpid) => URL_base+"/deliveryp/"+dpid
export const URL_Delp_deliver_order_post = (oid, status) => URL_base+"/order/set/del/"+oid+"/status/"+status
export const URL_Delp_pickup_order_post = (oid, status) => URL_base+"/order/set/picked/"+oid+"/status/"+status
export const URL_Delp_cancel_order = (oid)=>URL_base+"/order/cancel/"+oid

export const URL_cust_add_tiffin_details_post = (cid)=>URL_base+"/tiffindetail/add/cust/"+cid
export const URL_all_items = URL_base+"/item/all"