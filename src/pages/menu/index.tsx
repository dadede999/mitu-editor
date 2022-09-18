import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Tabs, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import App from '../App';
import { tabPanes } from './tabPanes';
import { WithModelFactory } from './content';
import styles from './index.less';
import Tpl from './siderBar/tpl';
import Material from './siderBar/material';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const MenuCom: React.FC = () => {
  const [canvasRef, setCanvasRef] = useState({} as Record<string, unknown>);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Tabs
        tabPosition={'left'}
        // items={new Array(3).fill(null).map((_, i) => {
        //   const id = String(i + 1);
        //   return {
        //     label: `Tab ${id}`,
        //     key: id,
        //     children: `Content of Tab ${id}`,
        //   };
        // })}
      >
        {tabPanes.map((pane) => (
          <Tabs.TabPane tab={pane.title} key={pane.key}>
            {pane.name === 'tpl' && <Tpl canvasRef={canvasRef} />}
            {pane.name === 'material' && <Material canvasRef={canvasRef} />}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <App setCanvasRef={setCanvasRef} />
    </Layout>
  );
};

export default MenuCom;
