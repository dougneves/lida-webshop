import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Body from "../components/Body";

function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12-mobile is-9 m-1">
            <Header />
            <Body />
          </div>
          <div className="column is-12-mobile is-3 m-1">
            <SideMenu />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
