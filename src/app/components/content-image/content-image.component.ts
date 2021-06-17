import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChangeImageService } from 'src/app/services/change-image.service';
import html2canvas from 'html2canvas';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.css']
})
export class ContentImageComponent implements OnInit {

  constructor(private _changeImageService: ChangeImageService, private readonly meta: Meta) {

  }

  imageUrl = 'pin_bronze'
  name = '';
  avatarUrl: any;
  topPosition = 160;
  leftPosition = 230;
  imageSize = 190;


  ngOnInit(): void {
    this._changeImageService.imageUrl$.subscribe(
      url => {
        console.log(url);

        if (url == 'black_diamond') {
          this.imageUrl = url;
          this.leftPosition = 110;
          this.topPosition = 75;
        } else {
          this.topPosition = 160;
          this.leftPosition = 230;
        }

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

  // @ViewChild('screen')
  // screen!: ElementRef;
  // @ViewChild('canvas')
  // canvas!: ElementRef;
  @ViewChild('downloadLink')
  downloadLink!: ElementRef;

  @ViewChild('images') images: any;
  imageLink: any = null;

  h2c: any = html2canvas;
  captureScreen() {
    window.scrollTo(500, 0);

    const viewport: any = this.meta.getTag('name=viewport')?.getAttribute('content');
    const viewportOriginal: any = this.meta.getTag('name=viewport')?.getAttribute('content');

    console.log(viewport);

    this.meta.removeTag('name="viewport"');
    this.meta.addTag({ name: 'viewport', content: 'width=1000' })

    this.h2c(document.querySelector("#downloadImage")).then((canvas: any) => {


      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = `${this.imageUrl}.png`;
      this.downloadLink.nativeElement.click();
    });

    this.meta.removeTag('name="viewport"');
    this.meta.addTag({ name: 'viewport', content: viewport })


  }

}
