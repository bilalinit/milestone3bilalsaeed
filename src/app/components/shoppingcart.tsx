"use client"
import product1img from "../assets/pl3.jpeg"
import product1img2 from "../assets/carouselsofa.png"
import { useAppContext } from "@/context"

const itemdata = [
    {
        id: 1,
        image: product1img,
        title:"Graystone vase",
        description:"A timeless ceramic vase with a tri color grey glaze.",
        price: 85,
    },
    {
        id: 2,
        image: product1img2,
        title:"Basic white vase",
        description:"Beautiful and simple this is one for the classics",
        price: 85,
    },
    {
        id: 3,
        image: product1img,
        title:"Graystone vase",
        description:"A timeless ceramic vase with a tri color grey glaze.",
        price: 85,
    }, 
]

const Shoppingcart = () => {
    const { cart } = useAppContext();
    console.log(cart);

   
  return (
    <div className="  sm:pt-[64px] sm:px-[10.8%] px-[23px] pt-[36px] ">
        
    <h1 className="font- font-normal sm:text-[36px] sm:leading-[50.4px]  text-[24px] leading-[33.6px]  text-[#2A254B]">Your shopping cart</h1>
    <div className="  sm:flex font-clash font-normal justify-between text-[14px] leading-[19.6px] sm:mt-[48px] mt-[40px] hidden">
        <p className="sm:mr-[29.5%]">Product</p>
        <p className="">Quantity</p>
        <p>Total</p>
    </div>
    <div className=" border bg-[#EBE8F4] sm:mt-[12px] mt-[40px] sm:mb-[20px] sm:block hidden"></div>
    <div className="flex flex-col sm:gap-[20px] mt-[40px] sm:mb-[0px]  ">
    {cart.length > 0 ? (
    cart.map((prev, index) => (
         <div key={index}> price={prev.price} </div>
    ))
        ) : (
            <p>Your cart is empty.</p>
        )}

    </div>
    <div className=" border bg-[#EBE8F4] sm:mt-[12px] sm:mb-[20px]"></div>
    <div id="pricing info" className="flex flex-col items-end  sm:gap-[12px] gap-[7px] mt-[16px] sm:mt-0 sm:mb-[16px]">
        <div id="subtotal" className="flex gap-[16px] justify-center items-center">
            <h4 className="font-clash font-normal text-[20px] leading-[28px] ">Subtotal</h4>
            <h3 className="font-clash font-normal text-[24px] leading-[33.6px] ">£210</h3>
        </div>
        <p className="font-satoshi font-normal text-[14px] leading-[21px]  ">Taxes and shipping are calculated at checkout</p>
    </div>
    <div className="flex justify-end sm:mb-[48px] mb-[55px] mt-[36px]">
    <button className="bg-[#23856D] px-[32px] py-[16px] sm:w-auto w-[342px]  flex justify-center">
        <p className="text-white font-satoshi font-normal text-[16px] leading-[24px] ">Go to checkout</p>
    </button></div>
</div> 
  )
}

export default Shoppingcart