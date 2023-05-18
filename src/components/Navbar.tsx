
import IconHamburger from "@/components/icons/IconHamburger"
const Navbar = () => {
  return (
    <section className="container max-w-xs  flex justify-between bg-gray-700 absolute top-4 left-0 right-0 mx-auto "> 
        <p className="text-white font-bold uppercase">SuNombre</p>
        <nav>
            <button className="">
                <IconHamburger />
            </button>
        </nav>
    </section>
  )
}

export default Navbar