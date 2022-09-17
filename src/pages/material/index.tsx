import { Select, Radio, Image, List, Tooltip } from 'antd';
import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { fabric } from 'fabric';
import styles from './index.less';
import { materialData } from '@/mock';
const { Option } = Select;
const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const onRadioChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};
interface IProps {
  canvasRef: React.RefObject<any>;
}

const Material: React.FC = (props: IProps) => {
  const { canvasRef } = props;

  const insertMaterial = (item) => {
    const { img } = item;
    fabric.Image.fromURL(
      img,
      (oImg: any) => {
        oImg.scale(0.1); //图片缩小10倍
        canvasRef.current?.add(oImg);
      },
      {
        crossOrigin: 'Anonymous',
      },
    );
  };
  return (
    <>
      <div className={styles.simpleTit}>素材库</div>
      <div className={styles.operationArea}>
        <Select
          showSearch
          placeholder="搜索素材"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>

        <Radio.Group onChange={onRadioChange} defaultValue="all">
          <Radio.Button value="all">全部</Radio.Button>
          <Radio.Button value="b">为你推荐</Radio.Button>
          <Radio.Button value="c">图标</Radio.Button>
          <Radio.Button value="d">更多</Radio.Button>
        </Radio.Group>

        <div>
          <div>图标</div>
          <List
            grid={
              {
                //   gutter: 16,
                //   xs: 1,
                //   sm: 2,
                //   md: 4,
                //   lg: 4,
                //   xl: 6,
                //   xxl: 3,
              }
            }
            dataSource={materialData}
            renderItem={(item) => (
              <List.Item>
                <Image.PreviewGroup>
                  <Tooltip
                    placement="bottom"
                    title="点击使用"
                    onClick={() => insertMaterial(item)}
                  >
                    <Image
                      width={50}
                      src={item.img}
                      crossOrigin="anonymous"
                      preview={false}
                    />
                  </Tooltip>
                </Image.PreviewGroup>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Material;
