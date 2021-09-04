import {Component} from '@angular/core'

@Component({
    selector : 'app-warning-alert',
    template : `
    <p>This is warning component</p>
    `,
    styles: [`
        p{
            color:red;
        }`
    ]
    
})
export class WarningAlertComponent{

}
