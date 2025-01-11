import Image, { StaticImageData } from "next/image"




interface ipropcartitem {
    image: string | StaticImageData,
    title: string,
    description?: string,
    price: number
}



const CartItems = (prop : ipropcartitem) => {
    
    const {image, title, description, price  } = prop
  return (
    <div>
        <div id="product card" className="w-auto sm:flex sm:flex-row justify-between flex-col ">
            <div id="product one " className=" w-auto h-auto flex sm:gap-[21px] gap-[22px]">
               <Image src={image} alt="" className="w-[109px] h-[134px] bg-cover bg-center"/>
                <div id=" description" className=" flex flex-col gap-[8px]">
                    <h4 className="font-clash font-normal sm:text-[20px] sm:leading-[28px]  text-[16px] leading-[22.4px]  ">{title}</h4>
                    <p className="font-satoshi font-normal sm:text-[14px] sm:leading-[21px]  text-[14px] leading-[21px] text-nowrap  ">{description}</p>
                    <p  className="font-satoshi font-normal text-[14px] leading-[21px]  ">£{price}</p>

                    <div className="w-[122px]  justify-between px-[16px] py-[12px] sm:ml-[341px]  sm:mr-[252px] font-satoshi font-normal text-[16px] leading-[21.6px] sm:hidden flex"> 
                        <p className="text-[#EBE8F4] hover:text-slate-00">-</p>
                        <p className=" ">1</p>
                        <p className="text-[#EBE8F4]">+</p>  
                     </div>
                </div>
            </div>

            <div className="w-[122px] justify-between px-[16px] py-[12px]   font-satoshi font-normal text-[16px] leading-[21.6px] sm:flex hidden"> 
            <p className="text-slate-500 hover:text-slate-600 cursor-pointer">-</p>
            <p className=" ">1</p>
            <p className="text-slate-500 hover:text-slate-600 cursor-pointer">+</p>  
            </div>
            <p className="font-satoshi font-normal text-[18px] leading-[27px] sm:block hidden  ">£{price}</p>
        </div>
       
</div>
  )
}


export default CartItems