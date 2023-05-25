import { API, EMPTY } from "./../utils/constant";
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";
import Toasted from "vue-toasted";
import Vue from "vue";
Vue.use(Toasted, {
  iconPack: "material",
});

const VuexModule = createModule({
  namespaced: "userInfo",
  strict: false,
  target: "nuxt",
  enableLocalWatchers: true,
});
export class UserStore extends VuexModule {
  userInfo: any =
    {
      id: EMPTY,
      image: EMPTY,
      first_name: EMPTY,
      last_name: EMPTY,
      full_name: EMPTY,
      email: EMPTY,
      username: EMPTY,
      password: EMPTY,
      gender: EMPTY,
      id_card: EMPTY,
      birth_of_date: Date,
      phone_number: EMPTY,
      driven_license: EMPTY,
    } || null;
  token: any = EMPTY;
  message: any = EMPTY;
  isAdmin: Boolean = false;
  userLogin: any =
    {
      username: EMPTY,
      password: EMPTY,
    } || null;
  loading: boolean = false;
  @mutation setFullName(fullName: any) {
    this.userInfo.full_name = fullName;
  }
  @mutation setUserId(id: any) {
    this.userInfo.id = id;
  }
  @mutation setImage(image: any) {
    this.userInfo.image = image;
  }
  @mutation setUserInfo(userInfo: any) {
    this.userInfo = userInfo;
  }
  @mutation setUser(userInfo: any) {
    this.userInfo = userInfo;
  }
  @mutation setMessage(message: any) {
    this.message = message;
  }
  @mutation setIsAdmin(isAdmin: any) {
    this.isAdmin = isAdmin;
  }
  @mutation setUserLogin(userLogin: any) {
    this.userLogin = userLogin;
  }
  @mutation setToken(token: any) {
    console.log("token", token);
    this.token = token;
  }
  @mutation resetUserLogin(userLogin: any) {
    Object.assign(userLogin, this.userLogin);
  }
  @mutation resetToken(token: any) {
    token = this.token;
    token = EMPTY;
  }

  @action async handleRegister() {
    try {
      this.setFullName(
        this.userInfo.first_name + " " + this.userInfo.last_name
      );
      const res = await axios.post(
        `${process.env.baseURL + API.auth.register}`,
        this.userInfo
      );
      Vue.toasted
        .success(res.data.msg, {
          icon: "check",
        })
        .goAway(2000);
      window.location.href = "/login";
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      Vue.toasted
        .error(errMessage, {
          icon: "error_outline",
        })
        .goAway(2000);
    }
  }

  @action async handleAddUser() {
    try {
      this.setFullName(
        this.userInfo.first_name + " " + this.userInfo.last_name
      );
      const res = await axios.post(
        `${process.env.baseURL + API.user.admin_add_user}`,
        this.userInfo,
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      Vue.toasted
        .success(res.data.msg, {
          icon: "check",
        })
        .goAway(2000);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      Vue.toasted
        .error(errMessage, {
          icon: "error_outline",
        })
        .goAway(2000);
    }
  }

  @action async handleLogin() {
    try {
      const res = await axios.post(
        `${process.env.baseURL + API.auth.login}`,
        this.userLogin
      );
      Vue.toasted
        .success(res.data.msg, {
          icon: "check",
        })
        .goAway(1500);
      if (res.status === 200) {
        if (res.data.user.is_admin == 1) {
          this.setIsAdmin(true);
          this.setUserInfo(res.data.user);
          this.setToken(res.data.token);
          const token = (axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token}`);
          document.cookie = `Authorization = ${token};path=/`;
        } else {
          this.setToken(res.data.token);
          const token = (axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token}`);
          document.cookie = `Authorization = ${token};path=/`;
          this.setUserInfo(res.data.user);
          this.setIsAdmin(false);
        }
        setTimeout("location.reload(true)", 2000);
      } else {
        this.setMessage(res.data.msg);
        Vue.toasted
          .show(res.data.msg, {
            icon: "info_outline",
          })
          .goAway(1500);
      }
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      Vue.toasted
        .error(errMessage, {
          icon: "error_outline",
        })
        .goAway(3000);
    }
  }

  @action async handleLogOut() {
    try {
      this.resetToken(this.token);
      this.resetUserLogin(this.userInfo);
      const token = (axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.token}`);
      document.cookie = `Authorization = ${token};path=/`;
      this.setIsAdmin(false);
      Vue.toasted
        .success("Logout successfully", {
          icon: "check",
        })
        .goAway(1000);
      setTimeout("location.reload(true)", 2000);
    } catch (error: any) {
      Vue.toasted
        .error("Something wrong!!", {
          icon: "error_outline",
        })
        .goAway(3000);
    }
  }
  @action async removeUser(user: any) {
    try {
      await axios.delete(
        `${process.env.baseURL + API.user.admin_delete_user}`,
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
          data: {
            id: user.id,
          },
        }
      );
      Vue.toasted
        .success(
          `The user ${user.full_name} with id: ${user.id} is deleted!!!`,
          {
            icon: "check",
          }
        )
        .goAway(2000);
      setTimeout("location.reload(true)", 2500);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      Vue.toasted
        .error("Something wrong!!", {
          icon: "error_outline",
        })
        .goAway(3000);
    }
  }

  @action async updateUserAdmin(user: any) {
    try {
      var newDate = user.birth_of_date;
      const date = Date.parse(newDate) || 0;
      if (date == 0) {
        newDate = this.userInfo.birth_of_date;
      } else {
        newDate = user.birth_of_date;
      }
      await axios.put(
        `${process.env.baseURL + API.user.admin_update_user}`,
        {
          id: this.userInfo.id,
          first_name: user.first_name,
          last_name: user.last_name,
          full_name: this.userInfo.full_name,
          email: user.email,
          gender: user.gender,
          id_card: user.id_card,
          phone_number: user.phone_number,
          birth_of_date: newDate,
          driven_license: user.driven_license,
        },
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      Vue.toasted
        .success(
          `The user ${user.full_name} with id: ${user.id} is deleted!!!`,
          {
            icon: "check",
          }
        )
        .goAway(2000);
      setTimeout("location.reload(true)", 3000);
    } catch (error: any) {
      console.log(error);
      const errMessage = JSON.stringify(error.response.data.msg);
      Vue.toasted
        .error(errMessage, {
          icon: "error_outline",
        })
        .goAway(3000);
    }
  }
  @action async updateUser(user: any) {
    try {
      var newDate = user.birth_of_date;
      const date = Date.parse(newDate) || 0;
      if (date == 0) {
        newDate = this.userInfo.birth_of_date;
      } else {
        newDate = user.birth_of_date;
      }
      await axios.put(
        `${process.env.baseURL + API.user.update_user}`,
        {
          id: this.userInfo.id,
          first_name: this.userInfo.first_name,
          last_name: this.userInfo.last_name,
          full_name: this.userInfo.full_name,
          email: this.userInfo.email,
          gender: user.gender,
          id_card: user.id_card,
          phone_number: user.phone_number,
          birth_of_date: newDate,
          driven_license: user.driven_license,
        },
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      Vue.toasted
        .success(
          `The user ${user.full_name} with id: ${user.id} is updated!!!`,
          {
            icon: "check",
          }
        )
        .goAway(2000);
      setTimeout("location.reload(true)", 2500);
    } catch (error: any) {
      console.log(error);
      const errMessage = JSON.stringify(error.response.data.msg);
      Vue.toasted
        .error(errMessage, {
          icon: "error_outline",
        })
        .goAway(3000);
    }
  }

  @action async addAvatar(avatar: any) {
    try {
      var userAvatar = avatar;
      await axios.put(
        `${process.env.baseURL + API.user.update_image}`,
        {
          user_id: this.userInfo.id,
          image: userAvatar,
        },
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      Vue.toasted
        .success(`Your avatar is updated!!!`, {
          icon: "check",
        })
        .goAway(2000);
      setTimeout("location.reload(true)", 2500);
    } catch (error) {
      console.log(error);
      Vue.toasted
        .error("Something wrong!", {
          icon: "error_outline",
        })
        .goAway(3000);
    }
  }

  get gotUserInfo() {
    return this.userInfo;
  }
}
