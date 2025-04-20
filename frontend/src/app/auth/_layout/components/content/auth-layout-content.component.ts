import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-layout-content',
  imports: [RouterOutlet],
  templateUrl: './auth-layout-content.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutContentComponent {

}

