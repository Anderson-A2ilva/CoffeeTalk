import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from '../../screen/home';
import InicialTela from '../../screen/coffee';
import IcedTela from '../../screen/iced'
import HotIcon from '../../assets/img/tabIcon/xicara-de-cafe.png';
import IcedIcon from '../../assets/img/tabIcon/bebida-gelada.png';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={{
            headerTitle: ' ',
            headerShown: false,
        }}
            tabBarOptions={{
                activeTintColor: '#E5E5CB',
                inactiveTintColor: '#E5E5CB',
                activeBackgroundColor: '#1A120B',
                inactiveBackgroundColor: '#3C2A21',
                    style: {
                          backgroundColor: 'transparent',
                          paddingBottom: 3
                    },
                labelStyle: {
                    fontFamily: 'Poppins-Bold',
                    fontSize: 13, 
            },
        }}
        >
            <Tab.Screen name="HotCoffee" component={InicialTela}
                options={{
                    tabBarIcon: () => (
                        <Image source={HotIcon} style={{ width: 24, height: 24 }} />
                    )

                }}
            />
            <Tab.Screen name="IcedCoffee" component={IcedTela} 
            options={{
                tabBarIcon: () => (
                    <Image source={IcedIcon} style={{ width: 24, height: 24 }} />
                )

            }}/>
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerTitle: ' ',
                    headerShown: false,
                }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Tab' component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
