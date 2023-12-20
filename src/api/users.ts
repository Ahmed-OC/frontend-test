import { User } from "../types/user";

const BASE_URL = process.env.API_BASE_URL;

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

export const getUserById = async (userId: number): Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching user:', error.message);
    throw error;
  }
};