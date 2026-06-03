import { Stack } from 'expo-router';
import { registerRootComponent } from 'expo';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#000' }
      }}
    />
  );
}