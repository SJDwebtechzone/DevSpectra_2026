import { MigrationInterface, QueryRunner } from "typeorm";
export declare class GoogleReviews1786002048643 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
