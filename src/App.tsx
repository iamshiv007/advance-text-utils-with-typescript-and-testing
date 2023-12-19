import Header from "./layout/Header";
import Home from "./pages/Home";
import "./App.css"

function App() {
  return (
    <div style={{height:"100%", display:"flex", flexDirection:"column"}}>
      <Header />
      <Home/>
]    </div>
  );
}

export default App;