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

  changeVPosition(value: any) {
    this._changeImageService.changeVPosition(value);
    console.log(value);
  }

  changeHPosition(value: any) {
    this._changeImageService.changeHPosition(value);
    console.log(value);
  }

  changeWImage(value: any) {
    this._changeImageService.changeWImage(value);
  }

  changeHImage(value: any) {
    this._changeImageService.changeHImage(value);
  }

  public imagePath: any;
  imgURL: any;
  public message: string | undefined;

  preview(files: any) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;

      this._changeImageService.changeAvatarUrl(reader.result);
      console.log(reader.result);
    }
  }

}
