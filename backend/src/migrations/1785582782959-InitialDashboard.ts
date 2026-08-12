import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialDashboard1785582782959 implements MigrationInterface {
    name = 'InitialDashboard1785582782959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dashboard_metrics" ("id" SERIAL NOT NULL, "totalUsers" integer NOT NULL DEFAULT '0', "activeProjects" integer NOT NULL DEFAULT '0', "totalRevenue" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a200fe0709a8e721c1630f80bf5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dashboard_metrics"`);
    }

}
