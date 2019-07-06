import { Component, ViewChild } from '@angular/core';
import * as nightstand from '../../../../assets/models/gltf/nightstand.gltf';
// import * as nightstand from '../../../../assets/models/nightstand-processed.glb';
import * as sofa from '../../../../assets/models/sofa/SOFA.gltf';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    @ViewChild('nightstand') nstand; 

    nightstandUrl = nightstand;
    sofaUrl = sofa;
    
    ngAfterViewInit() {
        console.log('NIGHSTAND mv');
        console.log(this.nstand.mv.nativeElement);
        console.log('FOV');
        console.log(this.nstand.mv.nativeElement.getFieldOfView());
        
        // set FOV
        console.log('ORBIT');
        
        console.log(this.nstand.mv.nativeElement.cameraOrbit);
        this.nstand.mv.nativeElement.fieldOfView = '20';
        console.log(this.nstand.mv.nativeElement.fieldOfView);
        // this.nstand.mv.nativeElement
      }
}