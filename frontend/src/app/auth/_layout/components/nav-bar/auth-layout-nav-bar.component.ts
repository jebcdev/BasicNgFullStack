import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'auth-layout-nav-bar',
  imports: [RouterLink],
  templateUrl: './auth-layout-nav-bar.component.html',
  styles: ``, 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutNavBarComponent {
title=computed(() => 'Autenticación ');
}
