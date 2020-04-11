import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.css']
})
export class AlertboxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data, public dialogRef:MatDialogRef<AlertboxComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(true);
  }

}
