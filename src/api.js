import axios from 'axios';

const BASE_URL = 'https://feedback-form-api-production.up.railway.app';

export const sendMessage = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/feedback`
    );
    return response.data;
  } catch {
    Promise.reject(new Error('Not Found'));
  }
};