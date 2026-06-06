// backend/models/Complaint.js
const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['Electrical', 'Plumbing', 'Internet', 'Furniture', 'Sanitation', 'Security', 'Others'],
        required: true 
    },
    location: {
        block: String,
        roomNumber: String
    },
    imageUrls: [String],
    aiMetrics: {
        severityScore: Number,
        safetyRiskScore: Number,
        studentsAffected: Number,
        priorityLevel: { type: String, enum: ['Critical', 'High', 'Medium', 'Low'] },
        overallScore: Number,
        aiExplanation: String
    },
    status: { 
        type: String, 
        enum: ['Submitted', 'Under Review', 'Assigned', 'In Progress', 'Resolved'],
        default: 'Submitted'
    },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    notes: Stri,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);