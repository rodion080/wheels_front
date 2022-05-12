import News from '../pages/News/News';
import Map from '../pages/Map/Map';
import JList from '../pages/JList/JList';
import Leaders from '../pages/Leaders/Leaders';
import Account from '../pages/Account/Account';
import AccountEdit from '../pages/Account/AccountEdit';
import JourneyInfo from '../pages/JourneyInfo/JourneyInfo';

export const publicRoutes = [
  { path: '/', component: <News/>, exact: true },
  { path: '/map', component: <Map/>, exact: true },
  { path: '/jlist', component: <JList/>, exact: true },
  { path: '/leaders', component: <Leaders/>, exact: true },
];

export const privateRoutes = [
  { path: '/account', component: <Account/>, exact: true },
  { path: '/journeyInfo/:journeyId', component: <JourneyInfo/>, exact: true },
  { path: '/account/:id/edit', component: <AccountEdit/>, exact: true },
];
