import { View , Text } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useAuth} from "@clerk/clerk-expo";

const AuthLayout = () => {
const { isSignedIn } = useAuth();

if(isSignedIn) return <Redirect href={"/(tabs)"} />;
    
     return  <Stack />;  
        }
        
export default AuthLayout;