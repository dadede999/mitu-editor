import { Select } from 'antd';
import React from 'react';
import { fontMap } from './constant';

const { Option } = Select;

interface fontProps {
  handleFontChange: () => void;
}

const Font: React.FC = (props: fontProps) => {
  const { handleFontChange } = props;
  return (
    <>
      <div>字体: </div>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleFontChange}
      >
        {fontMap.map((option: { name: string; value: string }, key: number) => (
          <Option key={key} value={option.value}>
            {option.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default Font;
