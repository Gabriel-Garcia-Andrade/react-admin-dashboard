import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilMoneyWithdrawal,
    UilUsdSquare,
} from "@iconscout/react-unicons";


// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading:"Overview",
    },
    {
        icon: UilClipboardAlt,
        heading:"Purchases",
    },
    {
        icon: UilUsersAlt,
        heading:"Clients",
    },
    {
        icon: UilPackage,
        heading:"Inventory",
    },
    {
        icon: UilChart,
        heading:"Reports",
    },
    

];

export const CardsData = [
    {
        title:"Sales",
        color: {
            backGround: "linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],      
    },
    {
        title:"Revenue",
        color: {
            backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #Fdc0c7",
        },
        barValue: 50,
        value: "12,345",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [20, 45, 60, 55, 75, 50, 65],
            },
        ],      
    },
    {
        title:"Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 254) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9d59b",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],      
    },
]

// Recent Update Card Data
export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "Emily Carter",
        noti: "has received a new smart watch.",
        time: "20 minutes ago",
    },
    {
        img: img3,
        name: "Iron Man",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
];
