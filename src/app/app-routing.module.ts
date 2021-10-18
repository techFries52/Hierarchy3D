import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHierarchyComponent } from './collection-hierarchy/collection-hierarchy.component';
import { MapHierarchyComponent } from './map-hierarchy/map-hierarchy.component';
import { ServletHierarchyComponent } from './servlet-hierarchy/servlet-hierarchy.component';

const routes: Routes = [
  {path: 'Collection', component: CollectionHierarchyComponent},
  {path: 'Map', component: MapHierarchyComponent},
  {path: 'Servlet', component: ServletHierarchyComponent},
  {path: 'Colle', component: CollectionHierarchyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
