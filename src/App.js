import './App.css'
import Header from "./components/header";
import Navigation from "./components/navigation";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <main className={"main"}>
            <Profile/>
        </main>
    </div>
  )
}

export default App