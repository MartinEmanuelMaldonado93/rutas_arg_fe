import { Component, NgModule, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  description = signal('first value');
  textoInput = '';

  onInputChange(event: Event): void {
    this.textoInput = (event.target as HTMLInputElement).value;
  }
}
