import "./Metropolis.css";
const Metropolis = () => {
  const metropolisData = [
    {
      img: "https://meros-custom-color-1-demo.mybigcommerce.com/product_images/uploaded_images/images-custom-block-7.jpg",
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      text1: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://meros-custom-color-1-demo.mybigcommerce.com/product_images/uploaded_images/images-custom-block-8.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];
  return (
    <>
      <div style={{ padding: "30px 0" }} id="newIn">
        <div className="main-header-container">
          <div className="new-collection-container">
            <div className="div-text-white">
              <h2 className="collection-text">
                <span>NEW COLLECTION</span>
              </h2>
            </div>
            <div className="dark-line"></div>
          </div>
          <div className="metropolis-collection-container">
            {metropolisData.map((item, index) => {
              return (
                <div className="metropolis-collection-item" key={index}>
                  <div className="metropolis-collection">
                    <img className="metropolis-image" src={item.img} alt="" />
                  </div>
                  <div className="metropolis-hashtag">
                    <p>#Metropolis</p>
                  </div>
                  <p className="metropolis-text">
                    {item.text}
                    <br />
                    {item.text1}
                  </p>
                  <button className="shop-the-collection-button">
                    SHOP THE COLLECTION
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Metropolis;
