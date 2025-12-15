import React from 'react'
import Chart from 'react-apexcharts'
import { thirdGraphData } from '../../../mock/data'

const ThirdGraph = () => {
  const { summary, years, series } = thirdGraphData

  const chartSeries = series.map(s => ({
    name: s.name,
    data: s.data
  }))

  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false }
    },

    plotOptions: {
      bar: {
        columnWidth: '55%',
        borderRadius: 2
      }
    },

    colors: ['#28bbe3', '#ffffffb3'],

    dataLabels: {
      enabled: false
    },

    stroke: {
      show: true,
      width: 0,
      colors: ['transparent']
    },

    xaxis: {
      categories: years,
      labels: {
        style: {
          colors: '#adb5bd',
          fontSize: '11px'
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },

    yaxis: {
      labels: {
        style: {
          colors: '#adb5bd',
          fontSize: '11px'
        }
      }
    },

    grid: {
      borderColor: '#3a4157'
    },

    legend: {
      show: false
    },

    tooltip: {
      theme: 'dark'
    }
  }

  return (
    <div className="bg-[var(--cards-color)] rounded-lg p-6 w-[25%] max-lg:w-[100%] max-lg:mb-6">
      <div className="flex justify-between mb-4 text-white">
        <div>
          <p className="text-sm text-[var(--cards-text)]">Marketplace</p>
          <p className="text-xl font-bold text-[var(--cards-text-sec)]">${summary.marketplace}</p>
        </div>
        <div>
          <p className="text-sm text-[var(--cards-text)]">Total Income</p>
          <p className="text-xl font-bold text-[var(--cards-text-sec)]">${summary.totalIncome}</p>
        </div>
      </div>

      <Chart
        options={options}
        series={chartSeries}
        type="bar"
        height={260}
      />
    </div>
  )
}

export default ThirdGraph
