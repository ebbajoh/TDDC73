import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import CreditCard from "./CreditCard";
import { detectCardType } from "./cardType";
import { formatCardNumber } from "./formatCardNumber"; // skapa denna om du inte gjort det redan

export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const cardType = detectCardType(cardNumber);
  const maskedNumber = formatCardNumber(cardNumber);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* CREDIT CARD AT THE TOP */}
        <View style={styles.cardWrapper}>
          <CreditCard
            cardNumber={maskedNumber}
            cardName={cardName}
            expiry={`${expiryMonth}/${expiryYear}`}
            cvv={cvv}
            cardType={cardType}
          />
        </View>

        {/* FORM BELOW */}
        <View style={styles.form}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            maxLength={19}
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
          />

          <Text style={styles.label}>Cardholder Name</Text>
          <TextInput
            placeholder="Your Name"
            style={styles.input}
            value={cardName}
            onChangeText={setCardName}
          />

          <Text style={styles.label}>Expiration</Text>
          <View style={styles.row}>
            <TextInput
              placeholder="MM"
              keyboardType="numeric"
              maxLength={2}
              style={[styles.input, styles.smallInput]}
              value={expiryMonth}
              onChangeText={setExpiryMonth}
            />
            <TextInput
              placeholder="YY"
              keyboardType="numeric"
              maxLength={2}
              style={[styles.input, styles.smallInput]}
              value={expiryYear}
              onChangeText={setExpiryYear}
            />
          </View>

          <Text style={styles.label}>CVV</Text>
          <TextInput
            placeholder="***"
            keyboardType="numeric"
            secureTextEntry
            maxLength={4}
            style={[styles.input, styles.smallInput]}
            value={cvv}
            onChangeText={setCvv}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#d9e9ff" },

  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  cardWrapper: {
    marginTop: -20,
    marginBottom: -40,
    zIndex: 2,
  },

  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },

  label: {
    fontSize: 16,
    marginBottom: 6,
    marginTop: 14,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  smallInput: {
    flex: 1,
  },
});
