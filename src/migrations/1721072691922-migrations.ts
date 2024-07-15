import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1721072691922 implements MigrationInterface {
    name = 'Migrations1721072691922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_7c134d062947a53f89064491e63" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Todo"`);
    }

}
