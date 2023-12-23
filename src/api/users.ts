import { User } from '@/types/User';
import { API_BASE_URL, USERS_ENDPOINT } from '@/utils/constants';
import axios from 'axios';

// Get users list
const getUsers = async () => {
  try {
    const response = await axios.get<User[]>(
      `${API_BASE_URL + USERS_ENDPOINT}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// Post a new user
const postUser = async (user: Omit<User, 'id'>) => {
  try {
    const response = await axios.post<User>(
      `${API_BASE_URL + USERS_ENDPOINT}`,
      user
    );
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Update an existing user
const updateUser = async (editedUser: Omit<User, 'id'>) => {
  console.log(editedUser);
  try {
    const response = await axios.put<User>(
      `${API_BASE_URL + USERS_ENDPOINT}`,
      editedUser
    );
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Delete a user
const deleteUser = async (userId: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL + USERS_ENDPOINT}`, {
      params: { id: userId },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export { getUsers, postUser, updateUser, deleteUser };
