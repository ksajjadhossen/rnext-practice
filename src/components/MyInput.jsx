import { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

// const forwardedMyInput = forwardRef(MyInput);

export default MyInput;
