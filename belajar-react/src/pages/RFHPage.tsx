import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// type RegisterFormSchema = {
//   username: string;
//   password: string;
// };

const registerFormSchema = z.object({
  username: z.string().min(3).max(10),
  password: z.string().min(8),
  age: z.coerce.number().min(18),
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const RFHPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterUser = (values: RegisterFormSchema) => {
    alert("Form submitted");
    console.log(values);
  };
  return (
    <div className="">
      <h1>React Hook Form</h1>

      <form
        onSubmit={form.handleSubmit(handleRegisterUser)}
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <label>
          Username : <input type="text" {...form.register("username")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.username?.message}
        </span>
        <label>
          Passowrd : <input type="text" {...form.register("password")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.password?.message}
        </span>
        <label>
          Age : <input type="number" {...form.register("age")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.age?.message}
        </span>

        <button style={{ width: "fit-content" }}>Register</button>
      </form>
    </div>
  );
};

export default RFHPage;
