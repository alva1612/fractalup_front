import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ButtonComponent } from './components/button/button.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { MediaControlsComponent } from './components/media-controls/media-controls.component';
import { PlayControlComponent } from './components/play-control/play-control.component';
import { VolumeControlComponent } from './components/volume-control/volume-control.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    PlayerCardComponent,
    ButtonComponent,
    UserInfoComponent,
    SearchBarComponent,
    MusicPlayerComponent,
    MediaControlsComponent,
    PlayControlComponent,
    VolumeControlComponent,
  ],
  imports: [CommonModule],
  exports: [
    SideMenuComponent,
    PlayerCardComponent,
    ButtonComponent,
    UserInfoComponent,
    SearchBarComponent,
    MusicPlayerComponent,
  ],
})
export class SharedModule {}
