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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollectionFrameworkComponent } from './collection-framework/collection-framework.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelContainerComponent,
    NavbarComponent,
    CollectionHierarchyComponent,
    MapHierarchyComponent,
    ServletHierarchyComponent,
    LegendComponent,
    CollectionFrameworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
