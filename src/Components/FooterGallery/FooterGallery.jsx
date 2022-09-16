import "./FooterGallery.css";

const FooterGallery = () => {
  let fashionIconImages = [
    {
      id: 1,
      imgSrc:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      imgSrc:
        "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      imgSrc:
        "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgLink: "https://www.instagram.com/p/CUAl7qKJbdW/",
    },
    {
      id: 4,
      imgSrc:
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      imgSrc:
        "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      imgSrc:
        "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div>
      <div className="footer-image-container">
        {fashionIconImages.map((footerImg) => {
          return (
            <div className="footer-image__item" key={footerImg.id}>
              <a href={footerImg.imgLink}>
                <img
                  //   onClick={footerImg.imgLink}
                  style={{
                    width: "100%",
                    height: "240px ",
                    objectFit: "cover",
                  }}
                  src={footerImg.imgSrc}
                />
              </a>
            </div>
          );
        })}
        <a href="https://www.instagram.com/crossfade_films/">
          <button className="insta-handle-button">@there_name</button>
        </a>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div
              style={{ margin: "15px 0" }}
              className="col-md-12  text-center"
            >
              {/* <p>© Copyright 2022. All Rights Reserved by Crossfade Films </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterGallery;
