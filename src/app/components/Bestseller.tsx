
import Bestcard from "./bestcard"

const data = [
    {
        image: "bg-[url('/1.jpg')]"
    },
    {
        image: "bg-[url('/2.jpg')]"
    },    {
        image: "bg-[url('/3.jpg')]"
    },    {
        image: "bg-[url('/4.jpg')]"
    },    {
        image: "bg-[url('/5.jpg')]"
    },    {
        image: "bg-[url('/6.jpg')]"
    },
    {
        image: "bg-[url('/7.jpg')]"
    },
    {
        image: "bg-[url('/8.jpg')]"
    },
]

const Bestseller = () => {
  return (
    <div className=" flex justify-center pt-[80px] ">
    <div id="container" className=" flex flex-col gap-[48px] ">
        <div id="text-container" className="flex flex-col gap-[10px] justify-center items-center ">
            <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px]">Featured Products</h4>
            <h2 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] ">EDITOR’S PICK</h2>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] ">Problems trying to resolve the conflict between </p>
        </div>
        <div id="main-cards" className=" grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px]">
            {data.map((elem , index )=>{
                return (
                    <Bestcard key={index} image={elem.image} />
                )
            })}
        </div>
    </div>
</div>
  )
}

export default Bestseller