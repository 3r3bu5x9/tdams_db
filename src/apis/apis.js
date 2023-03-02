export const URL_base = "http://localhost:8080"
export const URL_all_orders = URL_base + "/order" + "/all"
export const URL_get_Item_Vendor = (vid) => URL_base + "/item/" + vid + "/get/vendor"
export const URL_Delp_accept_order = (dpid, oid, status) => URL_base+"/order/accept/"+oid+"/delp/"+dpid+"/status/"+status
export const URL_Delp_by_id = (dpid) => URL_base+"/deliveryp/"+dpid