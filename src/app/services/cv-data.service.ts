import { Injectable } from '@angular/core';
import {Data} from '../types/data.type';
import {HttpClient} from '@angular/common/http';
import {DATA} from '../constants/data.constant';

@Injectable({
  providedIn: 'root',
})
export class CvDataService {
  private data: Data = DATA;

  getData(): Data {
    return this.data;
  }
}
