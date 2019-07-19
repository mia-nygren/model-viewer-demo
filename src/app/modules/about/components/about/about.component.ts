import { Component } from '@angular/core';
import * as uvExample from '../../../../../assets/images/uvExample.jpg';

@Component({
    selector: 'about-page',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    host: {'class': 'mainContent'}
})

export class AboutComponent {
  uvExampleSrc:string = uvExample;
}