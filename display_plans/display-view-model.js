"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var routeone_1 = require("./routeone");
var routetwo_1 = require("./routetwo");
var display_plans = /** @class */ (function (_super) {
    __extends(display_plans, _super);
    function display_plans() {
        var _this = _super.call(this) || this;
        _this.a1 = routeone_1.routeone();
        _this.a2 = routetwo_1.routetwo();
        _this.countrie = _this.a2;
        _this.countries = _this.a1;
        return _this;
    }
    display_plans.prototype.onItemTap = function (args) {
        console.log('Item with index: ' + args.index + ' tapped');
    };
    display_plans.prototype.routetwo = function (args) {
        var button = args.object;
        var page = button.page;
        page.frame.navigate("./display_plan2/display_plan2");
    };
    display_plans.prototype.routeone = function (args) {
        var button = args.object;
        var page = button.page;
        page.frame.navigate("./display_plan1/display_plan1");
    };
    display_plans.prototype.onTap = function (args) {
        var button = args.object;
        var page = button.page;
        page.frame.navigate("./Traveler_account/home-page");
    };
    return display_plans;
}(observable_1.Observable));
exports.display_plans = display_plans;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzcGxheS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsK0RBQThEO0FBQzlELHVDQUFxQztBQUNyQyx1Q0FBcUM7QUFHckM7SUFBbUMsaUNBQVU7SUFTM0M7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFWTyxRQUFFLEdBQUcsbUJBQVEsRUFBRSxDQUFDO1FBQ2hCLFFBQUUsR0FBRyxtQkFBUSxFQUFFLENBQUM7UUFVeEIsY0FBUSxHQUF1QixLQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLGVBQVMsR0FBdUIsS0FBSSxDQUFDLEVBQUUsQ0FBQzs7SUFGeEMsQ0FBQztJQUlELGlDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBZTtRQUV0QixJQUFNLE1BQU0sR0FBbUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFNLElBQUksR0FBUyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFFdkQsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFlO1FBQ3RCLElBQU0sTUFBTSxHQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQU0sSUFBSSxHQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLElBQWU7UUFDbkIsSUFBTSxNQUFNLEdBQW1CLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBTSxJQUFJLEdBQVMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFSCxvQkFBQztBQUFELENBQUMsQUF6Q0QsQ0FBbUMsdUJBQVUsR0F5QzVDO0FBekNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IHJvdXRlb25lIH0gZnJvbSAnLi9yb3V0ZW9uZSdcbmltcG9ydCB7IHJvdXRldHdvIH0gZnJvbSAnLi9yb3V0ZXR3bydcblxuXG5leHBvcnQgY2xhc3MgZGlzcGxheV9wbGFucyBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gIHByaXZhdGUgYTEgPSByb3V0ZW9uZSgpO1xuICBwcml2YXRlIGEyID0gcm91dGV0d28oKTtcblxuICBwcml2YXRlIF9jb3VudGVyOiBudW1iZXI7XG4gIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSByb3V0ZTE6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gIH1cbiAgY291bnRyaWU6IHsgbmFtZTogc3RyaW5nIH1bXSA9IHRoaXMuYTI7XG4gIGNvdW50cmllczogeyBuYW1lOiBzdHJpbmcgfVtdID0gdGhpcy5hMTtcblxuICBvbkl0ZW1UYXAoYXJncyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdJdGVtIHdpdGggaW5kZXg6ICcgKyBhcmdzLmluZGV4ICsgJyB0YXBwZWQnKTtcbiAgfVxuXG4gIHJvdXRldHdvKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgY29uc3QgYnV0dG9uOiBCdXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKFwiLi9kaXNwbGF5X3BsYW4yL2Rpc3BsYXlfcGxhbjJcIik7XG5cbiAgfVxuXG4gIHJvdXRlb25lKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGJ1dHRvbjogQnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZShcIi4vZGlzcGxheV9wbGFuMS9kaXNwbGF5X3BsYW4xXCIpO1xuICB9XG5cbiAgb25UYXAoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnV0dG9uOiBCdXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBidXR0b24ucGFnZTtcblxuICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCIuL1RyYXZlbGVyX2FjY291bnQvaG9tZS1wYWdlXCIpO1xuICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19