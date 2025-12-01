export function formatCardNumber(raw) {
  const digits = raw.replace(/\D/g, "");

  // AmEx (15 digits)
  if (/^(34|37)/.test(digits)) {
    const masked = digits.padEnd(15, "#");
    return `${masked.slice(0,4)} ${masked.slice(4,10)} ${masked.slice(10,15)}`;
  }

  // Default 16-digit cards
  const masked = digits.padEnd(16, "#");
  return `${masked.slice(0,4)} ${masked.slice(4,8)} ${masked.slice(8,12)} ${masked.slice(12,16)}`;
}
