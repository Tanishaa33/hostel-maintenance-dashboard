import axios from 'axios';

// This is the URL where your teammate's backend server will be running
const API_URL = 'http://localhost:5000/api'; 

export const submitComplaint = async (complaintData) => {
    try {
        const response = await axios.post(`${API_URL}/complaints`, complaintData);
        return response.data;
    } catch (error) {
        console.error("Error submitting complaint:", error);
        throw error;
    }
};

export const fetchComplaints = async () => {
    const response = await axios.get(`${API_URL}/complaints`);
    return response.data;
};