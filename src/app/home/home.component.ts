import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { NbIconConfig } from '@nebular/theme';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() { }

  openDialog(dialog: TemplateRef<any>) {

    
    this.dialogService.open(dialog);
  }

}
