import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Input, InputProps } from 'rsuite';

const TextEditor = (props: InputProps) => {
  const { defaultValue, onChange, ...rest } = props;
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>();

  const handleChange = (value, event) => {
    setValue(value);
    onChange?.(value, event);
  };

  const handleClick = () => {
    setEditable(true);
    inputRef.current?.select?.();
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={classNames('text-editor', { editable })}>
      <Input
        {...rest}
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onBlur={() => {
          setEditable(false);
        }}
      />
      <div className="text-view" onClick={handleClick}>
        {value}
      </div>
    </div>
  );
};

export default TextEditor;
