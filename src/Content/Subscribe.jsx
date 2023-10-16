function Subscribe() {
    return (
        <div className="subscribe">
            <div className="subscribe__text">
                <h1>Dapatkan lebih banyak info menarik dengan berlangganan email</h1>
            </div>
            <form className="subscribe__form">
                <input className="form__name" type="text" placeholder="Name" id="name" />
                <input className="form__city" type="text" placeholder="City" id="city" />
                <input className="form__email" type="email" placeholder="Email" id="email" />
                <input className="form__zipcode" type="number" placeholder="Kode Pos" id="zip-code" />
                <label htmlFor="status" id="check">
                    Dengan ini saya menyatakan data yang diisi pada form ini adalah benar dan telah sesuai
                </label>
                <input type="checkbox" id="status" />
                <button className="btn__submit" type="submit" id="submit-form">Submit</button>
                <div id="warning"></div>
            </form>
        </div>
    )
}

export default Subscribe;
