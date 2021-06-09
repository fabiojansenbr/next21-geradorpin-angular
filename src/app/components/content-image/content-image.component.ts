import { Component, OnInit } from '@angular/core';
import { ChangeImageService } from 'src/app/services/change-image.service';

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.css']
})
export class ContentImageComponent implements OnInit {

  constructor(private _changeImageService: ChangeImageService) { }

  imageUrl = 'pin_bronze'
  name = '';
  avatarUrl: any;
  topPosition = 167;
  leftPosition = 237;
  imageSize = 190;

  ngOnInit(): void {
    this._changeImageService.imageUrl$.subscribe(
      url => {
        console.log(url);
        this.imageUrl = url;
      }
    );

    this._changeImageService.name$.subscribe(
      newName => {
        this.name = newName;
      }
    );

    this._changeImageService.avatarUrl$.subscribe(
      avatar => {
        this.avatarUrl = avatar;

      }
    );

    this._changeImageService.vPosition$.subscribe(
      value => {
        this.leftPosition += value;
      }
    );

    this._changeImageService.hPosition$.subscribe(
      value => {
        this.topPosition += value;
      }
    );

    this._changeImageService.wImage$.subscribe(
      value => {
        this.imageSize += value;
      }
    );

    this._changeImageService.hImage$.subscribe(
      value => {
        this.imageSize -= (-value);
      }
    );
  }

}
