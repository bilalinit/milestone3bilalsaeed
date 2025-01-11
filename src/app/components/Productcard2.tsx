"use client";
import Image from "next/image";
import right from "../assets/aero right.png";
import left from "../assets/aero left.png";
import sofa from "../assets/carouselsofa.png";
import chair from "../assets/carouselchair.png";
import stars from "../assets/stars.png";
import color from "../assets/colorsforproducts.png";
import heart from "../assets/heart icon.png";
import cart2 from "../assets/cart icon2.png";
import eye from "../assets/eye icon.png";
import { useAppContext } from "@/context";
import { useEffect } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Productcard2 = () => {
  const { cart, setCart } = useAppContext();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);


  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const onclickfunc = () => {
    const newItem = {
      image: sofa,
      name: "Floating Phone",
      price: 1139.33,
    };
    setCart((prev) => {
      const updatedCart = [...prev, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div id="container" className="w-auto h-auto pb-[48px]">
        <div id="row" className="flex lg:flex-row flex-col gap-[30px]">
          <div id="col-md-6" className="sm:w-[510px] w-[348px] sm:h-[550px]">
            <div id="carousal2" className="sm:w-[506px] sm:h-[546px] flex flex-col gap-[21px]">
              <div className="bg-[url('/bg-img-sofa.jpg')] sm:w-[506px] flex justify-between sm:h-[450px] w-[348px] h-[277px] bg-cover sm:bg-center bg-left-bottom px-10 pt-[119px] sm:pt-[260px]">
                <Image src={left} alt="" className="w-[24px] h-[44.47px] cursor-pointer" />
                <Image src={right} alt="" className="w-[24px] h-[44.47px] cursor-pointer" />
              </div>
              <div id="carousel indicators" className="flex gap-[19px]">
                <Image src={chair} alt="" />
                <Image src={sofa} alt="" />
              </div>
            </div>
          </div>
          <div id="text content" className="sm:w-[510px] w-[348px] h-[471px] pt-[11px] px-[23px]">
            <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px]">Floating Phone</h4>
            <Image src={stars} alt="" className="w-[221.07px] h-[24px] mt-3" />
            <h5 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] mt-[20px] ">$1,139.33</h5>
            <div className="flex gap-[5px] mt-[5px]">
              <h6 className="text-[#858585] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer">Availability :</h6>
              <h6 className="text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer">In Stock</h6>
            </div>
            <p className="text-[#858585] mt-[32px] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] cursor-pointer">
              Met minim Mollie non desert Alamo est sit cliquey dolor o met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <div className="sm:w-[445px] mt-[27px] border border-[#BDBDBD]"></div>
            <Image src={color} alt="" className="w-[150px] h-[30px] mt-[29px]" />

            <div id="products actions" className="flex mt-[67px] gap-[10px]">
              <button onClick={onclickfunc} className="py-[10px] px-[20px] rounded-[5px] flex justify-center items-center bg-[#23A6F0] hover:bg-blue-500">
                <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer text-white">Add to cart</h6>
              </button>
              <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-slate-200 rounded-lg cursor-pointer">
                <Image src={heart} alt="" className="w-[20px] h-[20px]" />
              </div>
              
              <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-slate-200 rounded-lg cursor-pointer">
              <Sheet>
                
                <SheetTrigger><Image src={cart2} alt="" className="w-[20px] h-[20px]" /></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription className="flex flex-col  gap-4">
                    {cart.map((item, index) => (
                     <button key={index} className="cart-item flex gap-4">
                       <div className="cart-item flex gap-4"> <Image src={item.image} alt={item.name} className="w-10 h-10" />
                        <div>{item.name}</div>
                        <p>${item.price.toFixed(2)}</p>
                        </div>
                        <div className=" text-red-400" onClick={
                            () => {
                                setCart((prev) => {
                                const updatedCart = prev.filter((_, i) => i !== index);
                                localStorage.setItem("cart", JSON.stringify(updatedCart));
                                return updatedCart;
                                });
                            }
                        } >delete</div>
                    </button>
                     ))}
                     <span className=" font-bold text-[18px]">Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>

              </div>
              <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-slate-200 rounded-lg cursor-pointer">
                <Image src={eye} alt="" className="w-[20px] h-[20px]" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard2;
