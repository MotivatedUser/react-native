import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Platform, View } from 'react-native';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637dd'}
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
        </Stack.Navigator>
    );
};

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name='Directory' 
                component={DirectoryScreen} 
                options={{title: 'Campsite Directory'}} />

            <Stack.Screen 
                name='CampsiteInfo' 
                component={CampsiteInfoScreen} 
                options={({route}) => ({ title: route.params.campsite.name})} />
        </Stack.Navigator>
    );
};

const Main = () => {
    

    return (
        <View 
            style={{flex: 1, 
            paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
           <Drawer.Navigator 
                initialRouteName='Home' 
                drawerStyle={{ backgroundColor: '#cec8ff'}}>
                    <Drawer.Screen 
                        name='Home' 
                        component={HomeNavigator} 
                        options={{ title: 'Home' }} 
                    />
                    <Drawer.Screen 
                        name='Directory' 
                        component={DirectoryNavigator} 
                        options={{ title: 'Directory' }} 
                    />
           </Drawer.Navigator>
        </View>
    );
};

export default Main;
