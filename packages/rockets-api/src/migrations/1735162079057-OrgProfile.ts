import { MigrationInterface, QueryRunner } from "typeorm";

export class OrgProfile1735162079057 implements MigrationInterface {
    name = 'OrgProfile1735162079057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "org_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" text, "contactEmail" character varying(100), "contactPhone" character varying(15), "orgId" character varying NOT NULL, CONSTRAINT "PK_2b88b6ee8b5cd577683d220b7e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "org" ADD "profileId" uuid`);
        await queryRunner.query(`ALTER TABLE "org" ADD CONSTRAINT "UQ_e9a67a6871edb1889fb88cd7b5b" UNIQUE ("profileId")`);
        await queryRunner.query(`ALTER TABLE "org" ADD CONSTRAINT "FK_e9a67a6871edb1889fb88cd7b5b" FOREIGN KEY ("profileId") REFERENCES "org_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "org" DROP CONSTRAINT "FK_e9a67a6871edb1889fb88cd7b5b"`);
        await queryRunner.query(`ALTER TABLE "org" DROP CONSTRAINT "UQ_e9a67a6871edb1889fb88cd7b5b"`);
        await queryRunner.query(`ALTER TABLE "org" DROP COLUMN "profileId"`);
        await queryRunner.query(`DROP TABLE "org_profile"`);
    }

}
