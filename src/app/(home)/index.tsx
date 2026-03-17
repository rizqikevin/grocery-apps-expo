import { Show, useClerk, useUser } from "@clerk/expo";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <SafeAreaView className="flex gap-5 p-10 pt-10">
      <Text className="text-lg font-bold text-white">Welcome!</Text>
      <Show when="signed-out">
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
      </Show>
      <Show when="signed-in">
        <Text className="text-white">
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
        <Pressable
          className="flex items-center p-3 text-black bg-white rounded-md"
          onPress={() => signOut()}
        >
          <Text className="text-muted-foreground">Sign out</Text>
        </Pressable>
      </Show>
    </SafeAreaView>
  );
}
