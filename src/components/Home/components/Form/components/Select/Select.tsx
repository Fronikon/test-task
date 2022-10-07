import { ChangeEvent, memo } from 'react';
import { ConstructorType } from "../../../../../../types/constructor";

interface PropsType {
  constructors: ConstructorType[];
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Select: React.FC<PropsType> = memo(({
  constructors, value, setValue 
}) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(e.target.value))
  }

  return (
    <select onChange={onChange} value={value || 'none'} name="constructors">
      {constructors.map(({ id, name }) => {
        return (<option key={id} value={id}>{name}</option>)
      })}
    </select>
  )
})

export default Select
