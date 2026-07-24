export const getHealthStatus = (req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'RLRP Organization API Server',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
};
