import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTypewriter } from 'react-simple-typewriter'

const RunningCampaign = () => {
    const[data,setData]=useState('');
  useEffect(() => {
    fetch("http://localhost:5000/allcampain")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
const newarr=[];
    for(let i=0;i<data.length;i++){
        const date=data[i].date
        const pickedDate =Date.parse(date);
        const todaysDate = new Date();
           todaysDate.setHours(0, 0, 0, 0);
         const dateDifference = (pickedDate-Number(todaysDate));
         if(dateDifference>0){
            newarr.push(data[i])
         }
    }

//   const filteredDAta=data.filter((item)=> (Date.parse(item.date)>=Number(todaysDate)));
//   console.log(newarr)
const [text] = useTypewriter({
    words: ['This is Running Campaign Section!'],
    loop: 0
  })

  
  return <div>
    <h2 className="text-2xl font-semibold text-center mt-10"><span>{text}</span></h2>
        <div className="grid grid-cols-6 gap-5 my-5">
        {newarr.map((item,i)=>{
          return(<div  key={i} className="card bg-base-300  col-span-6 md:col-span-3 lg:col-span-2 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.amount}</p>
              <p className="border "><Link to={`/campain/${item._id}`} className="btn btn-primary">
                See more
              </Link></p>
            </div>
          </div>)
        })}
      </div>
  </div>;
};

export default RunningCampaign;
