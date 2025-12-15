import {transactions} from "../../../../mock/data.js";
import CardItem from "../CardItem/CardItem.jsx";

export default function Table() {
    return (
        <table className="align-middle table-centered table-vertical table-nowrap table text-[var(--cards-text)]">
            <tbody>
            {transactions.map((item) => (
                <CardItem key={item.id} data={item}/>
            ))}
            </tbody>
        </table>
    )
}