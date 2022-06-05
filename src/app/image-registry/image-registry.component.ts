import { Component, OnInit } from '@angular/core';
import { ImageRegistryHttpService } from './image-registry-http.service';


export interface Images {
  origin: string;
  cloudType: string;
  name: string;
  containerType: string;
  createdDate: string;
  updatedDate: string;
  //valid: boolean;
  details: string;
}

@Component({
  selector: 'app-image-registry',
  templateUrl: './image-registry.component.html',
  styleUrls: ['./image-registry.component.scss']
})
export class ImageRegistryComponent implements OnInit {

  baseImages: Images[] = [];
  images:Images[] = [];

  constructor(private _imageRegistryHttpService: ImageRegistryHttpService) { }

  ngOnInit(): void {

    this._imageRegistryHttpService.getImages().subscribe((response) => {
      let temp:any = response;
      console.log("res -> ", temp);
      this.baseImages = temp.baseList;
      this.images = temp.list; 
    }, (error) => {
      console.log('error is ', error)
    });
  }

}
