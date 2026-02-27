import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@clerk/clerk-expo";

export default function TabsLayout() {
    const { isSignedIn , isLoaded } = useAuth();
 
    if (!isLoaded) return null;
    if (!isSignedIn) {
        return <Redirect href="/(auth)" />;
    }
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: { 
                backgroundColor: "#fff",
                borderTopColor: "#eee",
                borderTopWidth: 1,   
                height: 88,
                paddingTop: 8,
                        },
        tabBarActiveTintColor: "#ffa200",
        tabBarInactiveTintColor: "#999",
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
        }
        }}> 
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="profile"
                options ={{
                
                title: "Profile",
                tabBarIcon: ({ color, focused, size}) => (
                <Ionicons
                    name={focused ? "person" : "person-outline"}
                    size={size}
                    color={color}
                />
                ),
            }}
           />
        </Tabs>

    );
}
