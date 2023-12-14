import { LinearGradient } from "expo-linear-gradient";
import {
    Image,
    StyleSheet,
    SafeAreaView,
    Pressable,
} from "react-native";

const MainTab = ({ navigation }) => {

    const goToLoginPage = () => {
        navigation.navigate("register");
    };

return (
    <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={["#3FBECB", "#088D9A"]} style={styles.container}>
            <Pressable onPress={goToLoginPage}>
                <Image source={require("../../assets/logo/health-logo.png")} />
            </Pressable>
        </LinearGradient>
    </SafeAreaView>
);
};

export default MainTab;

const styles = StyleSheet.create({
container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
},
});
