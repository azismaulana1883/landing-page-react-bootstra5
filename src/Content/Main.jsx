import React from 'react';
import kebutuhanImg from '../assets/img/kebutuhan.jpg';
import promoImg from '../assets/img/promo.png';
import elektronikImg from '../assets/img/elektronik.jpg';
import risetImg from '../assets/img/riset.png';
import tokoImg from '../assets/img/toko.png';

function Main() {
    return (
        <>
               <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-9 col-md-8 col-sm-12">
                    <section class="carousel">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-end align-items-center vh-80 vw-80 pb-1 pt-1"></div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={kebutuhanImg} class="d-block w-100 h-100" alt="..."/>
                </div>
                <div class="carousel-item justify-content-center">
                        <img src={promoImg} class="d-block w-100 h-100" alt="..."/>
                </div>
                <div class="carousel-item justify-content-center">
                    <img src={elektronikImg} class="d-block w-100 h-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
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
