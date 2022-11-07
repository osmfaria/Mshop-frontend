import {StyledInput} from "./styles"

export const Input = ({name, register, error,placeholder='',type, size,...rest}) => {


  return (
<>
<StyledInput border="0px solid red" type={type} size={size} {...rest} {...register(name)} placeholder={placeholder}/>
    <div>{!!error && <span> {error}</span>}</div>
</>
  );
};