import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screen/login";
import RegisterScreen from "../screen/register";
import DashboardScreen from "../screen/dashboard";
import OnboardingScreen from "../screen/onboarding";
import MateriScreen from "../screen/materi";
import QuizScreen from "../screen/quiz";
import AccScreen from "../screen/account";
import PengenalanPage from "../screen/materiPengenalan";
import CiriPage from "../screen/materiCiriStruktur";
import KebahasaanPage from "../screen/materiKebahasaan";
import MembuatPage from "../screen/materiMembuatTeksProsedur";
import ContohPage from "../screen/contohTeksProsedur";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../screen/context/AuthContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Nav() {
  const { userInfo } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Tab1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Materi"
          component={Tab1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Tab1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Tab1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pengenalan"
          component={PengenalanPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ciri"
          component={CiriPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Kebahasaan"
          component={KebahasaanPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Membuat"
          component={MembuatPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contoh"
          component={ContohPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export function Tab1() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Materi") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Quiz") {
            iconName = focused ? "trophy" : "trophy-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "md-settings" : "md-settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#5970E7",
        tabBarInactiveTintColor: "#F4F3FD",
      })}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Materi"
        component={MateriScreen}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Account"
        component={AccScreen}
        options={{ tabBarLabel: () => null }}
      />
    </Tab.Navigator>
  );
}
