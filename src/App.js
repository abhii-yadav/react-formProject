import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProfileForm from "./components/ProfileForm";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ProfileForm />
      </div>
    </Provider>
  );
}

export default App;
