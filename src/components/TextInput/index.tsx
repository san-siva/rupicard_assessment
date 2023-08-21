import React, { useState, useEffect } from 'react';

import './styles.scss';

type Props = {
  showCharacterLimit?: boolean;
  isPhone?: boolean;
  isErrorEnabled?: boolean;
  isRequired?: boolean;
  characterLimit?: number;
  id?: string;
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string, id?: string) => void;
};

const TextInput = ({
  showCharacterLimit = false,
  isPhone = false,
  isErrorEnabled: defaultErrorState = false,
  isRequired = false,
  characterLimit = 20,
  id = '',
  title = '',
  placeholder = '',
  value: defaultValue = '',
  onChange = () => { },
}: Props) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [isErrorEnabled, toggleError] = useState<boolean>(defaultErrorState);

  const isValueValid = isPhone ? value.length === 10 : value.length > 0;

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    toggleError(defaultErrorState);
  }, [defaultErrorState]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    const sanitizedVal = isPhone ? value.replace(/\D/g, '') : value;
    if (characterLimit === 0 || sanitizedVal.length <= characterLimit) {
      setValue(sanitizedVal);
      onChange(sanitizedVal, id);
    }
  };

  return (
    <div
      className={`textinput ${isErrorEnabled && !isValueValid ? 'textinput-error' : ''
        }`}>
      <div className="textinput-header">
        <>
          <p className="bold">{title}</p>
          {isRequired && (
            <span className={`bold ${isErrorEnabled ? 'error' : ''}`}>*</span>
          )}
        </>
        <cite className="bold">
          {characterLimit > 0 && showCharacterLimit
            ? `${value.length} / ${characterLimit}`
            : ''}
        </cite>
      </div>
      <input
        tabIndex={0}
        onBlur={() => toggleError(true)}
        placeholder={placeholder}
        onChange={handleChange}
        type="text"
        value={value}
      />
    </div>
  );
};

export default TextInput;
