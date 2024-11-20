"use client"
import Image from "next/image"
import logo from '../../../public/images1.png'
import { BiCart } from 'react-icons/bi'
import { CgSearch } from 'react-icons/cg'
import {useState} from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"



const Navber = () => {
    const itemList = [
        "All",
        "Fresh",
        "Amamzone minTV",
        "Sell",
        "Gift Cards",
        "Baby",
        "Buy Again",
        "Browsing History",
        "Amazone Pay",
        "Gift ideas",
        "Health, Household & Personal Care"
    ]
    const [query, setquery] = useState<string>("");
    const router = useRouter();
    const searchHandler = ()=>{
        router.push(`search/${query}`)
    }
    return (
      <>
        <div className="bg-black text-white py-1">
          <div className="flex items-center justify-between w-[90%] mx-auto">
            <div className="w-[10%]">
              <Image src={logo} alt="hello" width={100} height={100} />
            </div>
            <div className="flex items-center w-[60%] ">
              <input
                type="text" 
                value={query}
                onChange={(e)=>{ setquery(e.target.value)}}
                className="w-full p-2 rounded-l-md outline-none text-black"
                placeholder="Search Amazone.in"
              />
              <div className="bg-[#FEBD69] p-2 rounded-r-md" onClick={searchHandler}>
                <CgSearch size={"24px"} className="text-black " />
              </div>
            </div>
            <div className="flex items-center justify-around w-[20%]">
              <div className="cursor-pointer">
                <h1 className="text-xs">Hello, shoaib</h1>
                <h1 className="font-medium text-sm">Account & List</h1>
              </div>
              <div className="cursor-pointer">
                <p className="text-xs">Return </p>
                <h1 className="font-medium text-sm">&Order</h1>
              </div>
              <div className="cursor-pointer">
                <p className="relative top-3 left-5">0</p>
                <div className="flex">
                  <div>
                    <BiCart size={40} />
                  </div>
                  <h1 className="mt-4">cart</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#232F3E] w-full text-white flex items-center justify-between">
        <div>
        {
                itemList.map((link, ind)=>{
                    return(
                        <Link key={ind} href={`/${link}`} className="mx-2 hover:border border border-transparent hover:border-white p-2">
                            {link}
                        </Link>
                    )
                })
            }
        </div>
        <div className="mr-5">
            <h1 className="text-[#FEBD69] font-bold cursor-pointer hover:underline">Sign out</h1>
        </div>

        </div>
      </>
    );
}

export default Navber
