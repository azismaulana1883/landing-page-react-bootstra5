import React from 'react';
import kebutuhanImg from '../assets/img/kebutuhan.jpg';
import promoImg from '../assets/img/promo.png';
import elektronikImg from '../assets/img/elektronik.jpg';
import risetImg from '../assets/img/riset.png';
import tokoImg from '../assets/img/toko.png';

function Main() {
    return (
        <>
               <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <section className="carousel">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-end align-items-center vh-80 vw-80 pb-1 pt-1"></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={kebutuhanImg} className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="carousel-item justify-content-center">
                        <img src={promoImg} className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="carousel-item justify-content-center">
                    <img src={elektronikImg} className="d-block w-100 h-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
</div>
</section>
</div>
</div>
</div>
                <section className="wrapper-about">
                    <div className="container-fluid">
                        <div className="row pt-5 ps-5">
                            <div className="col-sm-6 image-about">
                                <img src={risetImg} alt="Description of the Image" className="img-fluid"/>
                            </div>
                            <div className="col-sm-6 text-about">
                                <h2>Mempermudah kamu mengelola tokomu!</h2>
                                <p>Kelontong membantumu mengelola tokomu mulai dari ringkasan penjualan hingga mengedit produk penjualan hanya dengan 1 klik</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row pt-5 ps-5">
                            <div className="col-sm-6 text-about">
                                <h2>Kelontong memberikanmu pengalaman belanja yang mudah 24 jam</h2>
                                <p>tanpa perlu antri dan jaminan 1 jam sampai.</p>
                            </div>
                            <div className="col-sm-6 image-about align-items-end">
                                <img src={tokoImg} alt="Description of the Image" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Main;
