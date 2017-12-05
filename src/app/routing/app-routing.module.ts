import { ActivityListComponent } from '../act/activity-list/activity-list.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: ActivityListComponent },
    { path: 'profile', component: UserProfileComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
