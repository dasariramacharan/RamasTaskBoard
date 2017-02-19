import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-projects-root',
    template: `My Projects
    <router-outlet></router-outlet>
    `
})
export class ProjectsComponent {}