import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from 'primeng/api';
import { TitleComponent } from './components/title/title.component';
import { CarruselComponent } from "./components/carrusel/carrusel.component";
import { HeaderComponent } from "./components/header/header.component";
import { PhraseComponent } from './components/phrase/phrase.component';
import { CardsComponent } from './components/cards/cards.component';
import { JordaninfoComponent } from './components/jordaninfo/jordaninfo.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { VideoComponent } from './components/video/video.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, CarruselComponent, TitleComponent, HeaderComponent, PhraseComponent, CardsComponent, JordaninfoComponent, StadiumComponent, VideoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landingpage';
}
