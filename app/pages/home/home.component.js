"use strict";
var core_1 = require("@angular/core");
var timer = require("timer");
var HomeComponent = (function () {
    function HomeComponent() {
        this.activities = [];
    }
    HomeComponent.prototype.start = function () {
        console.log("Start");
        this.startDate = new Date();
        this.activities.push({ event: "START", time: this.startDate.getHours() + ":" + this.startDate.getMinutes(), status: "Running" });
        console.log(this.startDate.getHours() + " " + this.startDate.getMinutes() + " " + this.startDate.getSeconds());
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/home/home.component.html",
        styleUrls: ["pages/home/home.component.css"]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVFO0FBRXZFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQVE3QixJQUFhLGFBQWE7SUFJekI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsNkJBQUssR0FBTDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUN4SCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBQyxnQ0FBZ0M7UUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQzs7R0FFVyxhQUFhLENBYXpCO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XG52YXIgdGltZXIgPSByZXF1aXJlKFwidGltZXJcIik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuIFxuIHB1YmxpYyBhY3Rpdml0aWVzOkFycmF5PGFueT47XG4gcHVibGljIHN0YXJ0RGF0ZTogRGF0ZTsgXG4gY29uc3RydWN0b3IoKXtcbiAgIHRoaXMuYWN0aXZpdGllcyA9IFtdOyBcbiB9IFxuIHN0YXJ0KCl7XG4gIGNvbnNvbGUubG9nKFwiU3RhcnRcIik7XG4gIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgdGhpcy5hY3Rpdml0aWVzLnB1c2goe2V2ZW50OlwiU1RBUlRcIiwgdGltZTp0aGlzLnN0YXJ0RGF0ZS5nZXRIb3VycygpK1wiOlwiK3RoaXMuc3RhcnREYXRlLmdldE1pbnV0ZXMoKSwgc3RhdHVzOlwiUnVubmluZ1wifSk7XG4gIGNvbnNvbGUubG9nKHRoaXMuc3RhcnREYXRlLmdldEhvdXJzKCkrXCIgXCIrdGhpcy5zdGFydERhdGUuZ2V0TWludXRlcygpK1wiIFwiK3RoaXMuc3RhcnREYXRlLmdldFNlY29uZHMoKSk7XG4gfVxufVxuIl19