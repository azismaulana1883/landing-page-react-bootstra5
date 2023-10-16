import Sembako1 from '../assets/img/sembako.jpg'
import Banner from '../assets/img/banner.png'
import KapalApi from '../assets/img/kapal-api.jpg'
import tagLine1 from '../assets/img/tagline 1.png'
import secondImg from '../assets/img/tagline 2.png'

function Main ()
{
    return (
        <>
    <div>
        <div className="carousel">
          <ul className="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li className="slide-container">
              <div className="slide-image">
                <img src={Sembako1}/>
              </div>
              <div className="carousel-controls">
                <label for="img-3" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-2" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li className="slide-container">
              <div className="slide-image">
                <img src={Banner}/>
              </div>
              <div className="carousel-controls">
                <label for="img-1" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-3" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li className="slide-container">
              <div className="slide-image">
                <img src={KapalApi}/>
              </div>
              <div className="carousel-controls">
                <label for="img-2" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-1" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <div className="carousel-dots">
              <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
              <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
              <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
            </div>
          </ul>
        </div>
      </div>

      <section className="tagline section">
        <div className="first">
          <div className="first__img">
            <img src={tagLine1} alt=""/>
          </div>
          <div className="first__text">
            <h1>Mempermudah kamu mengelola tokomu!</h1>
            <p id="description">Kelontong membantumu mengelola tokomu mulai dari ringkasan penjualan hingga mengedit produk penjualan hanya dengan 1 klik</p>
          </div>
        </div>
        <div className="second">
          <div className="second__text">
            <h1>Belanja kapanpun, dimanapun!</h1>
            <p>Kelontong memberikanmu pengalaman belanja yang mudah 24 jam, tanpa perlu antri dan jaminan 1 jam sampai.</p>
            <a href="https://skilvul.com" id="link">Skilvul</a>
          </div>
          <div className="second__img">
            <img src={secondImg} alt=""/>
          </div>
        </div>
        </section>
        </>
    )
}

export default Main