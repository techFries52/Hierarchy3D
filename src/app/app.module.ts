import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelContainerComponent } from './model-container/model-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollectionHierarchyComponent } from './collection-hierarchy/collection-hierarchy.component';
import { MapHierarchyComponent } from './map-hierarchy/map-hierarchy.component';
import { ServletHierarchyComponent } from './servlet-hierarchy/servlet-hierarchy.component';
import { LegendComponent } from './legend/legend.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelContainerComponent,
    NavbarComponent,
    CollectionHierarchyComponent,
    MapHierarchyComponent,
    ServletHierarchyComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
