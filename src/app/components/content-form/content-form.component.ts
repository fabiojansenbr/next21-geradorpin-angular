import { Component, OnInit } from '@angular/core';
import { ChangeImageService } from 'src/app/services/change-image.service';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {

  constructor(private _changeImageService: ChangeImageService) { }

  name = '';

  ngOnInit(): void {
  }

  changeImageSelect(value: string) {
    this._changeImageService.changeUrl(value);
  }

  nameChanged(event: any) {
    console.log(event.target.value);
    this._changeImageService.changeName(event.target.value);
  }

}
