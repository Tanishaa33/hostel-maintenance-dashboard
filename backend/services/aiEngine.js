// services/aiEngine.js

/**
 * AI-based complaint priority detection
 * (Simple keyword-based implementation)
 */

const getPriority = (text = "") => {
  const complaint = text.toLowerCase().trim();

  // Critical Priority
  if (
    complaint.includes("fire") ||
    complaint.includes("smoke") ||
    complaint.includes("gas leak") ||
    complaint.includes("explosion") ||
    complaint.includes("short circuit") ||
    complaint.includes("electric shock")
  ) {
    return "Critical";
  }

  // High Priority
  if (
    complaint.includes("electric") ||
    complaint.includes("power") ||
    complaint.includes("wire") ||
    complaint.includes("sparking") ||
    complaint.includes("fan not working") ||
    complaint.includes("ceiling fan") ||
    complaint.includes("lift") ||
    complaint.includes("elevator")
  ) {
    return "High";
  }

  // Medium Priority
  if (
    complaint.includes("water") ||
    complaint.includes("leak") ||
    complaint.includes("tap") ||
    complaint.includes("pipe") ||
    complaint.includes("washroom") ||
    complaint.includes("bathroom") ||
    complaint.includes("toilet") ||
    complaint.includes("wifi") ||
    complaint.includes("internet") ||
    complaint.includes("network") ||
    complaint.includes("ac") ||
    complaint.includes("cooler")
  ) {
    return "Medium";
  }

  // Low Priority
  return "Low";
};

export default getPriority;