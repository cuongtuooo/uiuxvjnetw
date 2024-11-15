import "./Carousel.css"

function Carousel() {
    return (
        <div className="card h-100">
            <div className="card-body carousel__body">
                <div className="carousel__title-wrap">
                   <h5 className="carousel__title">Tin tức khuyến mãi</h5>
                </div>

                
                <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./image/carousel1.png" className="d-block w-100" alt="Promotion 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="./image/carousel2.png" className="d-block w-100" alt="Promotion 2" />
                        </div>
                        <div className="carousel-item">
                            <img src="./image/carousel3.png" className="d-block w-100" alt="Promotion 3" />
                        </div>
                        <div className="carousel-item">
                            <img src="./image/carousel4.png" className="d-block w-100" alt="Promotion 4" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;