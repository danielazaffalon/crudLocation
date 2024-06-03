import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authService = inject(AuthService);

  @Input() title?:string;

  constructor(private router: Router) {
    
  }

  logout(){
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }
}
