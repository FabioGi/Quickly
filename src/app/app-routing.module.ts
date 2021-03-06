import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";

const routes: Routes = [
    // {
    //     path: "",
    //     // redirectTo: "/(homeTab:home/default//browseTab:browse/default//searchTab:search/default//authTab:auth)",
    //     redirectTo: "home",
    //     pathMatch: "full"
    // },
    { path: "", redirectTo: 'auth', pathMatch: 'full' },

    {
        path: "launch_screen",
        loadChildren: () => import("~/app/laucnh_screen_/launch_screen.module").then((m) => m.LaunchScreenModule)
        // outlet: "homeTab"
    },
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
        path: "scoring",
        loadChildren: () => import("~/app/scoring/scoring.module").then((m) => m.ScoringModule)
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
