import Dashboard from "./Dashboard/Dashboard";
import Menu from "./Menu/Menu";
import { DefaultContext } from "./Context";

export default function App() {
  return (
    <DefaultContext.Provider
      value={{
        items: []
      }}
    >
      <div className="App d-flex h-100">
        <Dashboard />
        <Menu />
      </div>
    </DefaultContext.Provider>
  );
}
