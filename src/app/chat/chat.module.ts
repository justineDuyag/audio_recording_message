import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NativeAudio,
    ChatPageRoutingModule
  ],

  declarations: [ChatPage]
})
export class ChatPageModule {}
