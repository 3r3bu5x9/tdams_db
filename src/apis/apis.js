// export const URL_base = "http://localhost:8080"
export const URL_login = "/login"
export const URL_find_user_with_id = (uid) => "/user/find/" + uid
export const URL_add_user = (rid) => "/register/" + rid
export const URL_add_address = (uid) => "/address/add/user/" + uid
export const URL_update_address = (aid) => "/address/update/" + aid

export const URL_update_user = (uid) => "/user/update/" + uid
export const URL_all_orders = "/order/all"
export const URL_all_users = "/user/all"
export const URL_delete_user = (uid) => "/admin/delete/user/" + uid
export const URL_get_logged_user = "/user/logged"

export const URL_get_Item_Vendor = (vid) => "/item/" + vid + "/get/vendor"
export const URL_vendor_items = (vid) => "/item/all/" + vid
export const URL_vendor_edit_item = (iid) => "/item/update/" + iid
export const URL_delete_item = (iid) => "/item/delete/" + iid

export const URL_get_Customer = (cid) => "/cust/" + cid
export const URL_get_Vendor = (vid) => "/vendor/" + vid
export const URL_get_Delp = (dpid) => "/deliveryp/" + dpid
export const URL_add_item = (vid) => "/item/add/vendor/" + vid
export const URL_Delp_accept_order = (dpid, oid, status) => "/order/accept/" + oid + "/delp/" + dpid + "/status/" + status
export const URL_Delp_by_id = (dpid) => "/deliveryp/" + dpid
export const URL_Delp_checkin = (dpid) => "/deliveryp/intime/" + dpid
export const URL_Delp_checkout = (dpid) => "/deliveryp/outtime/" + dpid
export const URL_Delp_deliver_order_post = (oid, status) => "/order/set/del/" + oid + "/status/" + status
export const URL_Delp_pickup_order_post = (oid, status) => "/order/set/picked/" + oid + "/status/" + status
export const URL_Delp_cancel_order = (oid) => "/order/cancel/" + oid

export const URL_cust_add_tiffin_details_post = (cid) => "/tiffindetail/add/cust/" + cid
export const URL_cust_create_tiffin = (cid) => "/tiffin/add/cust/" + cid
export const URL_cust_show_tiffin = (cid) => "/tiffin/cust/" + cid
export const URL_cust_place_order = (cid) => "/order/add/cust/" + cid
export const URL_cust_get_order = (cid) => "/order/cust/" + cid
export const URL_all_items = "/item/all"