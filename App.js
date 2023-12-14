import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/Login/login";
import MainTab from "./src/MainTab/mainTab";
import RegisterPage from "./src/Register/register";
import ForgotPassword from "./src/ForgotAndReset/forgotPassword";
import ResetPasswordPage from "./src/ForgotAndReset/resetPassword";
import VerifyOTP from "./src/ForgotAndReset/verifyotpPage";
import LoggedIn from "./src/LoggedIn/LoggedIn";
import { createContext, useMemo, useReducer } from "react";
import ResetPhoneNumber from "./src/ForgotAndReset/resetPasswordPhone";
import VerifyOTPPhone from "./src/ForgotAndReset/verifyotpPhone";
import PhoneOrEmailPage from "./src/ForgotAndReset/phoneOrEmail";

export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    }
  );

  const authContext = useMemo(
    () => ({
      signIn: async (tokenId) => {
        dispatch({ type: "SIGN_IN", token: tokenId });
      },
      signOut: async () => {
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  const Stack = createNativeStackNavigator();

  if (state?.userToken) {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="loggedIn">
            <Stack.Screen
              name="loggedIn"
              component={LoggedIn}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    )
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="mainTab">
            <Stack.Screen
              name="mainTab"
              component={MainTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="register"
              component={RegisterPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="login"
              component={LoginPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="forgotPasswordEmail"
              component={ForgotPassword}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="resetPassword"
              component={ResetPasswordPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="verifyOTP"
              component={VerifyOTP}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="forgotPasswordPhone"
              component={ResetPhoneNumber}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="verifyOTPPhone"
              component={VerifyOTPPhone}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="phoneOrEmailPage"
              component={PhoneOrEmailPage}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default App;
