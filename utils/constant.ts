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
    admin_add_car: 'cars/addCarAdmin',
    admin_update_car: 'cars/updateCarAdmin',
    admin_delete_car: 'cars/deleteAdmin',
  },
  cars_transactions:{

  },
  wallet:{

  },
  wallet_transactions:{

  },
  bank_account:{

  },
  bank_account_tranasactions:{

  }
}
