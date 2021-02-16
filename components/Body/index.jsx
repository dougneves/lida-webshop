import ProductBox from './ProductBox';

function BodyContainer() {
  const products = [
    'matemática básica de contar dos ursos',
    'soma das obrobas',
    'multiplicando muito',
    'somando as casas',
    'subtraindo o arco-íris',
    'minhas primeiras 100 palavras em inglês',
    'contando histórias',
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
