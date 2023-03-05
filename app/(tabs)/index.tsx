import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Text, View} from '../../components/Themed';
import {AlbumCategory} from '../../components';

import AlbumList from '../../lib/data/albumCategories';

const HomeScreen = () => {
	const AlbumCategory1 = AlbumList[0];
	return (
		<View style={styles.container}>
			<FlatList
				data={AlbumList}
				renderItem={({item}) => <AlbumCategory title={item.title} albums={item.albums} /> }
				keyExtractor={item => item.id ? item.id : ''}
				ListHeaderComponent={(
					<>
						<LinearGradient
							// Background Linear Gradient
							colors={['#427646', '#498b4ebc', '#498b4e78', '#1db95418', 'transparent']}
							style={[styles.background, {position: 'relative'}]}
							locations={[0.1, 0.3, 0.6, 0.8, 0.9]}
							start={{x: 0.1, y: 0.2}}
							end={{x: 1, y: 1}}
						>
							<Text style={styles.bannerText}>Hello</Text>
						</LinearGradient>
					</>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	background: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		// PaddingVertical: 20,
		height: 66,
		width: '100%',
		borderBottomLeftRadius: 10,
		marginBottom: 20,
	},
	bannerText: {
		marginLeft: 12,
		fontFamily: 'RobotoMedium',
		fontSize: 26,
	},
});

export default HomeScreen;
