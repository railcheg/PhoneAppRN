import React from 'react';
import SelectAndChange from '../components/SelectAndChange.js';
import {connect} from 'react-redux';
import {setMode} from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
	mode: state.mode
});

const mapDispatchToProps = (dispatch) => ({
	setMode(mode) {
		console.log(mode);
		dispatch(setMode(mode));
	}
});

const ButtonContainer = ({mode, setMode}) => (
	<SelectAndChange mode={mode} setMode={setMode}/>
);

ButtonContainer.propTypes = {
	mode: PropTypes.string,
	setMode: PropTypes.func
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonContainer);