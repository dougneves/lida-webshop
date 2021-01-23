function FilterButton(props) {
  return (
    <div className="column has-text-centered">
      <button className="button">{props.children}</button>
    </div>
  );
}

function Header() {
  const filters = ["atividades", "livros", "jogos", "culinária", "ciências"];

  return (
    <section className="section">
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="columns mb-2">
        {filters.map((name) => (
          <FilterButton key={name}>{name}</FilterButton>
        ))}
      </div>
    </section>
  );
}

export default Header;