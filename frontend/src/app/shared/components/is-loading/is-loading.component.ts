import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'is-loading',
  imports: [],
  template: `
    <div class="alert alert-info alert-soft text-center p-10 m-10">
      <span class="loading loading-ring loading-xl"></span>Cargando Datos ...
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsLoadingComponent {}
