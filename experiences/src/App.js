import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  let dataElements = Data.map(item => {
    return <Card key={item.key} {...item} />
  })
  return (
    <div className="App">
      <Navbar/>
      <section>{dataElements}</section>
    </div>
  );
}

export default App;
