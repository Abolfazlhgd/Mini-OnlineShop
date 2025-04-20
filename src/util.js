export default function formatCurrency(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "0.000$";
  }
  return Number(num.toFixed(3)).toLocaleString() + "$";
}

// This function separates the three-digit added numbers into three digits.
