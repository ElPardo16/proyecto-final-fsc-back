import { useForm } from "react-hook-form";
import { FaUserCircle, FaLock } from "react-icons/fa";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => 
  console.log(e);


  return (
    <div className="container">
      <div className="login_img">
        <img src="./img/logo.png" width="200" alt="logo" />
      </div>

      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user">
            <FaUserCircle />
            <input
              type="text"
              autoComplete="off"
              name="email"
              placeholder="ejemplo@gmail.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Necesitas este campo",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato no es correcto",
                },
              })}
            />

            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="password">
            <FaLock />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                  message: "La contraseña debe tener al menos 8 caracteres y ser alfanumerica letras mayusculas minusculas y numero",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button className="button-login">Ingresar</button>
        </form>
      </div>
    </div>
  );
}
