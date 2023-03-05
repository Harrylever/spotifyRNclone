/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import {FontAwesome5, Entypo, EvilIcons, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {Link, Tabs} from 'expo-router';
import {Pressable, useColorScheme} from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome5>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: 'homescreen',
};

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Spotify',
					tabBarIcon: ({color}) => <Entypo name='home' size={25} color={color} style={{marginBottom: -3}} />,
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({pressed}) => (
									<Ionicons name='settings-outline'
										size={25}
										color={Colors[colorScheme ?? 'light'].text}
										style={{marginRight: 15, opacity: pressed ? 0.5 : 1}} />
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='searchscreen'
				options={{
					title: 'Search',
					tabBarIcon: ({color}) => <EvilIcons name='search' size={25} color={color} style={{marginBottom: -3}} />,
				}}
			/>
			<Tabs.Screen
				name='libraryscreen'
				options={{
					title: 'Library',
					tabBarIcon: ({color}) => <MaterialCommunityIcons name='library' size={25} color={color} style={{marginBottom: -3}} />,
				}}
			/>
			<Tabs.Screen
				name='spotifyscreen'
				options={{
					title: 'Spotify',
					tabBarIcon: ({color}) => <FontAwesome5 name='spotify' size={25} color={color} style={{marginBottom: -3}} />,
				}}
			/>
		</Tabs>
	);
}
