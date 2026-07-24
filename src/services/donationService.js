import api from './api';

export const donationService = {
  processDonation: async (donationData) => {
    try {
      const response = await api.post('/donations', donationData);
      return response.data;
    } catch (err) {
      return { success: false, message: 'Donation processing failed' };
    }
  },
};
