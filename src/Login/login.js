import Checkbox from "expo-checkbox";
import { useContext, useState } from "react";
import {
View,
Text,
SafeAreaView,
StyleSheet,
TextInput,
TouchableOpacity,
Image,
ScrollView,
} from "react-native";
import { loginEmail } from "../../API/LoginAuth";
import { AuthContext } from "../../App";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisible";

const LoginPage = ({ navigation }) => {
const [policyCheckBox, setPolicyCheckBox] = useState(false);
const [whatsappCheckBox, setWhatsappCheckBox] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const { signIn } = useContext(AuthContext);

const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

const goToRegisterPage = () => {
    navigation.navigate("register");
};

const goToForgotPage = () => {
    navigation.navigate("phoneOrEmailPage");
};

const login = async () => {
    if (!policyCheckBox){
        setError("Accept the terms & condition");
        return;
    }

    const response = await loginEmail(email, password);

    if (response?.success) {
        signIn(response?.token);
    }else{
        setError(response?.message);
    }
};

return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
            <View style={styles.logoBGContainer}>
            <Image
                source={require("../../assets/logo/short-logo.png")}
                style={{ alignSelf: "center", top: 60 }}
            />
            </View>
            <View style={styles.registerContainer}>
            <Text style={{ fontSize: 32, fontWeight: "700" }}>Hello!</Text>
            <Text>Enter the information below</Text>
            <View style={{ marginTop: 24 }}>
                <Text>Email</Text>
                <TextInput
                keyboardType="email-address"
                style={styles.inputBox}
                onChangeText={(text) => {
                    setError("")
                    setEmail(text)}
                }
                />
            </View>
            <View style={{ marginTop: 24 }}>
                <Text>Password</Text>
                <TextInput
                keyboardType="default"
                style={styles.inputBox}
                onChangeText={(text) => {
                        setError("")
                        setPassword(text)
                    }}
                secureTextEntry={passwordVisibility}
                />
            </View>
            {error && <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>{error}</Text>}
            <TouchableOpacity onPress={goToForgotPage}>
                <Text style={styles.forgotPasswordBtn}>Forgot Password</Text>
            </TouchableOpacity>
            <View style={{ marginVertical: 18 }}>
                <View style={{ flexDirection: "row", marginTop: 6 }}>
                <Checkbox
                    style={{ borderRadius: 4 }}
                    value={policyCheckBox}
                    onValueChange={() => {
                        setError("");
                        setPolicyCheckBox((prev) => !prev);
                    }}
                />
                <Text style={styles.checkBoxText}>
                    I accept the
                </Text>
                <Text style={{ color: "#03989F", fontSize: 12, marginLeft: 3 }}>Terms & Conditions*</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 6 }}>
                <Checkbox
                    style={{ borderRadius: 4 }}
                    value={whatsappCheckBox}
                    onValueChange={() => {
                        setWhatsappCheckBox((prev) => !prev);
                    }}
                />
                <Text style={styles.checkBoxText}>
                    Receive updates and reminders on
                </Text>
                </View>
            </View>
            <TouchableOpacity onPress={login} style={styles.btnContainer}>
                <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
                <View
                    style={{
                    alignSelf: "center",
                    marginVertical: 10,
                    flexDirection: "row",
                    }}
                >
                    <Text style={{ fontWeight: "700", marginEnd: 4 }}>New User?</Text>
                    <TouchableOpacity onPress={goToRegisterPage}>
                    <Text style={{ color: "#03989F", fontWeight: "700" }}>
                        Register
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.extraDetailText}>
                    If you are having trouble or cannot login, contact : 8928001617{" "}
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
);
};

export default LoginPage;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "white",
},
logoBGContainer: {
    backgroundColor: "#03989F",
    height: "36%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
},
registerContainer: {
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 16,
    marginHorizontal: 24,
    top: -60,
    padding: 16,
},
checkBoxText: {
    fontSize: 12,
    fontFamily: "Roboto",
    marginLeft: 6,
},
extraDetailText: {
    textAlign: "center",
    top: -40,
},
btnContainer: {
    backgroundColor: "#03989F",
    paddingHorizontal: 84,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: "center",
},
btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
},
forgotPasswordBtn: {
    textAlign: "right",
    color: "#03989F",
    fontWeight: "600",
    marginTop: 6,
},
inputBox: {
    borderWidth: 0.6,
    paddingVertical: 9,
    marginTop: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
},
});
