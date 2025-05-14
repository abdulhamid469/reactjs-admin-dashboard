import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ChartComponent = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
    },
    xaxis: {
      labels: {
        formatter: function (value: number | string) {
          const dates = [
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
            "2024-01-06",
            "2024-01-07",
            "2024-01-08",
            "2024-01-09",
          ];
          return typeof value === "number" ? dates[value] : value;
        },
      },
    },
  };

  const series = [
    { name: "Sales", data: [30, 140, 85, 50, 90, 60, 70, 91, 125] },
  ];

  return (
    <div className="w-full bg-white shadow-sm rounded-xl py-4 px-3">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ChartComponent;
