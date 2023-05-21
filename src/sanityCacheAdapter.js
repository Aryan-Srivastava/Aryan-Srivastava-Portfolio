import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000, // Cache responses for 15 minutes
});

const sanityCacheAdapter = axios.create({
  adapter: cache.adapter,
});

export default sanityCacheAdapter;
