export const EMPTY = "";
export const EMPTY_OBJECT = {};
export const EMPTY_ARRAY = [];

export const HTTP_STATUS = {
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  EXPRESS_ERROR: 501,
};

export const EVENT = {
  CLOSE_LOADING: "closeLoading",
};

export const API = {
  user:{
    query_user: 'user/find_all',
    update_user: 'user/update_user',
    update_image: 'user/update_image',
    admin_add_user: 'user/admin_add_user',
    admin_update_user: 'user/admin_update_user',
    admin_delete_user: 'user/admin_delete_user',
  },
  auth:{
    register: 'auth/register',
    login: 'auth/login',
    verify_login: 'auth/verify_login',
    verify_login_admin: 'auth/verify_login_admin'
  },
  cars:{
    search_car: 'cars/search',
    query_car: 'cars/find_by_Id',
    admin_add_car: 'cars/admin_add_car',
    admin_query_all_car: 'cars/admin_find_all',
    admin_update_car: 'cars/admin_update_car',
    admin_delete_car: 'cars/admin_delete_car',
  },
  cars_transactions:{
    admin_query_cars_transactions: 'cars_transactions/find_all_transactions'

  },
  wallet:{
    admin_query_wallet: 'wallet/find_all',
    query_wallet: 'wallet/find'

  },
  wallet_transactions:{
    query_wallet_transactions: 'wallet_transactions/find_transaction',
    admin_query_wallet_transactions: 'wallet_transactions/find_all_transactions',

  },
  bank_account:{
    add_bank_account: 'back_account/add',
    delete_bank_account: 'bank_account/delete',
    update_bank_account: 'bank_account/update',
    query_bank_account: 'back_account/find',
    admin_query_bank_account: 'bank_account/find_all'

  },
  bank_account_tranasactions:{

  }
}
