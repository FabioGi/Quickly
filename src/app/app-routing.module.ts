import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";
// import { AuthenticationComponent } from "./authentication/authentication.component";
// import { BrowseComponent } from "./browse/browse.component";
// import { HomeComponent } from "./home/module/home.component";
// import { HomeComponent } from "./home/module/home.component";
// import { SearchComponent } from "./search/search.component";

const routes: Routes = [
    // {
    //     path: "",
    //     // redirectTo: "/(homeTab:home/default//browseTab:browse/default//searchTab:search/default//authTab:auth)",
    //     redirectTo: "home",
    //     pathMatch: "full"
    // },
    { path: "", redirectTo: 'auth', pathMatch: 'full' },

    {
        path: "home",
        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule)
        // outlet: "homeTab"
    },
    {
        path: "browse",
        loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule)
        // outlet: "browseTab"
    },
    {
        path: "search",
        loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule)
        // outlet: "searchTab"
    },
    {
        path: "auth",
        loadChildren: () => import("~/app/authentication/authentication.module").then((m) => m.AuthenticationModule)
        // outlet: "authTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
