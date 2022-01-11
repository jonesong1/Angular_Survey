import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'myFilterPipe'
  })
  export class MyFilterPipe implements PipeTransform {
  
     transform(advertisers: any[], advertiser_id: any): any[] {
          return (advertisers || []).filter(advertiser => advertiser.advertiser_id===advertiser_id) 
     }
  }
  