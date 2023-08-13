"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var observable_1 = require("tns-core-modules/data/observable");
var Admin_Page = /** @class */ (function (_super) {
    __extends(Admin_Page, _super);
    function Admin_Page() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._counter = 42;
        return _this;
    }
    Admin_Page.prototype.checkusers = function (args) {
        var page = args.object.page;
        var vm = page.bindingContext;
        // >> fetch-post-ts
        fetch("http://ec2-18-218-173-14.us-east-2.compute.amazonaws.com:3000/user")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            page.frame.navigate("./delete-users/delete-users");
        }).catch(function (err) {
        });
    };
    Admin_Page.prototype.Post = function (args) {
        var page = args.object.page;
        var vm = page.bindingContext;
        fetch("http://ec2-18-218-173-14.us-east-2.compute.amazonaws.com:3000/user")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            // console.log(r.users);
            store_1.json.store_json = r.users;
            update(store_1.json.store_json);
            page.frame.navigate("./display_users/display-users");
        }).catch(function (err) {
        });
    };
    Admin_Page.prototype.logout = function (args) {
        var page = args.object.page;
        var vm = page.bindingContext;
        page.frame.navigate("./login-page/login-page");
    };
    return Admin_Page;
}(observable_1.Observable));
exports.Admin_Page = Admin_Page;
function test() {
    //return result;
    return store_1.json.store_json;
}
exports.test = test;
function update(r) {
    store_1.json.store_json = r;
}
exports.arr1 = store_1.json.store_json;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkbWluLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxpQ0FBOEI7QUFDOUIsK0RBQThEO0FBRzlEO0lBQWdDLDhCQUFVO0lBS3RDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSEcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztJQUV2QixDQUFDO0lBQ0QsK0JBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRS9CLG1CQUFtQjtRQUNuQixLQUFLLENBQUMsb0VBQW9FLENBQUM7YUFDeEUsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNuQyxJQUFJLENBQUMsVUFBQyxDQUFDO1lBRU4sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBQ0QseUJBQUksR0FBSixVQUFLLElBQUk7UUFDUCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBR2pDLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQzthQUN0RSxJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ25DLElBQUksQ0FBQyxVQUFDLENBQUM7WUFDTix3QkFBd0I7WUFFeEIsWUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxZQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBQ0QsMkJBQU0sR0FBTixVQUFPLElBQUk7UUFDVCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRS9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFHakQsQ0FBQztJQUVQLGlCQUFDO0FBQUQsQ0FBQyxBQXZERCxDQUFnQyx1QkFBVSxHQXVEekM7QUF2RFksZ0NBQVU7QUF5RHZCLFNBQWdCLElBQUk7SUFFbEIsZ0JBQWdCO0lBQ2hCLE9BQU8sWUFBSSxDQUFDLFVBQVUsQ0FBQztBQUN6QixDQUFDO0FBSkQsb0JBSUM7QUFJRCxTQUFTLE1BQU0sQ0FBQyxDQUFDO0lBRWYsWUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUNVLFFBQUEsSUFBSSxHQUFHLFlBQUksQ0FBQyxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiLi9zdG9yZVwiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQWRtaW5fUGFnZSBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzLlxyXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSA0MjtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNoZWNrdXNlcnMoYXJncykge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdC5wYWdlO1xyXG4gICAgICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcclxuICAgICAgXHJcbiAgICAgICAgLy8gPj4gZmV0Y2gtcG9zdC10c1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2VjMi0xOC0yMTgtMTczLTE0LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC91c2VyXCIpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKFwiLi9kZWxldGUtdXNlcnMvZGVsZXRlLXVzZXJzXCIpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICBQb3N0KGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcclxuICAgICAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICBmZXRjaChcImh0dHA6Ly9lYzItMTgtMjE4LTE3My0xNC51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvdXNlclwiKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyLnVzZXJzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGpzb24uc3RvcmVfanNvbj1yLnVzZXJzO1xyXG4gICAgICAgICAgICB1cGRhdGUoanNvbi5zdG9yZV9qc29uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCIuL2Rpc3BsYXlfdXNlcnMvZGlzcGxheS11c2Vyc1wiKTtcclxuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgbG9nb3V0KGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcclxuICAgICAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgIFxyXG4gICAgICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCIuL2xvZ2luLXBhZ2UvbG9naW4tcGFnZVwiKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdCgpIHtcclxuXHJcbiAgLy9yZXR1cm4gcmVzdWx0O1xyXG4gIHJldHVybiBqc29uLnN0b3JlX2pzb247XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKHIpIHtcclxuICBcclxuICBqc29uLnN0b3JlX2pzb249cjtcclxufVxyXG5leHBvcnQgbGV0IGFycjEgPSBqc29uLnN0b3JlX2pzb247XHJcbiJdfQ==