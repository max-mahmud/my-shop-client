import authReducer from "./Reducers/authReducer";
import cardReducer from "./Reducers/cardReducer";
import chatReducer from "./Reducers/chatReducer";
import dashboardReducer from "./Reducers/dashboardReducer";
import homeReducer from "./Reducers/homeReducer";
import orderReducer from "./Reducers/orderReducer";

const rootReducer = {
  home: homeReducer,
  auth: authReducer,
  card: cardReducer,
  order: orderReducer,
  dashboard: dashboardReducer,
  chat: chatReducer,
};
export default rootReducer;
