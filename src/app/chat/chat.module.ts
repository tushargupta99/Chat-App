import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { RouterModule, Routes } from '@angular/router';

import { ChatBoxComponent } from './chat-box/chat-box.component';

const ROUTES: Routes = [
  {path: 'chat-box', component: ChatBoxComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)

  ],
  declarations: [ChatBoxComponent]
})
export class ChatModule { }
