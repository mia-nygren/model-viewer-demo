import { Component, ViewChild } from '@angular/core';
import * as nightstand from '../../../../assets/models/nightstand/nightstand.gltf';
import * as ukulele from '../../../../assets/models/ukulele/ukulele.gltf';

import * as sofa from '../../../../assets/models/sofa/SOFA.gltf';
import * as sofaImg from '../../../../assets/images/sofa.jpg';
import * as ukeImg from '../../../../assets/images/ukulele.jpg';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    host: {'class':'home'}
})

export class HomeComponent {
    nightstandUrl:string = nightstand;
    sofaUrl:string = sofa;
    ukeUrl:string = ukulele;
    sofaImage:string = sofaImg;
    ukeImage:string = ukeImg;

    ngAfterViewInit() {

      }
}