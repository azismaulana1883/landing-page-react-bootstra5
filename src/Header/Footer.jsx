function Footer ()
{
    return (
        <>
    <footer className="footer">
        <div className="footer__logo">
            <a className='logo__text' href='/'>Kelontong</a>
            <p>All rights reserved  © 2023</p>
        </div>
        <div className="footer__navigation">
            <div className="footer__nav-about">
                <h2>Tentang</h2>
                <ul>
                    <li><a href="#">Kelontong</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Mitra</a></li>
                </ul>
            </div>
            <div className="footer__nav-buy">
                <h2>Jual & Beli</h2>
                <ul>
                    <li><a href="#">Edukasi Seller</a></li>
                    <li><a href="#">Kelontong COD</a></li>
                </ul>
            </div>
            <div className="footer__nav-help">
                <h2>Bantuan & Panduan</h2>
                <ul>
                    <li><a href="#">Customer Care</a></li>
                    <li><a href="#">Syarat & Ketentuan</a></li>
                    <li><a href="#">Kebijakan Privasi</a></li>
                    <li><a href="https://skilvul.com">Skilvul</a></li>
                </ul>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer