const getPriority = (text) => {
  const complaint = text.toLowerCase();

  if (
    complaint.includes("fire") ||
    complaint.includes("electric") ||
    complaint.includes("short circuit")
  ) {
    return "High";
  }

  if (
    complaint.includes("water") ||
    complaint.includes("wifi")
  ) {
    return "Medium";
  }

  return "Low";
};

module.exports = getPriority;