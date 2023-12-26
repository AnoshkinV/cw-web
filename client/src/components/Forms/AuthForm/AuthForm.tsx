import React from "react";
import Input from "../Input/Input";
import useInput from "../../../utils/hooks/useInput";
import { login, registration } from "../../../services/userApi";
import { useAppDispatch } from "../../../utils/hooks/useRedux";
import { setUser } from "../../../store/slices/userSlice";

interface AuthFormProps {
  title: string;
  buttonTitle: string;
  isLogin?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, buttonTitle, isLogin }) => {
  const [errors, setErrors] = React.useState([]);
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const dispatch = useAppDispatch();

  const authHandler = () => {
    if (isLogin) {
      login(email.value, password.value)
        .then((data) => dispatch(setUser(data.user)))
        .catch((e) => {
          console.log(e.response.data);
          setErrors(e.response.data);
        });
    } else {
      registration(username.value, email.value, password.value).then((data) =>
        dispatch(setUser(data.user))
      );
    }
  };
  return (
    <div className="w-screen flex justify-center items-center">
      <article
        className="flex flex-col bg-slate-800 text-slate-50 rounded-lg w-80 p-3 gap-2 mt-32"
        
      >
        <h3>
          {title}
        </h3>
        {!isLogin && (
          <Input
            onChange={username.onChange}
            placeholder="Enter your username"
            value={username.value}
            error={errors.length > 0 && true}
          />
        )}
        <Input
          onChange={email.onChange}
          placeholder="Enter your email"
          value={email.value}
          error={errors.length > 0 && true}
        />
        <Input
          onChange={password.onChange}
          placeholder="Enter your password"
          value={password.value}
          error={errors.length > 0 && true}
          password={true}
        />
        <button className="authform__btn" onClick={() => authHandler()}>
          {buttonTitle}
        </button>
      </article>
    </div>
  );
};

export default AuthForm;
