
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Detail from "./components/detail"
import Items from "./components/items"
import Bar from "./components/bar"
import Inventario from "./js/liquidacion.js"

function App() {

  return (
    <>

<Navbar></Navbar>
<Bar></Bar>


<div className="row">


  <Items></Items>


<Detail></Detail>



</div>


<Footer></Footer>


<Inventario></Inventario>
    </>
  )
}

export default App
