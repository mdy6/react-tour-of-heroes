import { injected } from "brandi";

export class MessageService implements LoggerService {
    messages: string[] = [];
  
    add(message: string) {
      this.messages.push(message);
    }
  
    clear() {
      this.messages = [];
    }
  }


export interface LoggerService{
    add(message: string):void;
    clear(): void;
}
injected(MessageService);