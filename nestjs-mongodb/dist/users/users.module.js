"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const User_schema_1 = require("../schemas/User.schema");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const UserSetting_schema_1 = require("../schemas/UserSetting.schema");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: User_schema_1.User.name,
                    schema: User_schema_1.userSchema,
                },
                {
                    name: UserSetting_schema_1.UserSetting.name,
                    schema: UserSetting_schema_1.UserSettingSchema
                },
            ])
        ],
        providers: [users_service_1.UserService],
        controllers: [users_controller_1.UserController]
    })
], UserModule);
//# sourceMappingURL=users.module.js.map