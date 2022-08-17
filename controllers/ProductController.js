const Database = require('../db/database');

processResult = (datum) => ({ ...datum, boolean: !!datum.boolean });
processInsert = (datum) => prepareDatabaseDates(datum, ['date']);

class CardController {
  constructor() {
    this.database = new Database({
      tableName: '',
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: 'product',
    });
  }

  GetBoots = async () => {
    return await this.database.GetAll('boots');
  };
}

module.exports = CardController;
