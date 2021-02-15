/* eslint-disable jsx-a11y/label-has-associated-control */
// don't know why the label rule is not working...

function Header() {
  const searchId = 'search-id';
  return (
    <header className="lida-header">
      <div className="search-field">
        <label htmlFor={searchId} className="search-label">
          Search
        </label>
        <input
          className="search-input"
          type="search"
          placeholder="math, english, logic..."
          id={searchId}
        />
      </div>
    </header>
  );
}

export default Header;
