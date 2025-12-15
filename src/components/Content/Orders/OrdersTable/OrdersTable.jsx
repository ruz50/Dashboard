import {order} from "../../../../mock/data.js";
import OrderItem from "../OrderItem/OrderItem.jsx";

export default function OrdersTable() {
    return (
        <table className="align-middle table-centered table-vertical table-nowrap table text-[var(--cards-text)]">
            <tbody>
            {order.map((item) => (
                <OrderItem key={item.id} data={item}/>
            ))}
            </tbody>
        </table>
    )
}