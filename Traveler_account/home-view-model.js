"use strict";
//REUSED SOME CODE: https://github.com/elharony/Udacity-P8-Neighborhood-Map-Project-Explained
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var store_1 = require("./store");
var dialogs = require("tns-core-modules/ui/dialogs");
var home_page = /** @class */ (function (_super) {
    __extends(home_page, _super);
    function home_page() {
        return _super.call(this) || this;
        // Initialize default values.
    }
    Object.defineProperty(home_page.prototype, "dataItems", {
        get: function () {
            return this.get("_dataItems");
        },
        set: function (value) {
            this.set("_dataItems", value);
        },
        enumerable: true,
        configurable: true
    });
    home_page.prototype.setresult = function (result) {
        this.a = result;
    };
    home_page.prototype.getresult = function () {
        var a1 = this.a;
        console.log("a1 is =" + a1);
        return "how are you";
    };
    home_page.prototype.navigateToFeatured = function (args) {
        var button = args.object;
        var page = button.page;
        page.frame.navigate("display-page");
    };
    home_page.prototype.onTap = function (args) {
        var button = args.object;
        var page = button.page;
        page.frame.navigate("./login-page/login-page");
    };
    home_page.prototype.test = function () {
        //  return ab;
    };
    home_page.prototype.Post = function (args) {
        var _this = this;
        var page = args.object.page;
        var vm = page.bindingContext;
        var likes = vm.get("prefer");
        var near = vm.get("location");
        var time = vm.get("duration");
        var start1 = vm.get("start");
        console.log(start1);
        var strongRegex = new RegExp("^[0-9]*$");
        var regexp = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");
        var a = 1;
        console.log(regexp.test(start1));
        if (!near) {
            a = 0;
            dialogs.alert("Location is mandatory");
        }
        else if (!start1) {
            a = 0;
            dialogs.alert("Start time is mandatory");
        }
        else if (!time) {
            a = 0;
            dialogs.alert("Duration field is mandatory");
        }
        else if (!regexp.test(start1)) {
            a = 0;
            dialogs.alert("Invalid start time(use 24-hour format in hh:mm)");
        }
        else if (!strongRegex.test(time)) {
            a = 0;
            dialogs.alert("Enter a valid time duartion");
        }
        else if (time > 24) {
            a = 0;
            dialogs.alert("Time duration maximum of 24 hours allowed");
        }
        else if (time == 0) {
            a = 0;
            dialogs.alert("Cmon have some hours to explore");
        }
        if (a == 1) {
            fetch("http://ec2-18-218-173-14.us-east-2.compute.amazonaws.com:3000/four", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    interest: vm.get("prefer"),
                    neareast: vm.get("location"),
                    starttime: vm.get("start"),
                    duration: vm.get("duration")
                })
            }).then(function (r) { return r.json(); })
                .then(function (response) {
                var result = response;
                console.log(result);
                if (result.message == "failed") {
                    dialogs.alert("Enter valid place name");
                }
                else {
                    var first = result[0];
                    _this.setresult(result);
                    //game = result;
                    store_1.json.store_json = result;
                    update(result);
                    //ob.ab=result;
                    //For error debuging
                    //console.log("result is "+game);
                    //console.log("a is "+this.a);
                    console.log("Thanks");
                    page.frame.navigate("./display_plans/display-page");
                    console.log("Thanks");
                }
            }).catch(function (e) {
                dialogs.alert("Enter valid place name");
                console.log("Error: ");
                console.log(e);
            });
        }
    };
    return home_page;
}(observable_1.Observable));
exports.home_page = home_page;
function data() {
    return store_1.json.store_json;
}
exports.data = data;
function update(r) {
    //game=r;
    store_1.json.store_json = r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSw2RkFBNkY7O0FBTTdGLCtEQUE4RDtBQUc5RCxpQ0FBOEI7QUFFOUIscURBQXVEO0FBU3ZEO0lBQStCLDZCQUFVO0lBT3JDO2VBQ0ksaUJBQU87UUFFUCw2QkFBNkI7SUFHakMsQ0FBQztJQUVELHNCQUFJLGdDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQzthQUVELFVBQWMsS0FBa0M7WUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFRRCw2QkFBUyxHQUFULFVBQVUsTUFBVztRQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUdwQixDQUFDO0lBR0QsNkJBQVMsR0FBVDtRQUVHLElBQUksRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBSUQsc0NBQWtCLEdBQWxCLFVBQW1CLElBQWU7UUFDOUIsSUFBTSxNQUFNLEdBQW1CLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBTSxJQUFJLEdBQVMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBR0QseUJBQUssR0FBTCxVQUFNLElBQWU7UUFDakIsSUFBTSxNQUFNLEdBQW1CLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBTSxJQUFJLEdBQVMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUUvQixJQUFJLENBQUMsS0FB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LFNBQWdCLElBQUk7SUFHaEIsT0FBTyxZQUFJLENBQUMsVUFBVSxDQUFDO0FBRTNCLENBQUM7QUFMRCxvQkFLQztBQUVELFNBQVMsTUFBTSxDQUFDLENBQUM7SUFFYixTQUFTO0lBQ1QsWUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi8vUkVVU0VEIFNPTUUgQ09ERTogaHR0cHM6Ly9naXRodWIuY29tL2VsaGFyb255L1VkYWNpdHktUDgtTmVpZ2hib3Job29kLU1hcC1Qcm9qZWN0LUV4cGxhaW5lZFxyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHsgVG9rZW5Nb2RlbCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiLi9zdG9yZVwiXHJcblxyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgZGlzcGxheWVkRXZlbnQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIGhvbWVfcGFnZSBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGE6IGFueTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxUb2tlbk1vZGVsPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwiX2RhdGFJdGVtc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGF0YUl0ZW1zKHZhbHVlOiBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD4pIHtcclxuICAgICAgICB0aGlzLnNldChcIl9kYXRhSXRlbXNcIiwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2V0cmVzdWx0KHJlc3VsdDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hID0gcmVzdWx0O1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldHJlc3VsdCgpIHtcclxuXHJcbiAgICAgICB2YXIgYTE9dGhpcy5hO1xyXG4gICAgICAgY29uc29sZS5sb2coXCJhMSBpcyA9XCIrYTEpO1xyXG4gICAgICAgIHJldHVybiBcImhvdyBhcmUgeW91XCI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBuYXZpZ2F0ZVRvRmVhdHVyZWQoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uOiBCdXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBidXR0b24ucGFnZTtcclxuICAgICAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKFwiZGlzcGxheS1wYWdlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRhcChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zdCBidXR0b246IEJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc3QgcGFnZTogUGFnZSA9IGJ1dHRvbi5wYWdlO1xyXG5cclxuICAgICAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKFwiLi9sb2dpbi1wYWdlL2xvZ2luLXBhZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdCgpIHtcclxuXHJcbiAgICAgICAgLy8gIHJldHVybiBhYjtcclxuICAgIH1cclxuXHJcbiAgICBQb3N0KGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcclxuICAgICAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgbGlrZXMgPSB2bS5nZXQoXCJwcmVmZXJcIik7XHJcbiAgICAgICAgY29uc3QgbmVhciA9IHZtLmdldChcImxvY2F0aW9uXCIpO1xyXG4gICAgICAgIGNvbnN0IHRpbWUgPSB2bS5nZXQoXCJkdXJhdGlvblwiKTtcclxuICAgICAgICBjb25zdCBzdGFydDEgPSB2bS5nZXQoXCJzdGFydFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGFydDEpO1xyXG4gICAgICAgIGNvbnN0IHN0cm9uZ1JlZ2V4ID0gbmV3IFJlZ0V4cChcIl5bMC05XSokXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJeKFswLTldfDBbMC05XXwxWzAtOV18MlswLTNdKTpbMC01XVswLTldJFwiKTtcclxuICAgICAgICB2YXIgYSA9IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVnZXhwLnRlc3Qoc3RhcnQxKSk7XHJcblxyXG4gICAgICAgIGlmICghbmVhcikge1xyXG4gICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIkxvY2F0aW9uIGlzIG1hbmRhdG9yeVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXN0YXJ0MSkge1xyXG4gICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIlN0YXJ0IHRpbWUgaXMgbWFuZGF0b3J5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdGltZSkge1xyXG4gICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIkR1cmF0aW9uIGZpZWxkIGlzIG1hbmRhdG9yeVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFyZWdleHAudGVzdChzdGFydDEpKSB7XHJcbiAgICAgICAgICAgIGEgPSAwO1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiSW52YWxpZCBzdGFydCB0aW1lKHVzZSAyNC1ob3VyIGZvcm1hdCBpbiBoaDptbSlcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghc3Ryb25nUmVnZXgudGVzdCh0aW1lKSkge1xyXG4gICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIkVudGVyIGEgdmFsaWQgdGltZSBkdWFydGlvblwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRpbWUgPiAyNCkge1xyXG4gICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIlRpbWUgZHVyYXRpb24gbWF4aW11bSBvZiAyNCBob3VycyBhbGxvd2VkXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aW1lPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYSA9IDA7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJDbW9uIGhhdmUgc29tZSBob3VycyB0byBleHBsb3JlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYSA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcImh0dHA6Ly9lYzItMTgtMjE4LTE3My0xNC51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvZm91clwiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVyZXN0OiB2bS5nZXQoXCJwcmVmZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbmVhcmVhc3Q6IHZtLmdldChcImxvY2F0aW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0dGltZTogdm0uZ2V0KFwic3RhcnRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHZtLmdldChcImR1cmF0aW9uXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbigocikgPT4gci5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQubWVzc2FnZT09XCJmYWlsZWRcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJFbnRlciB2YWxpZCBwbGFjZSBuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdCA9IHJlc3VsdFswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHJlc3VsdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZ2FtZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBqc29uLnN0b3JlX2pzb249cmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb2IuYWI9cmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9Gb3IgZXJyb3IgZGVidWdpbmdcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IGlzIFwiK2dhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhIGlzIFwiK3RoaXMuYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGFua3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZShcIi4vZGlzcGxheV9wbGFucy9kaXNwbGF5LXBhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGFua3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIkVudGVyIHZhbGlkIHBsYWNlIG5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGEoKSB7XHJcbiAgIFxyXG5cclxuICAgIHJldHVybiBqc29uLnN0b3JlX2pzb247XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUocilcclxue1xyXG4gICAgLy9nYW1lPXI7XHJcbiAgICBqc29uLnN0b3JlX2pzb249cjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==