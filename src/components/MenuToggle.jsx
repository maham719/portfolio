import { RiMenu3Fill } from "react-icons/ri";
 

const MenuToggle = ({settoggle,setAnime}) => {

  return (
    <button className="menutoggle md:hidden lg:hidden " onClick={()=>{settoggle(true);
      setAnime(true)}} ><RiMenu3Fill size={30}/></button>
  )
}

export default MenuToggle
