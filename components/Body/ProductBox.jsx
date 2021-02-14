import PropTypes from 'prop-types';

function ProductBox({ name }) {
  return (
    <div className="product">
      <figure
        className="product-figure"
        style={{
          backgroundImage: `url(https://picsum.photos/400?random=${Math.floor(
            Math.random() * 1000,
          )})`,
        }}
      />
      <div className="product-content">
        <h2 className="product-title">{name}</h2>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sic consequentibus vestris
          sublatis prima tolluntur. Istam voluptatem, inquit, Epicurus ignorat? Minime vero istorum
          quidem, inquit. Neutrum vero, inquit ille. Itaque contra est, ac dicitis;
        </p>
      </div>
      <footer className="product-footer">
        <button className="product-button" type="button">
          view on Elo7
        </button>
        <button className="product-button" type="button">
          view on OLX
        </button>
      </footer>
    </div>
  );
}

ProductBox.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductBox;
