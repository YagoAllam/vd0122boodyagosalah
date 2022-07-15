import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferPlaceComponent } from './component/offer-place.component';

const routes: Routes = [{ path: '', component: OfferPlaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferPlaceRoutingModule { }
