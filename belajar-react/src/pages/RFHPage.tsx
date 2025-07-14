import { useForm } from "react-hook-form";
const RFHPage = () => {
  const form = useForm();
  return (
    <div>
      <h1>React Hook Form</h1>

      <form
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <label>
          Username : <input type="text" {...form.register("username")} />
        </label>
        <label>
          Passowrd : <input type="text" {...form.register("password")} />
        </label>
      </form>
    </div>
  );
};

export default RFHPage;
