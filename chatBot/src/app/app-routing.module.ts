import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ChatbotComponent} from'./chatbot/chatbot.component'
import { FormsModule } from '@angular/forms';

const routes: Routes = [
{path:'chatbot', component:ChatbotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
