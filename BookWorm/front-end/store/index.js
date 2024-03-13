// ในไฟล์ store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedInUser: null,
    loggedInUserId: null, // เพิ่ม state เก็บ ID ของผู้ใช้ที่ล็อกอินอยู่
  },
  mutations: {
    setLoggedInUser(state, { user, userId }) {
      state.loggedInUser = user;
      state.loggedInUserId = userId; // เซ็ตค่า ID ของผู้ใช้ที่ล็อกอิน
    },
    clearLoggedInUser(state) {
      state.loggedInUser = null;
      state.loggedInUserId = null; // เคลียร์ค่า ID ของผู้ใช้ที่ล็อกอิน
    },
  },
});
