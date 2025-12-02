import { Image, View, Text, StyleSheet } from "react-native";
import { cardLogos } from "./cardLogos";

export default function CreditCard({ cardNumber, cardName, expiry, cvv, cardType }) {
  return (
    <View style={styles.card}>

      {/* Logo (Visa, Mastercard, etc.) */}
      <Image source={cardLogos[cardType]} style={styles.logo} />

      {/* Chip */}
      <Image source={require("./assets/chip.png")} style={styles.chip} />

      {/* Card Number */}
      <Text style={styles.cardNumber}>{cardNumber}</Text>

      {/* Bottom Row: Name + Expiry */}
      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.label}>Card Holder</Text>
          <Text style={styles.name}>{cardName || "FULL NAME"}</Text>
        </View>

        <View>
          <Text style={styles.label}>Expires</Text>
          <Text style={styles.expiry}>{expiry || "MM/YY"}</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 210,
    borderRadius: 18,
    padding: 20,
    backgroundColor: "#1a1f3c",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },

  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
    alignSelf: "flex-end",
  },

  chip: {
    width: 50,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
  },

  cardNumber: {
    fontSize: 22,
    color: "white",
    letterSpacing: 2,
    marginTop: 10,
  },

  label: {
    color: "#ccc",
    fontSize: 10,
    marginBottom: 3,
  },

  name: {
    color: "white",
    fontSize: 14,
  },

  expiry: {
    color: "white",
    fontSize: 14,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center",
  },
});
