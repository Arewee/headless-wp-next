import axios from 'axios';

const API_URL = 'http://localhost:10134/wp-json/wp/v2';


//! HÄMTA PAGES 
export async function fetchPages() {
      try {
            const res = await axios.get(`${API_URL}/pages`);
            return res.data;
      } catch (error) {
            console.log('Error fetching PAGES:', error);
            return [];
      }
}

//! HÄMTA POSTS 
export async function fetchPosts() {
      try {
            const res = await axios.get(`${API_URL}/posts?_embed`);
            return res.data;
      } catch (error) {
            console.log('Error fetching POSTS:', error);
            return [];
      }
}

//! HÄMTA PAGE - by slug 
export async function fetchPageBySlug(slug) {
      try {
            const res = await axios.get(`${API_URL}/pages?slug=${slug}`);
            return res.data.length > 0 ? res.data[0] : null;
      } catch (error) {
            console.log('Error fetching PAGES by slug:', error);
            return [];
      }
}

//! HÄMTA POST - by slug 
export async function fetchPostBySlug(slug) {
      try {
            const res = await axios.get(`${API_URL}/posts?slug=${slug}&_embed`);
            return res.data.length > 0 ? res.data[0] : null;
      } catch (error) {
            console.log('Error fetching POST by slug:', error);
            return [];
      }
}