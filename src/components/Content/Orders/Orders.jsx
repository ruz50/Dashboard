import React from 'react'
import OrdersTable from './OrdersTable/OrdersTable'


const Order = () => {
  return (
        <div className="card bg-[var(--cards-color)] rounded-md p-5 mt-6 mx-3 overflow-x-auto lg:max-w-[100%]">
            <div className="card-body">
                <h4 className="card-title mb-4 text-[var(--cards-text)] font-medium text-start ">Latest Orders</h4>
                <OrdersTable />
            </div>
        </div>
    )
}

export default Order
