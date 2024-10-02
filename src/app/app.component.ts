import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenderComponent } from './gender/gender.component';
import { CascadingComponent } from './cascading/cascading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GenderComponent,CascadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cascading';
}
