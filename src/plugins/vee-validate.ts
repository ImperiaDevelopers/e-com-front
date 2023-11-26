import { email, max, min, required } from "@vee-validate/rules";
import { ErrorMessage, Field, Form, configure, defineRule } from "vee-validate";

export default {
  install(app) {
    app.component("VeeForm", Form);
    app.component("VeeField", Field);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("boolean", (value) => {
      if (value == false || value == true) {
        return "";
      } else {
        return "The field Day is required";
      }
    });

    configure({
      generateMessage: (ctx) => {
        const message = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          email: `The field ${ctx.field} is email`,
        };
        return message[ctx.rule.name]
          ? message[ctx.rule.name]
          : `${ctx} kiritilmadi`;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnModelUpdate: true,
      validateOnInput: true,
    });
  },
};
