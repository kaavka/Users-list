import { User } from '@/types/User';
import axios from 'axios';

const API_BASE_URL = 'http://your-api-base-url';

// Get users list
const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Post a new user
const postUser = async (user: User) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Update an existing user
const updateUser = async (editedUser: Omit<User, 'id'>) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users`, editedUser);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Delete a user
const deleteUser = async (userId: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users`, {
      params: { id: userId },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export { getUsers, postUser, updateUser, deleteUser };
