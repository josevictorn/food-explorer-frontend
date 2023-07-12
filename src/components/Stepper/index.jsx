import { FiPlus, FiMinus } from 'react-icons/fi';
import { StepperContainer } from './styles';

export function Stepper({ amount, handleAddItem, handleRemoveItem }) {
  return(
    <StepperContainer>
      <button onClick={handleRemoveItem}>
        <FiMinus size={18} />
      </button>

      <span>{amount.toString().padStart(2, '0')}</span>

      <button onClick={handleAddItem}>
        <FiPlus size={18} />
      </button>
    </StepperContainer>
  )
}