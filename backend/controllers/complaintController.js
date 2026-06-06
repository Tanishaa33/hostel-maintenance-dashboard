const createComplaint = async (req, res) => {
  res.json({
    message: "Complaint created",
  });
};

const getComplaints = async (req, res) => {
  res.json([
    {
      title: "Fan not working",
      priority: "Medium",
    },
  ]);
};

module.exports = {
  createComplaint,
  getComplaints,
};