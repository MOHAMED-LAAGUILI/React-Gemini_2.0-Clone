import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="flex flex-grow h-screen">
        {/* Sidebar */}
        <div className="w-16">
          <SideBar />
        </div>

        {/* Main content container */}
        <div className="">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <Main />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
