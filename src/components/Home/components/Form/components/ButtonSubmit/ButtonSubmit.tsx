import { memo } from "react";

interface PropsType {
  isValid: boolean
}

export const ButtonSubmit: React.FC<PropsType> = memo(({ isValid }) => {
  return (
    <input type="submit" disabled={!isValid} />
  )
})

export default ButtonSubmit
