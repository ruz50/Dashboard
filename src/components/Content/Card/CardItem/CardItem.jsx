import React from 'react'

export default function CardItem({data}) {
    return (
        <tr className="border-b border-[#3a445b]">
            <td className="py-4 pe-6">
                <div className="flex items-center gap-3">
                    <img src={data.img}
                        className="w-10 h-10 rounded-full flex-shrink-0"
                        alt={data.name}
                    />
                    <span className="text-sm font-medium">{data.name}</span>
                </div>
            </td>

            <td className="py-4 px-6">
                <span className="flex items-center gap-2 text-sm">
                    <span className={`w-3 h-3 rounded-full ${data.statusColor} flex-shrink-0`}></span>
                    {data.status}
                </span>
            </td>
            <td className="py-4 px-6">
                <div className="flex flex-col text-start text-sm">
                    <span className="font-semibold">$ {data.amount}</span>
                    <span className=" text-[var(--cards-text)]">Amount</span>
                </div>
            </td>
            <td className="py-4 px-6">
                <div className="flex flex-col text-start text-sm">
                    <span className="font-semibold">{data.date}</span>
                    <span className=" text-[var(--cards-text)]">Date</span>
                </div>
            </td>
            <td className="py-4 ps-6 ">
                <button className="rounded-lg text-[11px] border-none hover:border-none text-[white] px-2 py-1 bg-[#6c757d] border-[1px] border-[solid] border-[#6c757d]">
                    Edit
                </button>
            </td>
        </tr>
    );
}
