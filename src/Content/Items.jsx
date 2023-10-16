import React from 'react';
import barang1Img from '../assets/img/barang 1.png';
import barang2Img from '../assets/img/barang 2.png';
import barang3Img from '../assets/img/barang 3.png';
import barang4Img from '../assets/img/barang 4.png';
import starImg from '../assets/img/star.svg';
import halfStarImg from '../assets/img/half-star.svg';

function Items() {
    return (
        <div className="items">
            <div className="items__text flex-y">
                <h1>Barang pilihan untuk pengguna baru</h1>
                <a href="#">Lihat semua barang</a>
            </div>
            <div className="items__cards">
                <div className="item">
                    <img className="item__img" src={barang1Img} alt="Barang 1"/>
                    <h4 className="item__name">Pringless original 150gr</h4>
                    <h2 className="item__price">Rp 15.000</h2>
                    <div className="rating flex-y">
                        <div className="number">4.5</div>
                        <div className="stars flex-y">
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={halfStarImg} alt="Half Star"/>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img className="item__img" src={barang2Img} alt="Barang 2"/>
                    <h4 className="item__name">MacZ Blado 25gr</h4>
                    <h2 className="item__price">Rp 5.000</h2>
                    <div className="rating flex-y">
                        <div className="number">4.5</div>
                        <div className="stars flex-y">
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={halfStarImg} alt="Half Star"/>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img className="item__img" src={barang3Img} alt="Barang 3"/>
                    <h4 className="item__name">Chiki Balls keju 35gr</h4>
                    <h2 className="item__price">Rp 8.000</h2>
                    <div className="rating flex-y">
                        <div className="number">4.5</div>
                        <div className="stars flex-y">
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={halfStarImg} alt="Half Star"/>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img className="item__img" src={barang4Img} alt="Barang 4"/>
                    <h4 className="item__name">Potabee BBQ 35gr</h4>
                    <h2 className="item__price">Rp 8.000</h2>
                    <div className="rating flex-y">
                        <div className="number">4.5</div>
                        <div className="stars flex-y">
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={starImg} alt="Star"/>
                            <img className="star" src={halfStarImg} alt="Half Star"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items;
