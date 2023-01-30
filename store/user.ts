import { EMPTY } from "./../utils/constant";
import axios from "axios";
import { action, createModule, mutation } from "vuex-class-component";

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
    // function completed() {
    //   alert("Your profile was registed!!");
    // }
    // const TIME_OUT_SUBMIT = 1000;
    // this.loading = !false;
    // setTimeout(() => {
    //   this.loading = !true;
    // }, TIME_OUT_SUBMIT);
    // setTimeout(completed, TIME_OUT_SUBMIT);
    // this.setUserInfo(this.userInfo);
    try {
      this.setFullName(
        this.userInfo.first_name + " " + this.userInfo.last_name
      );
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        this.userInfo
      );
      alert(res.data.msg);
      window.location.href = "/login";
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }

  @action async handleAddUser() {
    try {
      this.setFullName(
        this.userInfo.first_name + " " + this.userInfo.last_name
      );
      const res = await axios.post(
        "http://localhost:5000/api/user/addUser",
        this.userInfo,
        {
          headers: {
            Authorization: `${document.cookie}`,
          },
        }
      );
      alert(res.data.msg);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }

  @action async handleLogin() {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        this.userLogin
      );
      alert(res.data.msg);
      if (res.status === 200) {
        if (res.data.user.is_admin == 1) {
          this.setIsAdmin(true);
          this.setUserInfo(res.data.user);
          this.setToken(res.data.token);
          const token = (axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token}`);
          document.cookie = `Authorization = ${token}`;
        } else {
          this.setToken(res.data.token);
          const token = (axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token}`);
          document.cookie = `Authorization = ${token}`;
          this.setUserInfo(res.data.user);
          this.setIsAdmin(false);
        }
        setTimeout("location.reload(true)", 100);
      } else {
        this.setMessage(res.data.message);
      }
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }

  @action async handleLogOut() {
    try {
      this.resetToken(this.token);
      this.resetUserLogin(this.userInfo);
      const token = (axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.token}`);
      document.cookie = `Authorization = ${token}`;
      this.setIsAdmin(false);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
  @action async removeUser(user: any) {
    try {
      await axios.delete("http://localhost:5000/api/user/deleteAdmin", {
        headers: {
          Authorization: `${document.cookie}`,
        },
        data: {
          id: user.id,
        },
      });
      alert(`The user ${user.full_name} with id: ${user.id} is deleted!!!`);
      setTimeout("location.reload(true)", 100);
    } catch (error: any) {
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
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
        "http://localhost:5000/api/user/updateUserAdmin",
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
      alert(`Your information is updated!!!`);
      setTimeout("location.reload(true)", 100);
    } catch (error: any) {
      console.log(error);
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
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
        "http://localhost:5000/api/user/updateUser",
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
      alert(`Your information is updated!!!`);
      setTimeout("location.reload(true)", 100);
    } catch (error: any) {
      console.log(error);
      const errMessage = JSON.stringify(error.response.data.msg);
      alert(errMessage);
    }
  }
  get gotUserInfo() {
    return this.userInfo;
  }
}
