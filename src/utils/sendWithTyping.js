import { delay } from "./delay.js";
import { client } from "../config/whatsappClient.js";

export const sendWithTyping = async (chat, to, message, ms = 2500) => {
  await delay(ms);
  await chat.sendStateTyping();
  await delay(ms);
  await client.sendMessage(to, message);
};