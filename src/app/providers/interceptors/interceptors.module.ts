import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './toke-interceptor.service';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [],
    declarations: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true,
        },
    
    ],
})
export class InterceptorsModule { }