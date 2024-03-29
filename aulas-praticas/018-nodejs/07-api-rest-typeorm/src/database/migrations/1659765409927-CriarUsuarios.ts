import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarUsuarios1659765409927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                        isNullable: true
                    },
                    {
                        name: 'nome',
                        type: 'string',
                        isNullable: true
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: true
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
