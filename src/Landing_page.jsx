import Navbar from './Header/Navbar'
import Content from './Content/Main'
import Items from './Content/Items'
import Subscribe from './Content/Subscribe'
import Footer from './Header/Footer'
import PendudukSkilvul from './Content/PendudukSkilvul'

function Landing ()
{
    return(
        <>
    <section id="navbar">
        <Navbar/>
    </section>
    <section id='main'>
        <Content/>
    </section>
    <section id='barang'>
        <Items/>
    </section>
    <section id='subscribe section'>
        <Subscribe/>
    </section>
    <section id='penduduk section'>
        <PendudukSkilvul/>
    </section>
    <section id='footer'>
        <Footer/>
    </section>
        </>
    )
}

export default Landing