"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettingSchema = exports.UserSetting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let UserSetting = class UserSetting {
};
exports.UserSetting = UserSetting;
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Boolean)
], UserSetting.prototype, "receiveNotifications", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Boolean)
], UserSetting.prototype, "receiveEmails", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Boolean)
], UserSetting.prototype, "receiveSMS", void 0);
exports.UserSetting = UserSetting = __decorate([
    (0, mongoose_1.Schema)()
], UserSetting);
exports.UserSettingSchema = mongoose_1.SchemaFactory.createForClass(UserSetting);
//# sourceMappingURL=UserSetting.schema.js.map