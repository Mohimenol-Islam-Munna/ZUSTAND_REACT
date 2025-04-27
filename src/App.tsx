import Parent from "./components/Parent";
import Child from "./components/Child";
import { GlobalContextProvider, useSetGlobalContext } from "./store";

const App = () => {
  const globalContext = useSetGlobalContext();

  console.log("App globalContext:", globalContext);

  return (
    <GlobalContextProvider value={globalContext}>
      <div>
        <header className="p-4 bg-blue-300">
          <h2 className="text-center text-3xl">Zustand & React js</h2>
        </header>
        <main className="p-4 bg-gray-100">
          <Parent />
          <Child />
        </main>
        <footer className="p-4 bg-blue-300">
          <h2 className="text-center text-3xl">Footer</h2>
        </footer>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
