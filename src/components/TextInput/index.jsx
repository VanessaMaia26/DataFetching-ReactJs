import './styles.css';

export const TextInput = ({ actionFn, inputValue }) => {
    return (
        <input
          className='text-input'
          onChange={actionFn}
          type="search"
          value={inputValue}
          placeholder="Type your search"
        />
    );
}