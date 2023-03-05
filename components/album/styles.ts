import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: 190,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden',
		width: 120,
		margin: 10,
	},
	image: {
		width: '100%',
		height: 120,
	},
	textContainer: {
		width: '100%',
		height: 70,
	},
	text: {
		marginTop: 7,
		color: 'gray',
		fontSize: 13,
		fontFamily: 'RobotoMedium',
		fontWeight: '500',
		letterSpacing: 2,
	},
});

export default styles;
