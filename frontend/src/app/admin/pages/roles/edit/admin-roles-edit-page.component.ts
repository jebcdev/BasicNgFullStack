import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminRolesFormComponent } from "../components/form/admin-roles-form.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'admin-roles-edit-page',
  imports: [RouterLink, AdminRolesFormComponent],
  templateUrl: './admin-roles-edit-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminRolesEditPageComponent {

}


export default AdminRolesEditPageComponent;