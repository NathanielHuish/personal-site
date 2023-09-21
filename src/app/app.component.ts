import { Component } from '@angular/core';
import { faScroll, faTree, faHome } from '@fortawesome/free-solid-svg-icons';
import { fadeInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent {
  title = 'Nathaniel Huish';
  faScroll = faScroll;
  faHome = faHome;
  faTree = faTree;
}
