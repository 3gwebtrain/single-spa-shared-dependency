import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl:'./service.component.html',
    styleUrls:['./service.component.css']
})

export class ServiceComponent implements OnInit {

    ngOnInit(){
        console.log('i am service page');
    }

}