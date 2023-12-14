import { SafeAreaView, TouchableOpacity, View, Text, Image } from "react-native"
import { logoutApi } from "../../API/LoginAuth";
import { useContext } from "react";
import { AuthContext } from "../../App";

const LoggedIn = () => {
    const { signOut } = useContext(AuthContext);

    const logout = async () => {
        const response = await logoutApi();

        if (response?.success){
            signOut();
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
                <Image
                    source={require("../../assets/logo/health-logo.png")}
                    style={{ backgroundColor: "#03989F", marginBottom: 20 }}
                />
                <TouchableOpacity onPress={logout}>
                    <Text style={{ fontSize: 26, color: "#03989F", fontWeight: "700" }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default LoggedIn;