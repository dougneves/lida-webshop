import ProductBox from './ProductBox';

function BodyContainer() {
  const products = [
    'matemática básica de contar dos ursos',
    'soma das obrobas',
    'multiplicando muito',
  ];

  return (
    <main>
      <div className="products">
        {products.map((name) => (
          <ProductBox name={name} key={name} />
        ))}
      </div>
    </main>
  );
}

export default BodyContainer;
