function Navbar() {
    return (
        <>
        <header className="Header">
        <div className="col">
            <nav className="container-fluid pt-3 pb-3 ps-5 pe-5">
                    <div className="navbar navbar-expand-lg navbar-light bg-light col-12 align">
                        <div className="row w-100">
                            <div className="col-lg-3 col-md-3 col-sm-12 ps-5">
                                <a className="navbar-brand text-primary fw-bold" href="#">Kelontong
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="container justify-content-end">
                                    <div className="row">
                                        <div className="col">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search..."/>
                                        </div>
                                        <div className="col-md-3">
                                            <a href="cart.html"><img className="icon__checkout" src="assets/img/shop-cart.png" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="container">
                                    <div className="row">
                                        <div className="col ps-lg-5 justify-content-end">
                                            <a href="pages/login.html"><button type="button" className="btn btn-light border border-primary text-primary">Masuk</button></a>
                                            <a href="pages/register.html"><button type="button" className="btn btn-primary border border-primary text-light">Daftar</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </nav>
                </div>
        </header>
    </>
    )
}

export default Navbar;
