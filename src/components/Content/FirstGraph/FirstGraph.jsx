import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { firstGraphData } from '../../../mock/data'

const FirstGraph = () => {
  // state 
  const [sales, setSales] = useState(firstGraphData.salesBreakdown)

  // series and labels
  const series = sales.map(item => item.value)
  const labels = sales.map(item => item.label)

  const options = {
    chart: {
      type: 'donut',
    },
    labels,
    legend: {
      position: 'bottom',
      labels: {
        colors: '#cfd4da',
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              color: '#cfd4da',
            },
            value: {
              show: true,
              color: '#ffffff',
              fontSize: '20px',
              formatter: val => Math.round(val),
            },
            total: {
              show: true,
              label: 'In-Store Sales',
              formatter: () => '30',
            },
          },
        },
      },
    },
    colors: ['#f8f9fa', '#7a6fbe', '#2dc5e9'],
    stroke: {
      width: 0,
    },
  }

  return (
    <div className="bg-[var(--cards-color)] rounded-lg p-6 w-[25%] max-lg:w-[100%] max-lg:mb-6">
      <div className="mb-4">
        <h4 className="text-[var(--cards-text)] text-sm">Monthly Earnings</h4>
        <div className="flex justify-between mt-2">
          <div>
            <div className="text-[var(--cards-text-sec)] text-xl font-bold">
              ${firstGraphData.totals.marketplace}
            </div>
            <span className="text-[--cards-text] text-sm">Marketplace</span>
          </div>
          <div>
            <div className="text-[var(--cards-text-sec)] text-xl font-bold">
              ${firstGraphData.totals.totalIncome}
            </div>
            <span className="text-[--cards-text] text-sm">Total Income</span>
          </div>
        </div>
      </div>

      <Chart
        type="donut"
        series={series}
        options={options}
        height={260}
      />
    </div>
  )
}

export default FirstGraph
