import Image, { StaticImageData } from "next/image"
import color from "../assets/product-colors.png"
import Link from "next/link"

interface typeprop {
    image: string | StaticImageData
}

const Bestcard = (props : typeprop) => {
    const {image} = props
  return (
    <Link href={"../productdetails"} className=" bg-[#FFFFFF] mb-[50px]">
    <div className={`${image} sm:w-[239px] sm:h-[427px] w-[348px] h-[427px] bg-cover bg-center sm:pt-[123px] sm:pl-[80px] pt-[64px] pl-[92px] `}></div>
    <div className=" flex flex-col py-[25px] px-[35px] gap-[10px] justify-center items-center ">
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Graphic Design</h5>
        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">English Department</p>
        <div id="price" className=" flex gap-[5px]">
            <h5 className="text-[#BDBDBD] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">$16.48</h5>
            <h5 className="text-[#23856D] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">$6.48</h5>
        </div>
        <Image src={color} alt=""/>
    </div>
</Link>
  )
}

export default Bestcard