import axios from "~/utils/myAxios";

const BASE_URL = "http://localhost:5000/api/";

export default {
  async checkAdmin(isLogin, userInfo) {
    try {
      if (document.cookie) {
        const res = await axios.get(`${BASE_URL}auth/verify_login_admin`, {
          headers: {
            Authorization: `${document.cookie}`,
          },
        });
        isLogin = true;
        userInfo = res.data.data;
      } else {
        this.$router.push("/login");
        setTimeout("location.reload(true)", 100);
      }
    } catch (error) {
      isLogin = false;
      this.$router.push("/login");
      setTimeout("location.reload(true)", 100);
    }
  },
};
