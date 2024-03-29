import Avatar from "@/assets/images/avatar-1.jpg"
import Image from "next/image"

export const metadata = {
  title: 'Home page - Create Next App',
  description: 'Generated by create next app',
}

const Home = () => {
  return (
    <>
      <Image 
      src={Avatar}  alt="Imagen avatar de presentacion" className="rounded-full mx-auto absolute top-o -translate-y-1/2 right-0 left-0 "
      width={100}
      height={100}
      
      />
      <div className="mt-[calc(50px+32px-16px)]">
    <h1 className="text-center font-bold uppercase text-2xl">Lisa Hayes</h1>
    <p className="text-center mb-8 text-gray-700">Backend Developer</p>
    <p className="text-center">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus error atque quae unde nostrum earum molestias ex, suscipit eveniet, nam quidem itaque iure magnam necessitatibus qui. Laudantium, est sunt. </p>

      </div>
    </>
  )
}

export default Home
