import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <Provider store={store.store}>
            <PersistGate persistor={store.persistStorage}>
                <App />
            </PersistGate>
        </Provider>);