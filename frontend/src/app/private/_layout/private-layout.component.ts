import { ChangeDetectionStrategy, Component } from '@angular/core';
import {PrivateLayoutHeaderComponent,PrivateLayoutContentComponent,PrivateLayoutFooterComponent} from '@private/_layout/components';
@Component({
  selector: 'app-private-layout',
  imports: [PrivateLayoutHeaderComponent,PrivateLayoutContentComponent,PrivateLayoutFooterComponent],
  templateUrl: './private-layout.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateLayoutComponent {

}
export default PrivateLayoutComponent;