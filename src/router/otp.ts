export default {
  path: "/otp/:phone",
  name: "otp",
  component: () => import("../pages/LogIn/OtpPage.vue"),
};
