import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FrontLayoutHeaderComponent,FrontLayoutContentComponent,FrontLayoutFooterComponent} from '@front/_layout/components'
@Component({
  selector: 'front-layout',
  imports: [FrontLayoutHeaderComponent,FrontLayoutContentComponent,FrontLayoutFooterComponent],
  templateUrl: './front-layout.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrontLayoutComponent {

}

export default FrontLayoutComponent;