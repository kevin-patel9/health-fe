import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

const PhoneOrEmailPage = ({ navigation }) => {

    const goToLoginPage = () => {
        navigation.navigate("login");
    };

    const goToForgotEmail = async () => {
        navigation.navigate("forgotPasswordEmail")
    }

    const goToForgotPhoneNumber = async () => {
        navigation.navigate("forgotPasswordPhone")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoBGContainer}>
                <Image source={require("../../assets/logo/short-logo.png")} 
                    style={{ alignSelf: "center", top: 60 }}
                />
            </View>
            <View style={styles.registerContainer}>
                <TouchableOpacity style={styles.btnContainer} onPress={goToForgotPhoneNumber}>
                    <Text style={styles.btnText}>Reset Password With Phone Number</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={goToForgotEmail}>
                    <Text style={styles.btnText}>Reset Password With Email</Text>
                </TouchableOpacity>
                
                <View style={{ alignSelf: "center", marginVertical: 10, flexDirection: "row", marginBottom: 50 }}>
                    <Text style={{ fontWeight: "700", marginEnd: 4 }}>Go back to</Text>
                    <TouchableOpacity onPress={goToLoginPage}>
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

export default PhoneOrEmailPage;

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
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: "center"
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center"
    },
    PhoneOrEmailPageBtn: {
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