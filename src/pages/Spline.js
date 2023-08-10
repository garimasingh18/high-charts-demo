import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Spline() {
  const options = {
    // Data retrieved from https://www.vikjavev.no/ver/#2022-06-13,2022-06-14
    chart: {
      type: "spline",
      backgroundColor: "#000",
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1,
      },
    },
    title: {
      text: "Wind speed during two days",
      align: "left",
      style: {
        color: "#fff",
      },
    },
    subtitle: {
      text: "13th & 14th of June, 2022 at two locations in Vik i Sogn, Norway",
      align: "left",
      style: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify",
        style: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      title: {
        text: "Wind speed (m/s)",
        style: {
          color: "#fff",
        },
      },

      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      plotBands: [
        {
          // Light air
          from: 0.3,
          to: 1.5,
          color: "rgba(68, 170, 213, 0.1)",
          label: {
            text: "Light air",
            style: {
              color: "#fff",
            },
          },
        },
        {
          // Light breeze
          from: 1.5,
          to: 3.3,
          color: "rgba(0, 0, 0, 0)",
          label: {
            text: "Light breeze",
            style: {
              color: "#fff",
            },
          },
        },
        {
          // Gentle breeze
          from: 3.3,
          to: 5.5,
          color: "rgba(68, 170, 213, 0.1)",
          label: {
            text: "Gentle breeze",
            style: {
              color: "#fff",
            },
          },
        },
        {
          // Moderate breeze
          from: 5.5,
          to: 8,
          color: "rgba(0, 0, 0, 0)",
          label: {
            text: "Moderate breeze",
            style: {
              color: "#fff",
            },
          },
        },
        {
          // Fresh breeze
          from: 8,
          to: 11,
          color: "rgba(68, 170, 213, 0.1)",
          label: {
            text: "Fresh breeze",
            style: {
              color: "#fff",
            },
          },
        },
        {
          // Strong breeze
          from: 11,
          to: 14,
          color: "rgba(0, 0, 0, 0)",
          label: {
            text: "Strong breeze",
            style: {
              color: "#fff",
            },
          },
        },
        {
          // High wind
          from: 14,
          to: 15,
          color: "rgba(68, 170, 213, 0.1)",
          label: {
            text: "High wind",
            style: {
              color: "#fff",
            },
          },
        },
      ],
    },
    tooltip: {
      valueSuffix: " m/s",
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5,
          },
        },
        marker: {
          enabled: false,
        },
        style: {
          color: "#fff",
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2022, 5, 13, 0, 0, 0),
      },
    },
    series: [
      {
        name: "Hestavollane",
        data: [
          4.5, 5.1, 4.4, 3.7, 4.2, 3.7, 4.3, 4, 5, 4.9, 4.8, 4.6, 3.9, 3.8, 2.7,
          3.1, 2.6, 3.3, 3.8, 4.1, 1, 1.9, 3.2, 3.8, 4.2,
        ],
      },
      {
        name: "Vik",
        data: [
          0.1, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.4, 0.1, 0, 0.2, 0.3, 0, 0, 0, 0,
          0, 0.1, 0.1, 0.1, 0, 0.1, 0, 0, 0,
        ],
      },
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px",
        style: {
          color: "#fff",
        },
      },
    },
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default Spline;
