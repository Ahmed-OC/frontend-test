import { Message } from "../types/message";

const BASE_URL = process.env.API_BASE_URL;

export const getMessagesByConversationId = async (
  conversationId: number,
  token: string
): Promise<Message[]> => {
  try {
    const response = await fetch(`${BASE_URL}/messages/${conversationId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          }
        });
    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    throw error;
  }
};

export const addMessageInConversation = async ({
  conversationId,
  messageBody,
  timestamp,
  token
}: {
  conversationId: number;
  messageBody: string;
  timestamp: number;
  token: string;
}) => {
  try {
    const response = await fetch(`${BASE_URL}/messages/${conversationId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ body: messageBody, timestamp }),
    });

    if (!response.ok) {
      throw new Error("Failed to add message");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding message:", error.message);
    throw error;
  }
};

export const deleteMessage = async (messageId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/message/${messageId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete message");
    }
  } catch (error) {
    console.error("Error deleting message:", error.message);
    throw error;
  }
};
