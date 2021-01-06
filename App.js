/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, View, Text, Switch} from 'react-native';
import styled from 'styled-components/native';
const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Wrapper>
      <Scroll>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
        <Title>Olá, meu primeiro react native app :)</Title>
      </Scroll>
      <Switch
        trackColor={{false: '#767507', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Wrapper>
  );
};
const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  text-align: right;
`;

const Scroll = styled.ScrollView`
  padding: 5px;
  background: #a0a0a0;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #636363;
`;

export default App;
