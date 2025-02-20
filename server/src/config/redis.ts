import { Redis } from "@upstash/redis";

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error('Redis configuration is missing');
}

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
  automaticDeserialization: false // Add this to handle buffers correctly
});

// Test the connection
redis.ping().then(() => {
  console.log('Redis connected successfully');
}).catch((error) => {
  console.error('Redis connection error:', error);
});

export default redis;
