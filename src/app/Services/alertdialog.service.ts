import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertboxComponent } from '../Layout/alertbox/alertbox.component';

@Injectable({
  providedIn: 'root'
})
export class AlertdialogService {

  constructor(private dialog:MatDialog) { }

  openDialog(msg){
    return this.dialog.open(AlertboxComponent,{
      width:'390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        message:msg
      }
    });
  }
}
