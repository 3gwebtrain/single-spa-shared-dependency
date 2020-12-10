import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServiceComponent } from "./service/service.component";
import { ContactComponent } from "./contact/contact.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { APP_BASE_HREF } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    redirectTo: "child1/service",
    pathMatch: "full",
  },
  {
    path: "child1/service",
    component: ServiceComponent,
  },
  {
    path: "child1/contact",
    component: ContactComponent,
  },
  {
    path: "**",
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
