import PropTypes from 'prop-types';

function ProductBox({ productName }) {
  return (
    <div>
      <div
        style={{
          width: '400px',
          height: '400px',
          backgroundImage: `url(https://picsum.photos/400?random=${Math.floor(
            Math.random() * 1000,
          )})`,
          backgroundPosition: 'center',
        }}
      />
      <div>
        <div>{productName}</div>
      </div>
      <footer>
        <p>
          <span>
            View on
            {' '}
            <button type="button">Elo7</button>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            View on
            {' '}
            <button type="button">OLX</button>
          </span>
        </p>
      </footer>
    </div>
  );
}

ProductBox.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default ProductBox;
