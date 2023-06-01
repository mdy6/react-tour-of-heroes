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

export class ConsoleLogger implements LoggerService{
    add(message: string) {
        console.log(`${message} ${new Date()}`)
      }
    
      clear() {

      }}


export interface LoggerService{
    add(message: string):void;
    clear(): void;
}
injected(ConsoleLogger);
injected(MessageService);