import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'private-layout-content',
  imports: [RouterOutlet],
  templateUrl: './private-layout-content.component.html', 
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateLayoutContentComponent {

}
export default PrivateLayoutContentComponent;