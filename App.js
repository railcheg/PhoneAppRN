import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {MODES} from './constants';
import ButtonContainer from './containers/ButtonContainer.js';

const initialState = {
    mode: MODES.SELECT
};

const store = createStore(reducers, initialState);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const App = () => (
    <Provider store={store}>
        <Container>
            <Content>
                <View style={styles.container}>
                    <Text>
                       React Native app
                    </Text>
                </View>
            </Content>
            <ButtonContainer/>
        </Container>
    </Provider>
);

export default App;


