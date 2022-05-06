import News from '../pages/News/News';
import Map from '../pages/Map/Map';
import JList from '../pages/JList/JList';
import Leaders from '../pages/Leaders/Leaders';
import Account from '../pages/Account/Account';
import AccountEdit from '../pages/Account/AccountEdit';
// import PartJourneys from '../pages/Account/AccountMenu/PartJourneys/PartJourneys';
// import AdminJourneys from '../pages/Account/AccountMenu/AdminJourneys/AdminJourneys';
// import Admin from '../pages/Account/AccountMenu/Admin/Admin';
// import { NavActive } from '../types/Account';
//
// const PartJourneyAccount = () => (
//   <Account navActive={NavActive.PART_JOURNEYS}>
//     <PartJourneys />
//   </Account>
// );
//
// const AdminJourneysAccount = () => (
//   <Account navActive={NavActive.ADMIN_JOURNEYS}>
//     <AdminJourneys />
//   </Account>
// );
//
// const AdminAccount = () => (
//   <Account navActive={NavActive.ADMIN}>
//     <Admin />
//   </Account>
// );

export const publicRoutes = [
  { path: '/', component: <News/>, exact: true },
  { path: '/map', component: <Map/>, exact: true },
  { path: '/jlist', component: <JList/>, exact: true },
  { path: '/leaders', component: <Leaders/>, exact: true },
];

export const privateRoutes = [
  { path: '/account', component: <Account/>, exact: true },
  // { path: '/account/adminJourneys', component: <AdminJourneysAccount/>, exact: true },
  // { path: '/account/admin', component: <AdminAccount/>, exact: true },
  { path: '/account/:id/edit', component: <AccountEdit/>, exact: true },
];
