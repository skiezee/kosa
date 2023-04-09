import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "192.168.1.8:3000";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if there is a user info in AsyncStorage when the component mounts
    AsyncStorage.getItem("userInfo").then((userInfoString) => {
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        setUserInfo(userInfo);
      }
    });
  }, []);

  const register = (username, email, password) => {
    setIsLoading(true);
    axios
      .post(`http://${baseURL}/auth/register`, {
        username,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`gagal melakukan register ${e}`);
        setIsLoading(false);
        if (e.response) {
          console.log(e.response.data);
        } else if (e.request) {
          console.log(e.request);
        } else {
          console.log("Error", e.message);
        }
      });
  };

  const login = async (email, password) => {
    setIsLoading(true);
    console.log(email, password);

    try {
      const res = await axios.post(`http://${baseURL}/auth/login`, {
        email,
        password,
      });
      let userInfo = res.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      setIsLoading(false);
      return userInfo;
    } catch (e) {
      console.log(`login error ${e}`);
      setIsLoading(false);
      throw e; // melemparkan error agar bisa ditangkap oleh try-catch di tempat lain
    }
  };

  const logout = async () => {
    try {
      const token = userInfo.data?.token;

      // Call API endpoint to logout
      await axios.post(`http://${baseURL}/auth/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear user info from state and AsyncStorage
      setUserInfo(null);
      AsyncStorage.removeItem("userInfo");
    } catch (e) {
      console.log(`logout error ${e}`);
      throw e;
    }
  };



  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
