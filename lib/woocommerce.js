// import axios from "axios";

// const wcApi = axios.create({
//       baseURL: process.env.WC_API_URL,
//       auth: {
//             username: process.env.WC_CONSUMER_KEY,
//             password: process.env.WC_CONSUMER_SECRET,
//       },
// });

// export const getProducts = async () => {
//       try {
//             const res = await wcApi.get('/products');
//             return res.data;
//       } catch (error) {
//             console.log('kunder ej hämta produkter', error);
//             return [];
//       }
// };

// lib/woocommerce.js
import axios from 'axios';

const wcApi = axios.create({
  baseURL: process.env.WC_API_URL,
  auth: {
    username: process.env.WC_CONSUMER_KEY,
    password: process.env.WC_CONSUMER_SECRET,
  },
});

export const getProducts = async () => {
  try {
    console.log('👉 BaseURL:', process.env.WC_API_URL);
    console.log('👉 Consumer Key:', process.env.WC_CONSUMER_KEY?.slice(0, 6) + '...');
    console.log('👉 Consumer Secret:', process.env.WC_CONSUMER_SECRET?.slice(0, 6) + '...');

    const res = await wcApi.get('/products');
    return res.data;
  } catch (error) {
    console.error('❌ Kunde ej hämta produkter:', error.message);
    if (error.response) {
      console.error('🛑 Status:', error.response.status);
      console.error('🧾 Headers:', error.response.headers);
      console.error('📄 Response data:', error.response.data);
    }
    return [];
  }
};
