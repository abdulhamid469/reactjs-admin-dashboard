import usersIcon from "../../assets/images/userIcon.png";
import ordersIcon from "../../assets/images/ordersIcon.png";
import salesIcon from "../../assets/images/salesIcon.png";
import revenueIcon from "../../assets/images/revenueIcon.png";
import { CaretDown, CaretUp } from "react-ionicons";

const StartCards = () => {
    const cards = [
        {
            title: "Total Users",
            value: "40,689",
            icon: usersIcon,
            profit: true,
            percentage: "8.5%",
        },
        {
            title: "Total Oders",
            value: "10293",
            icon: ordersIcon,
            profit: false,
            percentage: "1.3%",
        },
        {
            title: "Today Sales",
            value: "$89,452",
            icon: salesIcon,
            profit: true,
            percentage: "4.7%",
        },
        {
            title: "Total Revenue",
            value: "26,000",
            icon: revenueIcon,
            profit: false,
            percentage: "1.6%",
        },
    ]
  return (
    <div className="flex md:w-[95%] w-[80%] items-center justify-center flex-wrap md:flex-row flex-col md:gap-3 gap-5 mt-5">
        {
            cards.map((card) => (
                <div key={card.title} className="bg-white rounded-xl shadow-sm pl-5 md:pr-10 pr-0 py-3 relative flex flex-col justify-between gap-3 md:w-[23%] w-full">
                    <span className="font-semibold text-[#202224] text-[15px]"> { card.title } </span>
                    <span className="font-bold text-[#202224] text-[28px]"> { card.value } </span>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {
                                card.profit ? <CaretUp color={"#00B69B"} /> : <CaretDown color={"#F93C65"} />
                            }
                            <span className={`${card.profit ? "text-[#00B69B]" : "text-[#F93C65]"}`}> { card.percentage } </span>
                        </div>
                        <span className="text=[14px] text-[#606060]"> { card.profit ? "Up from yesterday" : "Down from yesterday" } </span>
                    </div>
                    <img src={card.icon} alt="icon" className="absolute right-5 top-3 w-[14.5%]" />
                </div>
            ))
        }
    </div>
  )
}

export default StartCards;