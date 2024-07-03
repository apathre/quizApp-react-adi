// src/services/GoogleSheetsService.js
import axios from 'axios';

const GOOGLE_SHEETS_API_URL = 'YOUR_GOOGLE_SHEETS_API_URL';

const fetchQuizzesFromGoogleSheets = async () => {
  try {
    const response = await axios.get(GOOGLE_SHEETS_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return [];
  }
};

export { fetchQuizzesFromGoogleSheets };
