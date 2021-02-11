function ProductBox(props) {
  return (
    <div className="column is-half-tablet is-one-third-desktop">
      <div className="card">
        <div className="card-image">
          <figure
            className="image is-2by1"
            style={{
              backgroundImage:
                "url(https://picsum.photos/400?random=" +
                Math.floor(Math.random() * 1000) +
                ")",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="card-content">
          <div className="content">{props.productName}</div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on <a href="#">Elo7</a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              View on <a href="#">OLX</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ProductBox;