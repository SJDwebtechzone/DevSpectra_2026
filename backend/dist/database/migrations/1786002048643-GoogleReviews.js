"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleReviews1786002048643 = void 0;
class GoogleReviews1786002048643 {
    name = 'GoogleReviews1786002048643';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP CONSTRAINT "google_reviews_rating_check"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP CONSTRAINT "google_reviews_google_review_id_key"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "google_review_id"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "reviewer_name"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "reviewer_photo"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "review_text"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "review_date"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "is_verified"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "source"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "profile_url"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "is_featured"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "is_published"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "display_order"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "googleReviewId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD CONSTRAINT "UQ_39e61966943680df60c2181a934" UNIQUE ("googleReviewId")`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "authorName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "authorPhoto" character varying`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "profilePhotoUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "reviewText" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "relativeTime" character varying`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "reviewTimestamp" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "language" character varying`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "authorUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "isPublished" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "rating" integer NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "rating" smallint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "isPublished"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "authorUrl"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "language"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "reviewTimestamp"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "relativeTime"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "reviewText"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "profilePhotoUrl"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "authorPhoto"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "authorName"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP CONSTRAINT "UQ_39e61966943680df60c2181a934"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" DROP COLUMN "googleReviewId"`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "display_order" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "is_published" boolean DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "is_featured" boolean DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "profile_url" text`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "source" character varying(50) DEFAULT 'Google'`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "is_verified" boolean DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "review_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "review_text" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "reviewer_photo" text`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "reviewer_name" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD "google_review_id" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD CONSTRAINT "google_reviews_google_review_id_key" UNIQUE ("google_review_id")`);
        await queryRunner.query(`ALTER TABLE "google_reviews" ADD CONSTRAINT "google_reviews_rating_check" CHECK (((rating >= 1) AND (rating <= 5)))`);
    }
}
exports.GoogleReviews1786002048643 = GoogleReviews1786002048643;
//# sourceMappingURL=1786002048643-GoogleReviews.js.map