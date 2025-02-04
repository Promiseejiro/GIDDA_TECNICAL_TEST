import { CustomInput } from "../../../components";
import { CustomButton } from "../../../components/Button";
import { LoginSchema } from "../../../Schema";
import { useFormik } from "formik";
import { postRequest } from "../../../api/request";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { storeLocalUser } from "../../../utils.ts/sesstions";

export const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnMount: true,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        const response = await postRequest("/account/login", {
          email: values.email,
          password: values.password,
          type: "DEVELOPER",
        });
        if (response.statusCode === 200) {
          navigate("/dashboard");
          storeLocalUser(response.value.value);
          toast.success("Login successfull");
        } else {
          toast.error(response.value.message);
        }
      } catch (err) {
        console.error(err);
        toast.error("An unexpected error occured");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4">
      <CustomInput
        placeholder="Johndoe@gmail.com"
        name="email"
        label="Email"
        required={true}
        onChange={formik.handleChange}
        error={formik.touched.email ? formik.errors.email : ""}
      />
      <CustomInput
        placeholder="*******"
        name="password"
        label="Password"
        type="password"
        required={true}
        onChange={formik.handleChange}
        error={formik.touched.password ? formik.errors.password : ""}
      />
      <CustomButton
        isLoading={formik.isSubmitting}
        type="button"
        children="Log In"
        variant="primary"
        className="mt-6 mx-auto px-4 w-[160px]"
      />
    </form>
  );
};
