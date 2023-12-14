import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { sendOTPApi } from "../../API/LoginAuth";
import { useState } from "react";

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const goToRegisterPage = () => {
        navigation.navigate("register");
    };

    const callForgotPassword = async () => {
        const response = await sendOTPApi(email);

        if (response?.success){
            navigation.navigate("verifyOTP", {email});
        }else{
            setError(response?.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoBGContainer}>
                <Image source={require("../../assets/logo/short-logo.png")} 
                    style={{ alignSelf: "center", top: 60 }}
                />
            </View>
            <View style={styles.registerContainer}>
                <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>Forgot Password</Text>
                <Text style={{ textAlign: "center", marginTop: 10 }}>Please enter your email address below.</Text>
                <View style={{ marginTop: 24 }}>
                    <Text>Email</Text>
                    <TextInput
                        keyboardType="email-address"
                        style={styles.inputBox}
                        onChangeText={(text) => {
                            setEmail(text);
                            setError("");
                        }}
                    />
                </View>
                {error && <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>{error}</Text>}
                <TouchableOpacity style={styles.btnContainer} onPress={callForgotPassword}>
                    <Text style={styles.btnText}>Send OTP</Text>
                </TouchableOpacity>
                <View style={{ alignSelf: "center", marginVertical: 10, flexDirection: "row", marginBottom: 50 }}>
                    <Text style={{ fontWeight: "700", marginEnd: 4 }}>Go back to</Text>
                    <TouchableOpacity onPress={goToRegisterPage}>
                        <Text style={{ color: "#03989F", fontWeight: "700" }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.extraDetailText}>If you are having trouble or cannot login, contact : 8928001617 </Text>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    logoBGContainer: {
        backgroundColor: "#03989F", 
        height: "36%",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80
    },
    registerContainer: {
        backgroundColor: "white", 
        elevation: 2, 
        borderRadius: 16,
        marginHorizontal: 24,
        top: -90,
        padding: 16
    },
    checkBoxText: {
        fontSize: 12,
        fontFamily: "Roboto",
        marginLeft: 6,
    },
    extraDetailText: {
        textAlign: "center",
        top: -40
    },
    btnContainer: {
        backgroundColor: "#03989F",
        paddingHorizontal: 90,
        paddingVertical: 12,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: "center"
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700"
    },
    forgotPasswordBtn: {
        textAlign: "right", 
        color: "#03989F", 
        fontWeight: "600", 
        marginTop: 6
    },
    inputBox: {
        borderWidth: .6, 
        paddingVertical: 9, 
        marginTop: 8, 
        paddingHorizontal: 10,
        borderRadius: 8
    }
})