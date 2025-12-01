import { Image, View, Text, StyleSheet } from "react-native";
import { cardLogos } from "../cardLogos";

export default function CreditCard({ cardNumber, cardType }) {
  return (
    <View style={styles.card}>
      <Image source={cardLogos[cardType]} style={styles.logo} />

      <Text style={styles.cardNumber}>{cardNumber}</Text>

      {/* chip image */}
      <Image source={require("../assets/cards/chip.png")} style={styles.chip} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 200,
    borderRadius: 16,
    padding: 20,
    backgroundColor: "#1a1f3c",
  },
  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
    alignSelf: "flex-end",
  },
  chip: {
    width: 40,
    height: 30,
    marginTop: 20,
  },
  cardNumber: {
    fontSize: 22,
    color: "white",
    letterSpacing: 2,
    marginTop: 20,
  },
});
