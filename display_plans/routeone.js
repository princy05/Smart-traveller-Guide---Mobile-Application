"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_view_model_1 = require("../Traveler_account/home-view-model");
function routeone() {
    var a = home_view_model_1.data();
    var route1_lat = [];
    var route1_lon = [];
    var route1_name = [];
    var len = a.length;
    var n = 0;
    while (n < len / 2) {
        route1_lat[n] = a[n].latitude;
        route1_lon[n] = a[n].long;
        route1_name[n] = a[n].name;
        n++;
    }
    var route1 = [];
    var route2_detail = [];
    n = 0;
    while (n < len / 2) {
        var ab = {};
        ab['name'] = a[n].name;
        route1.push(ab);
        n++;
    }
    return route1;
}
exports.routeone = routeone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3V0ZW9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHVFQUFxRTtBQUtyRSxTQUFnQixRQUFRO0lBQ3hCLElBQUksQ0FBQyxHQUFDLHNCQUFJLEVBQUUsQ0FBQztJQUNiLElBQUksVUFBVSxHQUFDLEVBQUUsQ0FBQztJQUNsQixJQUFJLFVBQVUsR0FBQyxFQUFFLENBQUM7SUFDbEIsSUFBSSxXQUFXLEdBQUMsRUFBRSxDQUFDO0lBQ25CLElBQUksR0FBRyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFDLENBQUMsRUFBRTtRQUNmLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzVCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxDQUFDO0tBQ047SUFDRCxJQUFJLE1BQU0sR0FBQyxFQUFFLENBQUM7SUFDZCxJQUFJLGFBQWEsR0FBQyxFQUFFLENBQUM7SUFDckIsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUNKLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBQyxDQUFDLEVBQUU7UUFDaEIsSUFBSSxFQUFFLEdBQUMsRUFBRSxDQUFDO1FBQ1YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixDQUFDLEVBQUUsQ0FBQztLQUNMO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFHZCxDQUFDO0FBekJELDRCQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBob21lX3BhZ2UsZGF0YSB9IGZyb20gJy4uL1RyYXZlbGVyX2FjY291bnQvaG9tZS12aWV3LW1vZGVsJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVvbmUoKXtcclxubGV0IGE9ZGF0YSgpO1xyXG5sZXQgcm91dGUxX2xhdD1bXTtcclxubGV0IHJvdXRlMV9sb249W107XHJcbmxldCByb3V0ZTFfbmFtZT1bXTtcclxubGV0IGxlbj1hLmxlbmd0aDtcclxudmFyIG4gPSAwO1xyXG53aGlsZSAobiA8IGxlbi8yKSB7XHJcbiAgIHJvdXRlMV9sYXRbbl09YVtuXS5sYXRpdHVkZTtcclxuICAgcm91dGUxX2xvbltuXT1hW25dLmxvbmc7XHJcbiAgIHJvdXRlMV9uYW1lW25dPWFbbl0ubmFtZTtcclxuICAgbisrO1xyXG59XHJcbmxldCByb3V0ZTE9W107XHJcbmxldCByb3V0ZTJfZGV0YWlsPVtdO1xyXG5uPTA7XHJcbndoaWxlIChuIDwgbGVuLzIpIHtcclxuICBsZXQgYWI9e307XHJcbiAgYWJbJ25hbWUnXSA9IGFbbl0ubmFtZTtcclxuICByb3V0ZTEucHVzaChhYik7XHJcbiAgbisrO1xyXG59XHJcbnJldHVybiByb3V0ZTE7XHJcblxyXG5cclxufSJdfQ==