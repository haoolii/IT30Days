import {ProxyUser} from './ProxyUser';
import {User} from './User';

let user1:ProxyUser = new ProxyUser('12345');
user1.chat();

let user2:ProxyUser = new ProxyUser('1234');
user2.chat();
