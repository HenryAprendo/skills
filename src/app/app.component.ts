import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Technologies, technologies} from './data/skills';
import { Projects, projects } from './data/projects';
import { SocialComponent } from './components/social/social.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SocialComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  technologiesList = technologies.slice();

  projectList = projects.slice();

}
