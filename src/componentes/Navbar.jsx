import CartWidget from "./CartWidget"
import fplogo from "../img/fplogo.png"
import "./NavBar.css"

function Navbar() {
    //     const style = {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     width: "100%",
        
    // }   

    return (

        <header >
            
            <img src={fplogo} id="logo" alt="Vite logo" />
            <div id= "links-container">
                
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">¿Quienés somos?</a>
                
                
            </div>
            
            
                <CartWidget/>
                
            
        </header>
    )
}

// export default function Navbar() {

//     const style = {
//         bacgroundColor: red,
        
//     }

//     return (

//         <header  >
            
//             <img src={fplogo} className="logo" alt="Vite logo" />
//             <div >
                
//                 <a style = {style} href="">Inicio</a>
//                 <a href="">Productos</a>
//                 <a href="">¿Quienés somos?</a>
//             </div>
//             <CartWidget/>
            
            
//         </header>
//     )
// }
export default Navbar
