import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//main
import Dashbord from "../views/backend/Main/Dashbord";
// Calendar
import Calendar from "../views/backend/Main/Calendar";

// Customer
import Customer from "../views/backend/Main/Customer";
import Customeradd from "../views/backend/Main/Customeradd";
import Customerview from "../views/backend/Main/Cutomerview";
import Customeredit from "../views/backend/Main/Customeredit";

// Product
import Product from '../views/backend/App/ProductManagement/Product';
import Productadd from '../views/backend/App/ProductManagement/ProductAdd';
import ProductEdit from '../views/backend/App/ProductManagement/ProductEdit';

// ProductFront
import products from '../views/backend/Main/Product';


// order
import Order from "../views/backend/Main/Order";
import Ordernew from "../views/backend/Main/Ordernew";
import Orderdetails from "../views/backend/Main/Orderdetails";
import OrderEdit from "../views/backend/Main/OrderEdit";

// Fournisseur
import Fournisseur from "../views/backend/Main/Fournisseur";
import Fournisseurnew from "../views/backend/Main/Fournisseurnew";
import FournisseurEdit from "../views/backend/Main/FournisseurEdit";
import FournisseurView from "../views/backend/Main/FournisseurView";

//App
import UserProfile from "../views/backend/App/UserManagement/UserProfile";
import UserAdd from "../views/backend/App/UserManagement/UserAdd";
import UserList from "../views/backend/App/UserManagement/UserList";
import UserPrivacySetting from "../views/backend/App/UserManagement/UserPrivacySetting";
import UserAccountSettingList from "../views/backend/App/UserManagement/UserAccountSetting";
import UserProfileEdit from "../views/backend/App/UserManagement/UserProfileEdit";
import Chat from "../views/backend/App/Chat";
import Todo from "../views/backend/App/Todo";

//Chart
import ApexChart from "../views/backend/Chart/ApexChart";

//From
import Checkbox from "../views/backend/Forms/FormControls/Checkbox";
import Elements from "../views/backend/Forms/FormControls/Elements";
import Inputs from "../views/backend/Forms/FormControls/Inputs";
import Radio from "../views/backend/Forms/FormControls/Radio";
import FromSwitch from "../views/backend/Forms/FormControls/Switch";
import TextArea from "../views/backend/Forms/FormControls/TextArea";
import Validations from "../views/backend/Forms/FormControls/Validations";
import Datepicker from "../views/backend/Forms/Formwidget/Datepicker";
import Fileupload from "../views/backend/Forms/Formwidget/Fileupload";
import FormQuill from "../views/backend/Forms/Formwidget/FormQuill";
import Select from "../views/backend/Forms/Formwidget/Select";
import Invoiceview from "../views/backend/pages/Invoiceview";

//Extrapages
import Timeline1 from "../views/backend/pages/Timeline/Timeline1";
import Pricing1 from "../views/backend/pages/Pricing/Pricing1";
import Invoice from "../views/backend/pages/Invoice";
import FAQ from "../views/backend/pages/FAQ";
import BlankPage from "../views/backend/pages/BlankPage";
import TermsOfUse from "../views/backend/pages/Extrapages/TermsOfUse";
import PrivacyPolicy from "../views/backend/pages/Extrapages/PrivacyPolicy";

//Table
import BasicTable from "../views/backend/Table/BasicTable";
import DataTable from "../views/backend/Table/DataTable";
import EditTable from "../views/backend/Table/EditTable";

//ui
import UiAlerts from "../views/backend/ui/UiAlerts";
import UiAvatars from "../views/backend/ui/UiAvatars";
import UiBadges from "../views/backend/ui/UiBadges";
import UiBoxShadows from "../views/backend/ui/UiBoxShadows";
import UiBreadcrumbs from "../views/backend/ui/UiBreadcrumbs";
import UiButtonGroups from "../views/backend/ui/UiButtonGroups";
import UiButtons from "../views/backend/ui/UiButtons";
import UiCards from "../views/backend/ui/UiCards";
import UiCarousels from "../views/backend/ui/UiCarousels";
import UiColors from "../views/backend/ui/UiColors";
import UiEmbed from "../views/backend/ui/UiEmbed";
import UiGrids from "../views/backend/ui/UiGrids";
import UiImages from "../views/backend/ui/UiImages";
import UiListGroups from "../views/backend/ui/UiListGroups";
import UiMediaObjects from "../views/backend/ui/UiMediaObjects";
import UiModals from "../views/backend/ui/UiModals";
import UiNotifications from "../views/backend/ui/UiNotifications";
import UiPaginations from "../views/backend/ui/UiPaginations";
import UiPopOvers from "../views/backend/ui/UiPopOvers";
import UiProgressBars from "../views/backend/ui/UiProgressBars";
import UiTabs from "../views/backend/ui/UiTabs";
import UiTooltips from "../views/backend/ui/UiTooltips";
import UiTypography from "../views/backend/ui/UiTypography";

import Commande from "../views/backend/App/CommandeManagement/Commande";
import CommandeAdd from "../views/backend/App/CommandeManagement/CommandeAdd";
import CommandeView from "../views/backend/App/CommandeManagement/CommandeViews";
import CommandeEdit from "../views/backend/App/CommandeManagement/CommandeEdit";

import Facture from '../views/backend/App/FactureManagement/Facture';
import FactureAdd from '../views/backend/App/FactureManagement/FactureAdd';
import FactureView from '../views/backend/App/FactureManagement/FactureViews';
import FactureEdit from '../views/backend/App/FactureManagement/FactureEdit';

// icon-heroicon
import Heroicons from "../views/backend/Icons/Heroicons ";
import Article from "../views/backend/App/ArticleManagement/Article";
import Articleadd from "../views/backend/App/ArticleManagement/ArticleAdd";
import Articleview from "../views/backend/App/ArticleManagement/Articleview";
import Articleedit from "../views/backend/App/ArticleManagement/Articleedit";

const Layout1Route = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route path="/" exact component={Dashbord} />

          {/* App */}
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/user-add" component={UserAdd} />
          <Route path="/user-list" component={UserList} />
          <Route path="/user-privacy-setting" component={UserPrivacySetting} />
          <Route
            path="/user-account-setting"
            component={UserAccountSettingList}
          />
          <Route path="/user-profile-edit" component={UserProfileEdit} />
          <Route path="/chat" component={Chat} />
          <Route path="/todo" component={Todo} />

          {/* Chart */}
          <Route path="/chart-apex" component={ApexChart} />

          {/* From  */}
          <Route path="/form-chechbox" component={Checkbox} />
          <Route path="/form-layout" component={Elements} />
          <Route path="/form-input-group" component={Inputs} />
          <Route path="/form-radio" component={Radio} />
          <Route path="/form-switch" component={FromSwitch} />
          <Route path="/form-textarea" component={TextArea} />
          <Route path="/form-validation" component={Validations} />
          <Route path="/form-datepicker" component={Datepicker} />
          <Route path="/form-file-uploader" component={Fileupload} />
          <Route path="/form-quill" component={FormQuill} />
          <Route path="/form-select" component={Select} />

          {/* Icon */}
          <Route path="/icon-heroicon" component={Heroicons} />

          {/* Extrapages */}
          <Route path="/timeline-1" component={Timeline1} />
          <Route path="/pricing-1" component={Pricing1} />
          <Route path="/pages-invoice" component={Invoice} />
          <Route path="/pages-faq" component={FAQ} />
          <Route path="/pages-blank-page" component={BlankPage} />
          <Route path="/terms-of-service" component={TermsOfUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/invoice-view" component={Invoiceview} />

          {/* Table */}
          <Route path="/tables-basic" component={BasicTable} />
          <Route path="/tables-data" component={DataTable} />
          <Route path="/tables-editable" component={EditTable} />

          {/* Ui */}
          <Route path="/ui-alerts" component={UiAlerts} />
          <Route path="/ui-avatars" component={UiAvatars} />
          <Route path="/ui-badges" component={UiBadges} />
          <Route path="/ui-boxshadow" component={UiBoxShadows} />
          <Route path="/ui-breadcrumb" component={UiBreadcrumbs} />
          <Route path="/ui-buttons-group" component={UiButtonGroups} />
          <Route path="/ui-buttons" component={UiButtons} />
          <Route path="/ui-cards" component={UiCards} />
          <Route path="/ui-carousel" component={UiCarousels} />
          <Route path="/ui-colors" component={UiColors} />
          <Route path="/ui-embed-video" component={UiEmbed} />
          <Route path="/ui-grid" component={UiGrids} />
          <Route path="/ui-images" component={UiImages} />
          <Route path="/ui-list-group" component={UiListGroups} />
          <Route path="/ui-media-object" component={UiMediaObjects} />
          <Route path="/ui-modal" component={UiModals} />
          <Route path="/ui-notifications" component={UiNotifications} />
          <Route path="/ui-pagination" component={UiPaginations} />
          <Route path="/ui-popovers" component={UiPopOvers} />
          <Route path="/ui-progressbars" component={UiProgressBars} />
          <Route path="/ui-tabs" component={UiTabs} />
          <Route path="/ui-tooltips" component={UiTooltips} />
          <Route path="/ui-typography" component={UiTypography} />

          {/*Article*/}
          <Route path="/article" component={Article} />
          <Route path="/article-add" component={Articleadd} />
          <Route path="/article-view" component={Articleview} />
          <Route path="/article-edit/:id" component={Articleedit} />

          {/*Customer*/}
          <Route path="/customer" component={Customer} />
          <Route path="/customer-add" component={Customeradd} />
          <Route path="/customer-view" component={Customerview} />
          <Route path="/customer-edit" component={Customeredit} />

          {/*Commande*/}
          <Route path="/Commande" component={Commande} />
          <Route path="/CommandeAdd" component={CommandeAdd} />
          <Route path="/CommandeView" component={CommandeView} />
          <Route path="/CommandeEdit/:id" component={CommandeEdit} />
{/*Facture*/}
<Route path="/Facture"          component={Facture}/>
<Route path="/FactureAdd"      component={FactureAdd}/>
<Route path="/FactureView"     component={FactureView}/>
<Route path="/FactureEdit/:id"      component={FactureEdit}/>

          {/* Product */}
          <Route path="/product"            component={Product}/>
         <Route path="/product-add"        component={Productadd}/>
         <Route path="/product-edit/:id"        component={ProductEdit}/>
          {/* Order */}
          <Route path="/order" component={Order} />
          <Route path="/order-new" component={Ordernew} />
          <Route path="/order-details/:id" component={Orderdetails} />
          <Route path="/order-edit/:id" component={OrderEdit} />

          {/* Fournisseur */}
          <Route path="/fournisseur" component={Fournisseur} />
          <Route path="/fournisseur-add" component={Fournisseurnew} />
          <Route path="/fournisseur-view/:id" component={FournisseurView} />
          <Route path="/fournisseur-edit/:id" component={FournisseurEdit} />

          {/* Caldenar */}
          <Route path="/calendar" component={Calendar} />

          {/* Main */}
          <Route path="/productFront"            component={products}/>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Layout1Route;

