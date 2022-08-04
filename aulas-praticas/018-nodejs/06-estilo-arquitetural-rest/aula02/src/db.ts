import { Pool } from 'pg';

const connectionString = 'postgres://yhqirell:KcfLYuVz1ctN1fYq5sayU7EbV54mp_O6@kesavan.db.elephantsql.com/yhqirell';

const db = new Pool({connectionString});

export default db;