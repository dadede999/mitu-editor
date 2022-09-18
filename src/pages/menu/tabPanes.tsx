import {
  UsergroupDeleteOutlined,
  VerifiedOutlined,
  PayCircleOutlined,
  FunctionOutlined,
} from '@ant-design/icons';
export const tabPanes = [
  {
    key: 'tpl',
    title: '模板',
    name: 'tpl',
    icon: <UsergroupDeleteOutlined />,
  },
  {
    key: 'material',
    title: '素材',
    name: 'material',
    icon: <VerifiedOutlined />,
  },
  {
    key: 'font',
    title: '文字',
    name: 'font',
    icon: <PayCircleOutlined />,
  },
  {
    key: 'image',
    title: '照片',
    name: 'image',
    icon: <FunctionOutlined />,
  },
];
