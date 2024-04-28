import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import { navigation } from './nav-content';
import { UserService } from '../../User/user.service';

@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent {
category:any
@Input() selectedSection:any


ngOnInit(){
  this.category=navigation
}
}
