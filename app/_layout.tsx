/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {SplashScreen, Stack} from 'expo-router';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
		RobotoThin: require('../assets/fonts/Roboto/Roboto-Thin.ttf'),
		RobotoLight: require('../assets/fonts/Roboto/Roboto-Light.ttf'),
		RobotoMedium: require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
		RobotoBold: require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	return (
		<>
			{/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
			{!loaded && <SplashScreen />}
			{loaded && <RootLayoutNav />}
		</>
	);
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name='(tabs)' options={{headerShown: false}} />
					<Stack.Screen name='modal' options={{presentation: 'modal'}} />
				</Stack>
			</ThemeProvider>
		</>
	);
}
