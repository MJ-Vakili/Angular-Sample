import { Component } from '@angular/core';
import { NbGlobalPhysicalPosition, NbGlobalPosition, NbIconModule, NbLayoutDirection, NbLayoutDirectionService, NbPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports: [NbIconModule]
})
export class AppComponent {
  items = [
    {
      title: 'Logout',
    },
  ];
  contextMenuPlacement = NbPosition.BOTTOM;

  constructor(private toastService: NbToastrService, private layoutDir: NbLayoutDirectionService) { }
  setting(): void {
    this.items.push({
      title: 'User Hasan!!',
    });
    this.toastService.success('با موفقیت اضافه شد.', 'پیام سیستم', { position: NbGlobalPhysicalPosition.BOTTOM_RIGHT });
    $localize.locale == 'en';
    this.layoutDir.setDirection(NbLayoutDirection.RTL)
  }
}
