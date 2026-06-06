// backend/services/aiEngine.js

const calculatePriority = (complaintData) => {
    const { severity, safetyRisk, studentsAffected, hoursSinceFiling } = complaintData;
    
    // Normalize values to a 1-10 scale
    const normSeverity = Math.min(severity, 10);
    const normSafety = Math.min(safetyRisk, 10);
    const normAffected = Math.min(studentsAffected, 10);
    const normAge = Math.min(hoursSinceFiling / 2, 10); // 20 hours = max score 10

    // Apply the algorithm
    const score = (normSeverity * 0.40) + (normSafety * 0.30) + (normAffected * 0.20) + (normAge * 0.10);

    let priorityLevel = 'Low';
    if (score >= 8) priorityLevel = 'Critical';
    else if (score >= 6) priorityLevel = 'High';
    else if (score >= 4) priorityLevel = 'Medium';

    return {
        score: score.toFixed(2),
        level: priorityLevel,
        aiExplanation: `Scored ${score.toFixed(2)}/10 based on high safety risk (${safetyRisk}/10) and ${studentsAffected} affected students.`
    };
};

module.exports = { calculatePriority };