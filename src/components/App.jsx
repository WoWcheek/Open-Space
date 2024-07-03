import { Provider } from "react-redux";
import { store } from "../redux/store";
import AppLayout from "./AppLayout";

function App() {
    return (
        <Provider store={store}>
            <AppLayout />
        </Provider>
    );
}

export default App;
