import manageENSRoutes from './ManageENS/routes';
import buySubDomainRoutes from './BuySubdomain/routes';
import scheduleTransactionRoutes from './ScheduleTransaction/routes';
import makerDaiRoutes from './MakerDai/routes';
import makerSaiRoutes from './MakerSai/routes';
import ambrpayRoutes from './Ambrpay/routes';
import aaveRoutes from './Aave/routes';
import rayRoutes from './RAY/routes';

const routes = {
  manageENS: manageENSRoutes,
  buySubDomain: buySubDomainRoutes,
  scheduleTransaction: scheduleTransactionRoutes,
  makerDaiRoutes: makerDaiRoutes,
  aaveDLP: aaveRoutes,
  makerSaiRoutes: makerSaiRoutes,
  amberpay: ambrpayRoutes,
  ray: rayRoutes
};

export default routes;
