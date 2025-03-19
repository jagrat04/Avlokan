import Image from "next/image";
import Header from "./components/header";
import MemberCard from "./components/productCard";

export default function Home() {
  const members = [ 
    {
      name: "mouse",
      Catagory:"electornics",
      image:"" ,
      Reviews:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse",
      BuyNow:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse" ,
    },
    {
      name: "mouse",
      Catagory:"electornics",
      image:"" ,
      Reviews:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse",
      BuyNow:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse" ,
    },
    {
      name: "mouse",
      Catagory:"electornics",
      image:"" ,
      Reviews:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse",
      BuyNow:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse" ,
    },
    {
      name: "mouse",
      Catagory:"electornics",
      image:"" ,
      Reviews:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse",
      BuyNow:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse" ,
    },
    {
      name: "mouse",
      Catagory:"electornics",
      image:"" ,
      Reviews:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse",
      BuyNow:"https://docs.google.com/forms/d/e/1FAIpQLSfy96EupNRwRgkcaeyC28DrjPBnC2ON8_MbOKHVNB7_6_h1KA/formResponse" ,
    },
    
  ];
  return (
    <div >

    <Header />
    <div className="team-container bg-green-50 h-[625px]">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
    </div>
  );
}
