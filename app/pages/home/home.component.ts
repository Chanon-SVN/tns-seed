import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { DatePicker } from "ui/date-picker";
var timer = require("timer");

@Component({
  selector: "my-app",
  templateUrl:"pages/home/home.component.html",
  styleUrls: ["pages/home/home.component.css"]
})

export class HomeComponent {
 
 public activities:Array<any>;
 public startDate: Date; 
 constructor(){
   this.activities = []; 
 } 
 start(){
  console.log("Start");
  this.startDate = new Date();
  this.activities.push({event:"START", time:this.startDate.getHours()+":"+this.startDate.getMinutes(), status:"Running"});
  console.log(this.startDate.getHours()+" "+this.startDate.getMinutes()+" "+this.startDate.getSeconds());
 }
}
