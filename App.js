import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import theme from './src/styles/theme';
import {Pokemons, Pokedex, Battle, Map} from './src/pages';
import {I, TabBar} from './src/assets';

const TabWrapper = styled.View.attrs(() => ({
  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
}))`
  background: blue;
  flex-direction: row;
`;

function MyTabBar(props) {
  const {state, descriptors, navigation} = props;
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <TabWrapper>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}
            key={index}>
            {options.tabBarIcon()}
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </TabWrapper>
  );
}

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <MyTabBar {...props} />}
          initialRouteName="Pokemons">
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarLabel: 'Map',
              tabBarIcon: () => (
                <Image style={{width: 40, height: 40}} source={I.Map} />
              ),
            }}
          />
          <Tab.Screen
            name="Battle"
            component={Battle}
            options={{
              tabBarLabel: 'Battle',
              tabBarIcon: () => (
                <Image style={{width: 40, height: 40}} source={I.Battle} />
              ),
            }}
          />
          <Tab.Screen
            name="Pokemons"
            component={Pokemons}
            options={{
              tabBarLabel: 'Pokemons',
              tabBarIcon: () => (
                <Image style={{width: 40, height: 40}} source={I.Pokemons} />
              ),
            }}
          />
          <Tab.Screen
            name="Pokedex"
            component={Pokedex}
            options={{
              tabBarLabel: 'Pokedex',
              tabBarIcon: () => (
                <Image style={{width: 40, height: 40}} source={I.Pokedex} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
