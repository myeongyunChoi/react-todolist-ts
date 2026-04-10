type ReactInputType = React.InputHTMLAttributes<HTMLInputElement>["type"];
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox">;
};
export default function Input({ ...rest }: InputProps) {
  return (
    <>
      <input {...rest}></input>
    </>
  );
}
