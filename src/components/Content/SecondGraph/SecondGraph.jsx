import React from 'react'
import Chart from 'react-apexcharts'
import { secondGraphData } from '../../../mock/data'

const SecondGraph = () => {
  const { years, series, summary } = secondGraphData

  const chartSeries = series.map(s => ({
    name: s.name,
    data: s.data,
  }))

  const colors = series.map(s => s.color)

  const options = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
    },

    colors,

    stroke: {
      curve: 'smooth',
      width: 2,
      colors,
    },

    fill: {
      type: 'solid',
      opacity: [0.35, 0.25, 0.35],
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: years.slice(1),
      labels: { style: { colors: '#adb5bd' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    yaxis: {
      labels: { style: { colors: '#adb5bd' } },
    },

    grid: {
      borderColor: '#3a4157',
    },

    tooltip: {
      theme: 'dark',
      shared: true,
    },

    legend: {
      show: false,
    },
  }

  return (
    <div className="bg-[var(--cards-color)] rounded-lg p-6 w-[47%] max-lg:w-[100%] max-lg:mb-6">
      <div className="flex justify-between mb-4 text-white">
        <div>
          <p className="text-sm text-[var(--cards-text)]">Marketplace</p>
          <p className="text-xl font-bold text-[var(--cards-text-sec)]">${summary.marketplace}</p>
        </div>
        <div>
          <p className="text-sm text-[var(--cards-text)]">Total Income</p>
          <p className="text-xl font-bold text-[var(--cards-text-sec)]">${summary.totalIncome}</p>
        </div>
        <div>
          <p className="text-sm text-[var(--cards-text)]">Last Month</p>
          <p className="text-xl font-bold text-[var(--cards-text-sec)]">${summary.lastMonth}</p>
        </div>
      </div>

      <Chart
        options={options}
        series={chartSeries}
        type="area"
        height={300}
      />
    </div>
  )
}

export default SecondGraph
