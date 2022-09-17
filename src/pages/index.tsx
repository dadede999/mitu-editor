import { Button, Tooltip, Modal, InputNumber, Upload, Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import MenuCom from './menu';
import styles from './index.less';
export default function IndexPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.goBack} onClick={() => {}}>
          <ArrowLeftOutlined /> 返回H5编辑器
        </div>
        <div className={styles.logo}>Dooring | 图片编辑器</div>
        <div className={styles.rightArea}>
          <Button type="primary" onClick={() => {}}>
            制作H5
          </Button>
        </div>
      </header>
      <MenuCom />
    </div>
  );
}
