import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '30s',
    /*cloud: {
      projectID: 3738194
    }*/
  }

export default function () {
  //  let response = 
    http.get('http://172.23.176.132/opencart/upload/index.php?route=common/home');
    sleep(1);
    http.get('http://172.23.176.132/opencart/upload/index.php?route=product/category&path=34');
    sleep(2);
    http.get('http://172.23.176.132/opencart/upload/index.php?route=product/product&path=34&product_id=48')
    sleep(2);
    //console.log('Response time was ' + String(response.timings.duration) + ' ms');
    }