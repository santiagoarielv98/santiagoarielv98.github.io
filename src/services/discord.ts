const apiUrl = "https://sv-send-message-discord.vercel.app";

export interface SendMessagePayload {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export async function sendMessage(body: SendMessagePayload) {
  return fetch(`${apiUrl}/api/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
