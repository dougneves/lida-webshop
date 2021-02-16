import PropTypes from 'prop-types';

function FilterButton({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
FilterButton.propTypes = {
  children: PropTypes.string.isRequired,
};

function Filters() {
  return ['atividades', 'livros', 'jogos', 'culinária', 'ciências'].map((name) => (
    <FilterButton key={name}>{name}</FilterButton>
  ));
}

export default Filters;
