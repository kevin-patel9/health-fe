import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { registerApi } from "../../API/LoginAuth";

const RegisterPage = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");

    const goToLoginPage = () => {
        navigation.navigate("login");
    };

    const registerUser = async () => {

        if (phoneNumber.length < 10){
            setError("Phone Number length cannot be less than 10");
            return;
        }

        if (password.length < 6){
            setError("Password length cannot be less than 6");
            return;
        }

        if (email.length < 6){
            setError("Email length cannot be less than 6");
            return;
        }

        const data = {
            email,
            phoneNumber,
            password
        }

        const response = await registerApi(data);

        if (response?.success){
            navigation.navigate("login")
        }else{
            setError(response?.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#03989F" barStyle="dark-content" />
            <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
            <View style={styles.logoBGContainer}>
                <Image source={require("../../assets/logo/short-logo.png")} 
                    style={{ alignSelf: "center", top: 60 }}
                />
            </View>
            <View style={styles.registerContainer}>
                <Text style={{ fontSize: 32, fontWeight: "700" }}>Hello!</Text>
                <Text>Start your journey by sharing the information below to unlock a path to success</Text>
                <View style={{ marginTop: 24 }}>
                    <Text>Email</Text>
                    <TextInput 
                        keyboardType="default"
                        style={styles.inputBox}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={{ marginTop: 24 }}>
                    <Text>Phone Number</Text>
                    <TextInput 
                        keyboardType="number-pad"
                        style={styles.inputBox}
                        maxLength={10}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                </View>
                <View style={{ marginVertical: 24 }}>
                    <Text>Password</Text>
                    <TextInput 
                        keyboardType="default"
                        style={styles.inputBox}
                        maxLength={20}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                {error && (
                    <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
                        {error}
                    </Text>
                )}
                <TouchableOpacity onPress={registerUser} style={styles.btnContainer}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
                <View style={{ alignSelf: "center", marginVertical: 10, flexDirection: "row" }}>
                    <Text style={{ fontWeight: "700", marginEnd: 4 }}>Already a client?</Text>
                    <TouchableOpacity onPress={goToLoginPage}>
                        <Text style={{ color: "#03989F", fontWeight: "700" }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={[styles.extraDetailText, { fontWeight: 700 }]}>We are happy to help you.</Text>
                <Text style={styles.extraDetailText}>If you are having trouble or cannot login, Kindly contact : 8928001617 </Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterPage;

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
        textAlign: "center"
    },
    btnContainer: {
        backgroundColor: "#03989F",
        paddingHorizontal: 84,
        paddingVertical: 12,
        borderRadius: 10,
        alignSelf: "center"
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700"
    },
    inputBox: {
        borderWidth: .6, 
        paddingVertical: 9, 
        marginTop: 8, 
        paddingHorizontal: 10,
        borderRadius: 8
    }
})