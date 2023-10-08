import { MigrationInterface, QueryRunner } from "typeorm"

export class AddCartTable1696796581754 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
      `CREATE TABLE "shopping_carts" (
        "id"           UUID         NOT NULL DEFAULT GEN_RANDOM_UUID() PRIMARY KEY,
        "user_id"      UUID         NOT NULL,
        "item_id"      UUID         NOT NULL,
        "amount"       INT          NOT NULL CHECK (amount > 0)
      );`
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
      `DELETE TABLE "shopping_carts";`
    }

}
