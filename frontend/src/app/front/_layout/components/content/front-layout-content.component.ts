import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'front-layout-content',
  imports: [RouterOutlet],
  templateUrl: './front-layout-content.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrontLayoutContentComponent {

}

export default FrontLayoutContentComponent;