import {Component,OnInit,EventEmitter} from 'angular2/core';

@Component({
    selector:'header',
    template:`
        <div class="header">
            <h2>Angular Restaurant</h2>

        </div>
    `,
    styles:[`
    .header{
        min-height: 100px;
        background-color:#1ccacd;
        color:#fff;
        padding:10px;
    }


    `]

})
export  class Header implements OnInit{
    menuItems:Array<string>;


    constructor(){

    }

    ngOnInit(){
       // this.menuItems = this.service.getMenuItems(100);
    }

}