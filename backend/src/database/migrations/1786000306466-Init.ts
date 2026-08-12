import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1786000306466 implements MigrationInterface {
    name = 'Init1786000306466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying, "subject" character varying NOT NULL, "message" text NOT NULL, "isRead" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "slug" character varying NOT NULL, "description" text NOT NULL, "shortDescription" text, "category" character varying NOT NULL, "technologies" text NOT NULL, "githubUrl" character varying, "liveUrl" character varying, "thumbnail" character varying, "images" text, "featured" boolean NOT NULL DEFAULT false, "displayOrder" integer NOT NULL DEFAULT '0', "status" character varying NOT NULL DEFAULT 'draft', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_96e045ab8b0271e5f5a91eae1ee" UNIQUE ("slug"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "googleReviewId" character varying, "reviewerName" character varying NOT NULL, "reviewerPhoto" character varying, "rating" integer NOT NULL, "reviewText" text NOT NULL, "reviewDate" TIMESTAMP, "isVerified" boolean NOT NULL DEFAULT false, "source" character varying NOT NULL DEFAULT 'Google', "profileUrl" character varying, "isFeatured" boolean NOT NULL DEFAULT false, "isPublished" boolean NOT NULL DEFAULT true, "displayOrder" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
