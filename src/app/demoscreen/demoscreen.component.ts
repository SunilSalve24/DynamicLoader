import { BrowserModule  } from '@angular/platform-browser';

import { Component, OnInit, ViewChild,Input, NgModuleRef,NgModule, ReflectiveInjector, ComponentRef,ComponentFactory, ComponentFactoryResolver
  ,ViewContainerRef,CUSTOM_ELEMENTS_SCHEMA ,Compiler, NgModuleFactoryLoader, NgModuleFactory, SystemJsNgModuleLoader
} from '@angular/core';
import { ComponetLoderDirective } from '../componet-loder.directive';
import { DemoSecoundComponent } from '../demo-secound/demo-secound.component';
import { appliCationComponentList } from '../componentList';
import { CommonModule } from '@angular/common';

import { Http, Response } from "@angular/http";


import * as _ from 'underscore';


declare var require: any;
var path = require('path');

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatToolbar,
  MatInput,
 } from '@angular/material';

 
 import {ButtonModule} from 'primeng/button';

 export interface IHaveDynamicData { 
    
 }
 declare var System: any;


@Component({
  selector: 'app-demoscreen',
  templateUrl: './demoscreen.component.html',
  styleUrls: ['./demoscreen.component.css']
})
export class DemoscreenComponent implements OnInit {

  propertyArray; componentRef; componentList; CurrentComponent; ngMdlRef;
  dynamicImports = []; modulePath; moduleName
  @ViewChild(ComponetLoderDirective) appComponetLoder: ComponetLoderDirective;


  constructor(private compiler: Compiler, private vcRef: ViewContainerRef,private http: Http ) { }
  private _cacheOfFactories: {[templateKey: string]: ComponentFactory<IHaveDynamicData>} = {};

  ngOnInit() {    
   // this.componentList = appliCationComponentList;
    
   this.getModule() 
    //this.loadComponent();
    this.modulePath = 'primeng';
    this.moduleName = 'button';
   
  }
  loadComponent(component) {
    if (this.componentRef) {
      this.componentRef.destroy();
     } 
  
    this.CurrentComponent = component
    
    let template = this.CurrentComponent.template;
    
    let componentProps = this.CurrentComponent.defaultProperties; 
    
    this.propertyArray = this.CurrentComponent.properties;

    this.createComponentFactory(template)
      .then((factory: ComponentFactory<IHaveDynamicData>) =>
    {
            this.componentRef = this.appComponetLoder.viewContainerRef.createComponent(factory);

           for (var property in componentProps) {
            if (componentProps.hasOwnProperty(property)) {
                this.componentRef.instance[property] = componentProps[property];
            }
        }

    });    
  }

  createComponentFactory(template: string)
  : Promise<ComponentFactory<IHaveDynamicData>> {

  let factory = this._cacheOfFactories[template];

  if (factory) {
      console.log("Module and Type are returned from cache")
     
      return new Promise((resolve) => {
          resolve(factory);
      });
  }


  //  let's create a Type for it
 

  let type = this.createNewComponent(template);
  this.dynamicImports = [CommonModule, ButtonModule, MatMenuModule, MatButtonModule]
  let module = this.createComponentModule(this.dynamicImports, [type]);
  
  return new Promise((resolve) => {
      this.compiler
          .compileModuleAndAllComponentsAsync(module)
          .then((moduleWithFactories) =>
          {
              factory = _.find(moduleWithFactories.componentFactories, { componentType: type });

              this._cacheOfFactories[template] = factory;

              resolve(factory);
              
          });
  });

  }
  
  createNewComponent (tmpl:string) {
    @Component({
        selector: 'dynamic-component-renderer',
        template: tmpl
    })
    class CustomDynamicComponent {
      
    };
    // a component for this particular template
    return CustomDynamicComponent;
  }


  createComponentModule (dynamicImports: any, dynamicDeclarations: any) {
    @NgModule({
      imports: dynamicImports,
      declarations: dynamicDeclarations,
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]      
    })
    class RuntimeComponentModule
    {
    }
   
    return RuntimeComponentModule;    
  }
  ngOnDestroy(){
    if (this.componentRef) {     
      
        this.componentRef.destroy();
        this.componentRef = null;

    }
  }

  valuechange(propName, value){
    this.componentRef.instance[propName] = value;
  }

  getModule(){

    (async () => {
      let moduleSpecifier = '@angular/material'
      const module = await import( '@angular/material')
      module.MatIconModule;
      // → logs 'Hi from the default export!'
      // → logs 'Doing stuff…'
    })();
    //this.dynamicImports.push(moduleSpecifier.ButtonModule); 
    
    // import('primeng/button')
    // .then((module) => {
    //   this.dynamicImports.push(module.ButtonModule);
    //   // → logs 'Doing stuff…'
    // });
    

  }
  
}
