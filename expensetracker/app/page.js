"use client"

import React, {useState, useEffect} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {

  const [items, setItems] = useState([
    {name: "Coffee", price: 75},
    {name: "Movie", price: 400},
    {name: "Pizza", price: 225},
  ]);

  const [total, setTotal] = useState(0)

  return (
     <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
           <h1 className="text-4xl p-4  text-center">Expense Tracker</h1>

           <div className="bg-slate-800 p-4 rounded-lg">
              <form className="grid grid-cols-6 items-center text-black">
                 <input
                    className=" col-span-3 p-3 border"
                    type="text"
                    placeholder="Enter Item"
                 />
                 <input
                    className=" col-span-2 p-3 border mx-3"
                    type="number"
                    placeholder="₹"
                 />
                 <button
                    className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl rounded-lg"
                    type="submit"
                 >
                    <AddIcon />
                 </button>
              </form>
              <ul>
                 {items.map((item, id) => (
                    <li key={id} className='my-4 w-full flex justify-between bg-slate-950'>
                       <div className='p-4 w-full flex justify-between'>
                          <span className=' capitalize'>{item.name}</span>
                          <span>₹{item.price}</span>
                       </div>
                       <button className='ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16'><DeleteIcon /></button>
                    </li>
                 ))}
              </ul>
              {items.length < 1 ? ('') : (
                <div className='flex justify-between p-3 font-bold text-xl sm:text-2xl'>
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              )}
           </div>
        </div>
     </main>
  );
}


// material icons
// tailwind
// next
// firebase
