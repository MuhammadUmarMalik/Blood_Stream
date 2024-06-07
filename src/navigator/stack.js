import Home from '../screens/Home';
import Posts from '../screens/FindDonor';
import Rating from '../screens/Notification';
import Accounts from '../screens/Accounts';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
const stack = [
  {
    id: 1,
    title: Signin,
    component: Signin,
  },
  {
    id: 2,
    title: Signup,
    component: Signup,
  },
  {
    id: 3,
    title: Home,
    component: Home,
  },
  {
    id: 4,
    title: Rating,
    component: Rating,
  },
  {
    id: 5,
    title: Posts,
    component: Posts,
  },
  {
    id: 6,
    title: Accounts,
    component: Accounts,
  },
];

export {stack};