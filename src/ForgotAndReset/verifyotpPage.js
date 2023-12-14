import {
View,
Text,
SafeAreaView,
StyleSheet,
TouchableOpacity,
Image,
ScrollView,
} from "react-native";
import { verifyEmail } from "../../API/LoginAuth";
import { useRef, useState } from "react";
import OTPTextInput from "react-native-otp-textinput";

const VerifyOTP = ({ navigation, route }) => {
const { email } = route?.params;

const [error, setError] = useState("");
const [otpInput, setOtpInput] = useState("");
let otpInputRef = useRef(null);

const callVerifyOTP = async () => {
    if (otpInput <= 4) {
        setError("Added OTP");
    }

    const response = await verifyEmail(email, otpInput);

    if (response?.success) {
        navigation.navigate("resetPassword", { email });
    } else {
        setError(response?.message);
    }
};

return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
        <View style={styles.logoBGContainer}>
        <Image
        source={require("../../assets/logo/short-logo.png")}
        style={{ alignSelf: "center", top: 60 }}
        />
    </View>
    <View style={styles.registerContainer}>
        <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Let’s verify your Email
        </Text>
        <Text style={{ textAlign: "center", marginTop: 10 }}>
        We have sent an email with a code to{" "}
        <Text style={{ fontWeight: "700" }}>{email}</Text>
        </Text>
        <View style={{ marginTop: 24 }}>
        <OTPTextInput
            ref={otpInputRef}
                containerStyle={{
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 40,
            }}
            handleTextChange={(text) => {
                setOtpInput(text);
            }}
            inputCount={4}
            textInputStyle={{ width: 26, marginHorizontal: 6 }}
        />
        </View>
        {error && (
        <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
            {error}
        </Text>
        )}
        <TouchableOpacity style={styles.btnContainer} onPress={callVerifyOTP}>
            <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>
        <View
        style={{
            alignSelf: "center",
            marginVertical: 10,
            flexDirection: "row",
            marginBottom: 50,
        }}
        >
        <Text style={{ fontWeight: "700", marginEnd: 4 }}>Go back to</Text>
        <TouchableOpacity>
            <Text style={{ color: "#03989F", fontWeight: "700" }}>Login</Text>
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

export default VerifyOTP;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "white",
},
logoBGContainer: {
    backgroundColor: "#03989F",
    height: "50%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
},
registerContainer: {
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 16,
    top: -60,
    marginHorizontal: 24,
    padding: 16,
},
checkBoxText: {
    fontSize: 12,
    fontFamily: "Roboto",
    marginLeft: 6,
},
extraDetailText: {
    textAlign: "center",
},
btnContainer: {
    backgroundColor: "#03989F",
    paddingHorizontal: 90,
    paddingVertical: 12,
    marginTop: 20,
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
