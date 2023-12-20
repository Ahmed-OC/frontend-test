import { Conversation } from "../types/conversation";

const BASE_URL = process.env.API_BASE_URL;

export const getConversationsByUserId = async (
  userId: number,
  token: string
): Promise<Conversation[]> => {
  try {
    const response = await fetch(`${BASE_URL}/conversations/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch conversations");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching conversations:", error.message);
    throw error;
  }
};

export const addConversation = async (
  userId: number,
  recipientId: number,
  token: string
) => {
  try {
    const response = await fetch(`${BASE_URL}/conversations/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ recipientId }),
    });

    if (!response.ok) {
      throw new Error("Failed to add conversation");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding conversation:", error.message);
    throw error;
  }
};

export const deleteConversationById = async (
  conversationId: string,
  token: string
) => {
  try {
    const response = await fetch(`${BASE_URL}/conversation/${conversationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete conversation");
    }
  } catch (error) {
    console.error("Error deleting conversation:", error.message);
    throw error;
  }
};
