import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppLayout from "./containers/AppLayout/AppLayout";

const App = () => {
    return (
        <Provider store={store}>
            <AppLayout />
        </Provider>
    );
};

export default App;
