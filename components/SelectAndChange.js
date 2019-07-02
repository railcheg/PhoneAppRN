import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {MODES} from "../constants";
import PropTypes from 'prop-types';

const SelectAndChange = ({mode = MODES.SELECT, setMode = () => {}}) => (
	<Footer>
		<FooterTab>
			<Button
				active={mode === MODES.SELECT}
				onPress={() => setMode(MODES.SELECT)}>
				<Text>Статьи</Text>
			</Button>
			<Button
				active={mode === MODES.CHANGE}
				onPress={() => setMode(MODES.CHANGE)}>
				<Text>Подкасты</Text>
			</Button>
		</FooterTab>
	</Footer>
);

SelectAndChange.propTypes = {
	mode: PropTypes.string,
	setMode: PropTypes.func
};

export default SelectAndChange;