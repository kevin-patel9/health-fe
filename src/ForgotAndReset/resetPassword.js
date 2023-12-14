import {
View,
Text,
SafeAreaView,
StyleSheet,
TextInput,
TouchableOpacity,
Image,
ScrollView,
Modal,
} from "react-native";
import { updatePasswordEmail, updatePasswordPhone } from "../../API/LoginAuth";
import { useState } from "react";

const ResetPasswordPage = ({ navigation, route }) => {
const { email, phoneNumber } = route.params;

const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [modalVisible, setModalVisible] = useState(false);

const callResetApi = async () => {
    if (newPassword.length < 6) {
        setError("Password length should be greater than 6");
        return;
    }

    if (email){
        const response = await updatePasswordEmail(
            email,
            newPassword,
            confirmPassword
        );
        if (response?.success) {
            setModalVisible(true);
        }else{
            setError(response?.message)
        }
    }else if (phoneNumber){
        const response = await updatePasswordPhone(
            phoneNumber,
            newPassword,
            confirmPassword
        );
        if (response?.success) {
            setModalVisible(true);
        }else{
            setError(response?.message)
        }
    }


};

const goToLoginPage = () => {
    navigation.navigate("login");
}

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
            <Text
                style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}
            >
                Reset Password
            </Text>
            <Text style={{ textAlign: "center", marginTop: 10 }}>
                Please reset your password.
            </Text>
            <View style={{ marginTop: 24 }}>
                <Text>New Password</Text>
                    <TextInput 
                        keyboardType="default"
                        style={styles.inputBox}
                        maxLength={20}
                        onChangeText={(text) => setNewPassword(text)}
                    />
            </View>
            <View style={{ marginTop: 24 }}>
                <Text>Confirm Password</Text>
                    <TextInput 
                        keyboardType="default"
                        style={styles.inputBox}
                        maxLength={20}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
            </View>
            {error && (
                <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
                {error}
                </Text>
            )}
            <TouchableOpacity onPress={callResetApi} style={styles.btnContainer}>
                <Text style={styles.btnText}>Reset</Text>
            </TouchableOpacity>
            </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image 
                                source={require("../../assets/logo/successImg.png")}
                                style={{ marginBottom: 20 }}
                            />
                            <Text style={styles.modalHeaderText}>
                                Your Password has been Reset Successfully!
                            </Text>
                            <TouchableOpacity onPress={goToLoginPage} style={styles.modalBtn}>
                                <Text style={{ color: "white" }}>Okay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            <View>
            <Text
                style={[
                styles.extraDetailText,
                { fontWeight: "700", marginBottom: 6 },
                ]}
            >
                We are happy to help you.
            </Text>
            <Text style={styles.extraDetailText}>
                If you are having trouble or cannot login, contact : 8928001617{" "}
            </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
);
};

export default ResetPasswordPage;

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
    marginHorizontal: 24,
    top: -90,
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
    paddingHorizontal: 90,
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
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
successBox: {
    backgroundColor: "white",
    paddingTop: 30,
    paddingBottom: 40,
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    borderRadius: 10,
},
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
},
modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 64,
    alignItems: "center",
},
modalBtn: {
    marginTop: 20,
    backgroundColor: "#03989F",
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 40
},
modalHeaderText: {
    textAlign: "center",
    fontWeight: "700"
}
});
