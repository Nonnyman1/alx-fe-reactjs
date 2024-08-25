
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import './App.css';
import Header from './components/header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile.jsx';
import Counter from "./components/Counter.jsx";

function App() {

  return (
    <>
      <div>
        <WelcomeMessage />
      </div>
      <div>
        <Header />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <MainContent />
        <Footer />
        <Counter/>
      </div>

    </>
  )
}

export default App
