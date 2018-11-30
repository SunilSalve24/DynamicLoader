export const appliCationComponentList  = [
 {
     name : "In Application Componet",
     className : "DemoSecoundComponent",
     module: null,
     template: `<app-demo-secound [label] ='label' [disabled] = 'disabled'></app-demo-secound>`,
     defaultProperties: {
      label: ''
     },
     properties:[
      { name : 'label', value: "", type: 'inputText'}
    ]
  },
  {
    name : "Prime NG",
    className : null,
    moduleDetails: {
      module: ["ButtonModule"],
      modulePath: `primeng/button`
    },
    template : `<button pButton type="button" icon="pi pi-check" [iconPos]='iconPos' [label]='label'></button>`,
    defaultProperties: {
      iconPos: 'right',
      label: 'Prime NG Button Demo'
    },
    properties:[
      { name : 'iconPos', value: ['left','right'], type: 'list'},
      { name : 'label', value: "", type: 'inputText'}
    ]
  },
  {
    name : "Defualt AM Button ",
    className : null,
    module: null,
    template : `<button mat-raised-button color="primary">AM Primary</button>`,
    defaultProperties: {

    }
  },
  {
    name : "Defualt AM Menu List",
    className : null,
    module: ['MatButtonModule', 'MatIconModule', 'MatMenuModule'],
    template : `<button mat-button [matMenuTriggerFor]="menu">Menu</button> <mat-menu #menu="matMenu">
      <button mat-menu-item *ngFor="let shoe of typesOfShoes">{{shoe}}</button>
    </mat-menu>`,
    defaultProperties: {
      typesOfShoes: ['Boots', 'Clogs']
    }
  }
]