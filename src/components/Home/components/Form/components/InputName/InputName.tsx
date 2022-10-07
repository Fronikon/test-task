import { ChangeEvent, memo } from "react";

interface PropsType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const InputName: React.FC<PropsType> = memo(({ value, setValue }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <input onChange={onChange} value={value} type="text" />
  )
})

export default InputName
