function Slidebar() {
  return (
    <div>
      <div className="carousel slide" data-bs-ride="carousel" id="abc">
        {/* Carousel indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#abc"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button type="button" data-bs-target="#abc" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#abc" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#abc" data-bs-slide-to="3"></button>
        </div>

        {/* Carousel inner */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src="https://pn-paul.netlify.app/image/slider1.jpg" alt="Slide 1" className="w-100" />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://pn-paul.netlify.app/image/slider22.jpg" alt="Slide 2" className="w-100" />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://pn-paul.netlify.app/image/slidwr33.jpg" alt="Slide 3" className="w-100" />
          </div>
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#abc"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#abc"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slidebar;
