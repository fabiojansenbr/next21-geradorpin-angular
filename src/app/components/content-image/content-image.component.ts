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
  }

}
