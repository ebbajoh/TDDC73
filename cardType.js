export function detectCardType(number) {
  const n = number.replace(/\D/g, "");

  if (/^4/.test(n)) return "visa";
  if (/^(5[1-5]|2[2-7])/.test(n)) return "mastercard";
  if (/^(34|37)/.test(n)) return "amex";
  if (/^(6011|65)/.test(n)) return "discover";
  if (/^(36)/.test(n)) return "dinersclub";
  if (/^35/.test(n)) return "jcb";
  if (/^9792/.test(n)) return "troy";
  if (/^62/.test(n)) return "unionpay";

  return "unknown";
}
