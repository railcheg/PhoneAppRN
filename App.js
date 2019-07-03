import React from 'react';
import {Container, Content, Footer, FooterTab, Button, Text} from 'native-base';
import {StyleSheet, View} from 'react-native';
import Svg, {
    Circle,
    Rect,
    Path,
    Line,
    G

} from 'react-native-svg';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {start: true};
    }

    componentWillMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
    }

    timer() {
        let dt = new Date(),
            hours = dt.getHours(),
            minutes = dt.getMinutes(),
            seconds = dt.getSeconds(),
            degSeconds = 180 + 360 / 60 * seconds,
            degMinutes = 180 + 360 / 60 * minutes,
            degHours = 180 + 360 / 12 * (hours % 12) + degMinutes / 60;
        this.setState({degSeconds: degSeconds, degMinutes: degMinutes, degHours: degHours});
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    setMode() {

    }

    render() {
        return <Container>
            <Content>
                <View style={styles.container}>
                    <Text>
                        Clock
                    </Text>

                    <Svg
                        height="300"
                        width="300"
                    >
                        <Circle cx="140" cy="140" r="140" fill="grey"/>
                        <Circle cx="140" cy="140" r="130" fill="white"/>
                        <Circle cx="140" cy="140" r="4" fill="black"/>
                        <Line
                            origin="140, 140"
                            x1="140"
                            y1="140"
                            x2="140"
                            y2="260"
                            rotation={this.state.degSeconds}
                            stroke="red"
                            strokeWidth="1"
                        />
                        <Line
                            origin="140, 140"
                            x1="140"
                            y1="140"
                            x2="140"
                            y2="220"
                            rotation={this.state.degMinutes}
                            stroke="black"
                            strokeWidth="2"
                        />
                        <G
                            rotation={this.state.degHours}
                            origin="140, 140"
                        >
                            <Line
                                x1="140"
                                y1="140"
                                x2="140"
                                y2="200"
                                stroke="black"
                                strokeWidth="4"
                            />
                        </G>
                    </Svg>
                </View>
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        success
                        onPress={this.setMode()}>
                        <Text>Выбрать</Text>
                    </Button>
                    <Button
                        danger
                        onPress={this.setMode()}>
                        <Text>Выйти</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    }
};


