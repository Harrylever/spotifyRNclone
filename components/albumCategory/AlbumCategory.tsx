import React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from '../Themed';
import Album from '../album/Album';
import styles from './styles';

// Types Import
import {type AlbumCategoryProps} from '../../types';

const AlbumCategory = (props: AlbumCategoryProps) => (
	<View style={styles.container}>
		<Text style={styles.title}>
			{props.title}
		</Text>
		<View style={styles.subContainer}>
			<FlatList
				style={styles.albumList}
				data={props.albums}
				renderItem={({item}) => <Album id={item.id} artistsHeadline={item.artistsHeadline} imageUri={item.imageUri} />}
				keyExtractor={item => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	</View>
);

export default AlbumCategory;
