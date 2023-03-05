import React from 'react';
import {Image, Pressable, TouchableOpacity} from 'react-native';
import {Text, View} from '../Themed';

import styles from './styles';
import {type AlbumProps} from '../../types';

const Album = (props: AlbumProps) => (
	<Pressable>
		{({pressed}) => (
			<View style={[styles.container, {opacity: pressed ? 0.5 : 1}]}>
				<Image source={{uri: props.imageUri}} style={styles.image} />
				<View style={styles.textContainer}>
					<Text style={styles.text}>{props.artistsHeadline}</Text>
				</View>
			</View>
		)}
	</Pressable>
);

export default Album;
