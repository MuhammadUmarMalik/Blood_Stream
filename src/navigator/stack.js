import Home from '../screens/Home';
import Posts from '../screens/FindDonor';
import Rating from '../screens/Notification';
import Accounts from '../screens/Accounts';
const stack = [
  {
    id:1,
    title: Home,
    component: Home,
  },
  {
    id:2,
    title: Rating,
    component: Rating
  },
  {
    id:3,
    title: Posts,
    component: Posts,
  },
  {
    id:4,
    title: Accounts,
    component:Accounts,
  },

];

export {stack};