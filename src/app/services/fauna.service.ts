import { environment } from '../../environments/environment';
import fauna from 'faunadb';

const db = new fauna.Client({
  secret: environment.faunaSecret,
});
export default db;
