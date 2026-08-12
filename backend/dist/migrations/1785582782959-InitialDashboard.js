"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialDashboard1785582782959 = void 0;
class InitialDashboard1785582782959 {
    name = 'InitialDashboard1785582782959';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "dashboard_metrics" ("id" SERIAL NOT NULL, "totalUsers" integer NOT NULL DEFAULT '0', "activeProjects" integer NOT NULL DEFAULT '0', "totalRevenue" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a200fe0709a8e721c1630f80bf5" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "dashboard_metrics"`);
    }
}
exports.InitialDashboard1785582782959 = InitialDashboard1785582782959;
//# sourceMappingURL=1785582782959-InitialDashboard.js.map