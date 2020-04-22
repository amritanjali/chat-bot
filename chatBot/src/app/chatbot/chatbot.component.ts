import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChatbotService } from '../service/chatbot.service'

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  @ViewChild('res', { static: true }) res: ElementRef;
  @ViewChild('bot', { static: true }) bot: ElementRef;
  public mesgTyping ;
  public msgTextUser;
  public in;
  public chatBotResponse;
  public botResponse
  public chatError
  public messageArray =[];
  public botImage ="../../assets/chatbot.jpg";
  public userImage ="../../assets/user.png"
  constructor(private chatService: ChatbotService, private renderer: Renderer2) { }

  ngOnInit() {
    // this.chatbotService()
  }
  keepMessage(messageData, whoSays, typing) {
    let messageobj= {};
    this.mesgTyping = typing
    messageobj['says'] = whoSays;
    messageobj['message'] = messageData;
    this.messageArray.push(messageobj);
  }
  send(ins) {
    // const p: HTMLParagraphElement = this.renderer.createElement('div');
    // p.innerHTML = ins
    // this.renderer.appendChild(this.res.nativeElement, p)
    this.msgTextUser =ins
    this.keepMessage(ins, "userSays", true)
   
    this.chatbotService()

  }

  chatbotService() {
    this.chatService.chatbotResponse(this.msgTextUser).subscribe((data) => {
      this.chatBotResponse = data;
      this.botResponse = this.chatBotResponse.out
      this.keepMessage( this.botResponse, "botSays", false)
      // this.mesgTyping = false
      // const p: HTMLParagraphElement = this.renderer.createElement('div');
      // p.innerHTML = this.botResponse
      // this.renderer.appendChild(this.bot.nativeElement, p)

      if ((this.botResponse == null) || (this.botResponse == "")) {
        console.log((this.botResponse == null) || (this.botResponse == ""))
        return false;
      }
      else {
        this.botResponse = this.botResponse.replace(/(<([^>]+)>)/ig, '')
        console.log(this.botResponse.replace(/(<([^>]+)>)/ig, ''))
        return this.botResponse
      }
    },
      (error) => {
        console.log("error===" + error.error.err)
        console.log("error===" + error.error.message)
        if ((error.error.err) == null || (error.error.err = undefined)) {

          this.chatError = "ohh!! sorry try again Please"
        }
      })

  }
}
