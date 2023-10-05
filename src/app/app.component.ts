import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Technologies, technologies} from './data/skills';
import { Projects, projects } from './data/projects';
import { SocialComponent } from './components/social/social.component';
import {intervalToDuration, differenceInCalendarYears, differenceInCalendarMonths, differenceInYears } from 'date-fns'


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

  calculateDateDifference(start:Date){
    let value = intervalToDuration({
      start: start,
      end: new Date()
    });

    if(value && value.years && value.months){
      let years = value.years;
      let months = value.months;

      if( years > 0 && months > 0){
        return `${value.years} year and ${value.months} months`
      } else if(years > 0){
        return `${value.years} year`;
      }

    }

    return `${value.months} months`;

  }

}








