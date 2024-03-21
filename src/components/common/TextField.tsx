import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextField(props: TextFieldProps) {
   const {...rest} = props;

   return (
      <div className="">
         <input
            className="w-full placeholder:font-normal placeholder:text-primary-600 leading-[1.44em] border border-primary-400 focus:border-primary-600 duration-200 rounded-md py-[18px] px-5"
            {...rest}
         />
      </div>
   );
}

export default TextField;
