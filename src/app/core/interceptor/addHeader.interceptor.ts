import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('in here')
    let headers = new HttpHeaders()
    headers = headers.set('X-Api-Key', "KjTFKEGi7R11DuvLSPaV16IJLfTPCkKV3qowOXtE");
    headers = headers.set('Access-Control-Allow-Credentials', "true");
    headers = headers.set('accept', "application/json");
    /*headers = headers.set('Authorization', "KjTFKEGi7R11DuvLSPaV16IJLfTPCkKV3qowOXtE");
    headers = headers.set('X-Amz-Security-Token', "KjTFKEGi7R11DuvLSPaV16IJLfTPCkKV3qowOXtE");
    headers = headers.set('X-Amz-Date', new Date().toISOString());
    headers = headers.set('Content-Type', "application/json");*/
    const clonedRequest =
      req.clone({
        headers: headers
      });
    return next.handle(clonedRequest);
  }
}
