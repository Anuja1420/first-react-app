import './Home.css';

function Home() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx"height="600" class="d-block w-100" width = "1540" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-01%2F0d2m0qkg_car_625x300_12_January_22.jpg&w=3840&q=75" height="600" width = "1540" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Revuelto/9770/1680237730530/front-left-side-47.jpg" height="600" width = "1540" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default Home;
