import Main from './screens/MainComponent';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import {persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';


const App = () => {
    return (
        <PersistGate loading={<Loading />} persistor={persistor}>
            <NavigationContainer>
                <Provider store={store}>
                    <Main />
                </Provider>
            </NavigationContainer>
        </PersistGate>
    )
}
export default App;