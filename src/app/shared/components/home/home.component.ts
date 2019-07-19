import { Component, ViewChild } from '@angular/core';
import * as nightstand from '../../../../assets/models/nightstand/nightstand.gltf';
import * as ukulele from '../../../../assets/models/ukulele/ukulele.gltf';

import * as sofa from '../../../../assets/models/sofa/SOFA.gltf';
import * as sofaImg from '../../../../assets/images/sofa.jpg';
import * as ukeImg from '../../../../assets/images/ukulele.jpg';
// Poster images ( for lazy loading and preload )
import * as ukePoster from '../../../../assets/images/uke-poster.png';
import * as sofaPoster from '../../../../assets/images/sofa-poster.png';
import * as nightstandPoster from '../../../../assets/images/nightstand-poster.png';

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
    ukePoster:string = ukePoster;
    sofaPoster:string = sofaPoster;
    nightstandPoster:string = nightstandPoster;
    loadingUke:boolean = false;
    loadingSofa:boolean = false;

    loadUke() {
        this.loadingUke = !this.loadingUke;
    }
    loadSofa() {
        this.loadingSofa = !this.loadingSofa;
    }
    ngAfterViewInit() {

      }
}