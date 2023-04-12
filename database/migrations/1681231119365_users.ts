import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string("name").notNullable();
      table.integer("age").notNullable();
      table.string("password");
      table.string("email").notNullable();
      table.string("username").notNullable();
      table.timestamps(true);
    });
  }
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
