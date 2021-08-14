
import { ordersCollection } from '../../firebase';

import { createBrowserHistory } from 'history';

export default createBrowserHistory;

export const addOrder = async(object) => {
    await ordersCollection.doc().set(object);

};


