import { Component } from '@angular/core';

@Component({
  selector: 'app-media-controls',
  templateUrl: './media-controls.component.html',
  styleUrls: ['./media-controls.component.scss'],
})
export class MediaControlsComponent {
  playing: boolean = false;
}
