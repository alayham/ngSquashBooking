import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ReserveDialogComponent } from "app/ui/reserve-dialog/reserve-dialog.component";
import { ITimeSlot } from "app/services/ITimeSlot";
import { ICourt } from "app/services/ICourt";

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {

  dialogRef: MdDialogRef<ReserveDialogComponent>;
  @Input() slot: ITimeSlot;
  @Input() court: ICourt;

  constructor(private dialog: MdDialog) { 
    
  }

  openReserveDialog() {
    this.dialogRef = this.dialog.open(ReserveDialogComponent, {data: { slot: this.slot, court: this.court }});

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
}
