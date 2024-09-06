import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrected to styleUrls
})
export class AppComponent {
  title = 'seekhlu';

  // Updated method to accept the item parameter and display it in the console
  AddTask(item: string) {
    console.warn('task:', item);
  }
}
