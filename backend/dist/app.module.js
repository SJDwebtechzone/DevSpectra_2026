"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const configuration_1 = __importDefault(require("./config/configuration"));
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const projects_module_1 = require("./projects/projects.module");
const contacts_module_1 = require("./contacts/contacts.module");
const user_entity_1 = require("./users/entities/user.entity");
const project_entity_1 = require("./projects/entities/project.entity");
const contact_entity_1 = require("./contacts/entities/contact.entity");
const reviews_module_1 = require("./reviews/reviews.module");
const review_entity_1 = require("./reviews/entities/review.entity");
const google_reviews_module_1 = require("./google-reviews/google-reviews.module");
const google_review_entity_1 = require("./google-reviews/entities/google-review.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [configuration_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('database.host'),
                    port: configService.get('database.port'),
                    username: configService.get('database.user'),
                    password: configService.get('database.password'),
                    database: configService.get('database.name'),
                    entities: [user_entity_1.User, project_entity_1.Project, contact_entity_1.Contact, review_entity_1.Review, google_review_entity_1.GoogleReview],
                    synchronize: false,
                    migrationsRun: true,
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            dashboard_module_1.DashboardModule,
            projects_module_1.ProjectsModule,
            contacts_module_1.ContactsModule,
            google_reviews_module_1.GoogleReviewsModule,
            reviews_module_1.ReviewsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map