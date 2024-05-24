import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule,HeaderComponent ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  title = 'About Us';

}
