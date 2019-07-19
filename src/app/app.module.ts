import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@google/model-viewer';

import '../assets/styles/reset';
import '../assets/styles/styles';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}