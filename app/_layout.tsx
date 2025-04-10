import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(order)" options={{ headerShown: false }} />
        <Stack.Screen name="(proprietaire)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
