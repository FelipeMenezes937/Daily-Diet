import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('meals', (table) => {
        table.uuid('id').primary()
        table.text('title').notNullable
        table.text('description')
        table.timestamp('date')
        table.boolean('in_diet')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('transactions')
}

