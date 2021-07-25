import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Platform } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';

const MEDIA_FOLDER_NAME = 'final';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  files = [];

  constructor(private nativeAudio: NativeAudio,
    private mediaCapture: MediaCapture,
    private file: File,
    private media: Media,
    private plt: Platform) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      const path = this.file.dataDirectory;
      this.file.checkDir(path, MEDIA_FOLDER_NAME).then(
        () => {
          this.loadFiles();
        },
        _err => {
          this.file.createDir(path, MEDIA_FOLDER_NAME, false);
        }
      );
    });
  }

  loadFiles() {
    this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
      res => {
        this.files = res;
      },
      err => console.log('error loading files: ', err)
    );
  }

  record() {
    this.mediaCapture.captureAudio().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
          this.copyFileToLocalDir(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }

  openFile(f: FileEntry) {
    const path = f.nativeURL.replace(/^file:\/\//, '');
    const audioFile: MediaObject = this.media.create(path);
    audioFile.play();
  }

  deleteFile(f: FileEntry) {
    const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
    this.file.removeFile(path, f.name).then(() => {
      this.loadFiles();
    }, err => console.log('error remove: ', err));
  }

  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }

    const ext = myPath.split('.').pop();
    const d = Date.now();
    const newName = `${d}.${ext}`;

    const name = myPath.substr(myPath.lastIndexOf('/') + 1);
    const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
    const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;

    this.file.copyFile(copyFrom, name, copyTo, newName).then(
      _success => {
        this.loadFiles();
      },
      error => {
        console.log('error: ', error);
      }
    );
  }

}
