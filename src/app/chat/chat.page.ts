
import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Platform } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';

const MEDIA_FOLDER_NAME = 'final';

  @Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
  })
  export class ChatPage implements OnInit {
    messages: any[];
    messageInput: string;
    isFocus: boolean;
    files = [];

    constructor(private mediaCapture: MediaCapture,
      private file: File,
      private media: Media,
      private plt: Platform) { }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }


  toggleFocus(isFocus: boolean) {
    this.isFocus = isFocus;
  }

  nl2br(text: string) {
    if (!text) {return text;}

    return text.replace(/\n/ig, '<br>');
  }



  }



