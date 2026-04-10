type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: "checkbox";
  parentClassName: string;
};
export default function Checkbox({
  parentClassName,
  children,
  ...rest
}: CheckboxProps) {
  return (
    <>
      <div className={parentClassName}>
        <input {...rest} />
        <label>{children}</label>
      </div>
    </>
  );
}
