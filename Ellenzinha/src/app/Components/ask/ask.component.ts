import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialComponent } from '../material/material.component';

@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.scss'
})

export class AskComponent {
  @ViewChild('audioPlayer', { static: false }) audioPlayerElement: any;
  happy = "../../../assets/Audio/happy happy happy cat original meme 🐱_T8bO1iKu76g.mp3";

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(MaterialComponent, {});
    this.playAudio();
  }

  playAudio(): void {
    const audioPlayer = this.audioPlayerElement.nativeElement as HTMLAudioElement;
    audioPlayer.play();
  }
}
