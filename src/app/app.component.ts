import { ChildComponent } from './child/child.component';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'view-child';
  parentData:string='ParentInfo';
//  @ViewChild('focused') focusedRef:ElementRef
// @ViewChild(ChildComponent)child:ChildComponent

 //  @ViewChild('focused') focusedRef:ElementRef
  // @ViewChild(ChildComponent)child:ChildComponent
  @ViewChild('counter')
  counterChild: ChildComponent = new ChildComponent;
 
 ngAfterViewInit(){
  //  this.focusedRef.nativeElement.focus();
  // console.log('Values on ngAfterViewInit():');
  // console.log(this.child)
 }

 parentCounter(){
   this.counterChild.counter();
 }
}
