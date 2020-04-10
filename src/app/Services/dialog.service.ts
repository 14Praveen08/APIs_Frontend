import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteconfirmComponent } from '../Layout/deleteconfirm/deleteconfirm.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(msg){
    return this.dialog.open(DeleteconfirmComponent,{
      width:'390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        message:msg
      }
    });
  }
}
