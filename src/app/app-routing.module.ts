import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionFrameworkComponent } from './collection-framework/collection-framework.component';
import { CollectionHierarchyComponent } from './collection-hierarchy/collection-hierarchy.component';
import { MapHierarchyComponent } from './map-hierarchy/map-hierarchy.component';
import { ServletHierarchyComponent } from './servlet-hierarchy/servlet-hierarchy.component';

const routes: Routes = [
  {path: 'Collection', component: CollectionHierarchyComponent},
  {path: 'Map', component: MapHierarchyComponent},
  {path: 'Servlet', component: ServletHierarchyComponent},
  {path: '', component: CollectionFrameworkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

