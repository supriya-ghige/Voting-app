import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Voting } from "./voting/voting";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Voting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('VotingApp');
}
