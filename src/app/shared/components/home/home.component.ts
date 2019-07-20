import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { SetVisibilityInfo } from '../../state/app.actions';
// Import images
import * as nightstand from '../../../../assets/models/nightstand/nightstand.gltf';
import * as ukulele from '../../../../assets/models/ukulele/ukulele.gltf';
import * as sofa from '../../../../assets/models/sofa/SOFA.gltf';
import * as sofa1200 from '../../../../assets/images/sofa-render-1200.jpg';
import * as uke900 from '../../../../assets/images/ukulele-render-900.jpg';
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
    sofa1200:string = sofa1200;
    uke900:string = uke900;
    ukePoster:string = ukePoster;
    sofaPoster:string = sofaPoster;
    nightstandPoster:string = nightstandPoster;
    loadingUke:boolean = false;
    loadingSofa:boolean = false;
    infoIsVisible$: Observable<boolean[]>;
    viewInfo:boolean = true;

    constructor( private store: Store) {
        this.infoIsVisible$ = this.store.select(state => state.app.infoIsVisible);
        this.viewInfo = this.store.selectSnapshot<boolean>(state => state.app.infoIsVisible);  
    }

    hide($event:any) {    
        this.store.dispatch([new SetVisibilityInfo(false)])
        .subscribe(([_, infoIsVisible]) => {
            console.log($event.currentTarget);
            $event.currentTarget.remove();
        });
    }
    loadUke() {
        this.loadingUke = true;
    }
    loadSofa() {
        this.loadingSofa = true;
    }
}