import './App.css'
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Profile from "./components/profile/profile";

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