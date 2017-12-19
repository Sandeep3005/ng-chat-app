export interface ChatMessage {
  msgId ?: string;
  email ?: string;
  username : string;
  message  : string;
  timeSent : string;
  fromMe ?: boolean;
}