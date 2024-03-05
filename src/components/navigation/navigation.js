import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screen/home';
import InicialTela from '../../screen/coffee';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerTitle: ' ',
                    headerShown: false,
                }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='InicialTela' component={InicialTela} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
