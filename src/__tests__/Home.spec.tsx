import { getStaticProps } from "../pages";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { getUserById } from "../api/users";
import { getConversationsByUserId } from "../api/conversations";

jest.mock("../utils/getLoggedUserId");
jest.mock("../api/users");
jest.mock("../api/conversations");

describe("getStaticProps", () => {
  it("should fetch user, conversations, and userId correctly", async () => {
    const userId = 1;
    const user = { id: 1, name: "Thibault", token: "xxxx", avatar: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" };
    const conversations = [{
        id: 1,
        recipientId: 2,
        recipientNickname: "Jeremie",
        recipientAvatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        senderId: 1,
        senderNickname: "Thibaut",
        senderAvatar: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        lastMessageTimestamp: 1625637849,
        lastMessage:
          "Bonjour c'est le troisième message de la première conversation"
      }];

    (getLoggedUserId as jest.Mock).mockReturnValue(userId);
    (getUserById as jest.Mock).mockResolvedValue([user]);
    (getConversationsByUserId as jest.Mock).mockResolvedValue(conversations);

    const props = await getStaticProps();

    expect(getLoggedUserId).toHaveBeenCalled();
    expect(getUserById).toHaveBeenCalledWith(userId);
    expect(getConversationsByUserId).toHaveBeenCalledWith(userId, user.token);

    expect(props).toEqual({
      props: {
        user: user,
        conversations: conversations,
        userId: userId,
      },
    });
  });
});