import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  StatusBar,
  FlatList,
} from "react-native";
import axios from "axios";

export default function QuizPengenalanTeksProsedur({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  // untuk mengatur waktu dalam pengerjaan quiz
  const [timeLeft, setTimeLeft] = useState(1200); // set timer to 20 minutes (1200 seconds)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigation.navigate("Dashboard");
    }
  }, [timeLeft, navigation]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const resetQuiz = () => {
    setCurrentQuestion(1);
    setTimeLeft(20);
  };
  // untuk mengatur waktu dalam pengerjaan quiz

  // untuk selected jawaban
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };
  // untuk selected jawaban

  // untuk melakukan next pertanyaan
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  // untuk melakukan next pertanyaan

  // get quiz
  const [quizData, setQuizData] = useState([]);
  const [nilai, setNilai] = useState(0);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch("http://192.168.18.10:3000/quiz");
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuizData();
  }, []);

  const postMateri = async (answer) => {
    return await axios
      .post(`http://192.168.18.10:3000/jobsheet/one`, {
        id: currentQuestion,
        answer: answer,
      })
      .then((response) => {
        console.log(response);
        return response.data.message;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //button handle function
  const handleButton = async (answer) => {
    const response = await postMateri(answer);
    setCurrentQuestion(currentQuestion + 1);
    if (response === "benar") {
      setNilai(nilai + 1);
    }
  };

  console.log(currentQuestion);

  const value = quizData.quiz?.find((v) => v.id === Number(currentQuestion));
  // get quiz

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <StatusBar backgroundColor="#131313" barStyle="dark-content" />
        <View style={{ margin: 24 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#131313",
              fontWeight: "500",
              fontSize: 18,
            }}
          >
            Quiz 1 Teks Prosedur
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#A5A5A5",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            Pengenalan Tesk Prosedur
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 36,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={{
                    color: "#A5A5A5",
                    fontWeight: "400",
                    fontSize: 12,
                  }}
                >
                  Soal
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#F3F3F3",
                  marginLeft: 12,
                  width: 64,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>{currentQuestion}/10</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={{
                    color: "#A5A5A5",
                    fontWeight: "400",
                    fontSize: 12,
                  }}
                >
                  Sisa Waktu
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#F3F3F3",
                  marginLeft: 12,
                  width: 64,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#5970E7" }}>{`${
                  minutes < 10 ? "0" + minutes : minutes
                } : ${seconds < 10 ? "0" + seconds : seconds}`}</Text>
              </View>
            </View>
          </View>
          {/* button*/}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                borderColor: "#5970E7",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 12,
                flex: 0.48,
              }}
              onPress={() => previousQuestion()}
              disabled={currentQuestion === 1}
            >
              <Text
                style={{
                  margin: 8,
                  color: "#5970E7",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Sebelumnya
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#5970E7",
                borderRadius: 10,
                marginTop: 12,
                flex: 0.48,
              }}
              onPress={() => {
                currentQuestion == 10
                  ? navigation.navigate("Review", { numero: nilai })
                  : setCurrentQuestion(currentQuestion + 1);
              }}
            >
              <Text
                style={{
                  margin: 8,
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Selanjutnya
              </Text>
            </TouchableOpacity>
          </View>
          {/* button */}

          {/* pertanyaan 1*/}
          <View
            style={{
              borderColor: "#1313130A",
              borderWidth: 1,
              marginTop: 16,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "justify",
                lineHeight: 21,
                color: "#A5A5A5",
                fontSize: 12,
                fontWeight: "400",
                marginTop: 4,
                margin: 16,
              }}
            >
              {value?.question}
              {/* <Text
                style={{ color: "#131313", fontSize: 12, fontWeight: "400" }}
              >
                Yang termasuk konjungsi perlawanan adalah ....
              </Text> */}
            </Text>
          </View>
          {/* pertanyaan 1*/}

          {/* jawaban jawaban */}
          <View style={{ marginTop: 24 }}>
            {/* jawaban A */}
            <TouchableOpacity
              style={{
                borderColor: selectedAnswer === "a" ? "#5970E7" : "#1313130A",
                borderWidth: 1,
                borderRadius: 10,
              }}
              onPress={() => handleSelectAnswer("a")}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#5970E7",
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "500", fontSize: 14 }}
                  >
                    A
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#A5A5A5",
                    fontWeight: "400",
                    fontSize: 12,
                    textAlign: "justify",
                    marginLeft: 12,
                  }}
                >
                  {value?.a}
                </Text>
              </View>
            </TouchableOpacity>
            {/* jawaban A */}

            {/* jawaban B */}
            <TouchableOpacity
              style={{
                borderColor: selectedAnswer === "b" ? "#5970E7" : "#1313130A",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 16,
              }}
              onPress={() => handleSelectAnswer("b")}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#5970E7",
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "500", fontSize: 14 }}
                  >
                    B
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#A5A5A5",
                    fontWeight: "400",
                    fontSize: 12,
                    textAlign: "justify",
                    marginLeft: 12,
                  }}
                >
                  {value?.b}
                </Text>
              </View>
            </TouchableOpacity>
            {/* jawaban B */}

            {/* jawaban C */}
            <TouchableOpacity
              style={{
                borderColor: selectedAnswer === "c" ? "#5970E7" : "#1313130A",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 16,
              }}
              onPress={() => handleSelectAnswer("c")}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#5970E7",
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "500", fontSize: 14 }}
                  >
                    C
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#A5A5A5",
                    fontWeight: "400",
                    fontSize: 12,
                    textAlign: "justify",
                    marginLeft: 12,
                  }}
                >
                  {value?.c}
                </Text>
              </View>
            </TouchableOpacity>
            {/* jawaban C */}

            {/* jawaban D */}
            <TouchableOpacity
              style={{
                borderColor: selectedAnswer === "d" ? "#5970E7" : "#1313130A",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 16,
              }}
              onPress={() => handleSelectAnswer("d")}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#5970E7",
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "500", fontSize: 14 }}
                  >
                    D
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#A5A5A5",
                    fontWeight: "400",
                    fontSize: 12,
                    textAlign: "justify",
                    marginLeft: 12,
                  }}
                >
                  {value?.d}
                </Text>
              </View>
            </TouchableOpacity>
            {/* jawaban D */}

            {/* jawaban E */}
            <TouchableOpacity
              style={{
                borderColor: selectedAnswer === "e" ? "#5970E7" : "#1313130A",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 16,
              }}
              onPress={() => handleSelectAnswer("e")}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#5970E7",
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "500", fontSize: 14 }}
                  >
                    E
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#A5A5A5",
                    fontWeight: "400",
                    fontSize: 12,
                    textAlign: "justify",
                    marginLeft: 12,
                  }}
                >
                  {value?.e}
                </Text>
              </View>
            </TouchableOpacity>
            {/* jawaban E */}
          </View>
          {/* jawaban jawaban */}
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 24,
  },
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    backgroundColor: "#FFFFFF",
  },
});
