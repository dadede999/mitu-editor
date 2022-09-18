// 模板数据
interface TplObject {
  type: 'image' | 'text' | 'xxx';
  src?: string;
  width: number;
  version: string;
  visible: boolean;
}

interface TplContent {
  // 背景色
  background: string;
  // 模板内容
  objects: TplObject[];
  // 版本
  version: string;
}

interface EnumTplItem {
  id: number;
  img?: string;
  key?: any;
  label?: string[];
  name: string;
  content: TplContent;
}

export interface TplService extends Array<EnumTplItem> {}

// 模板mock数据
const tplData: EnumTplItem[] = [
  {
    id: 0,
    label: ['财经', '中美'],
    name: '模板1',
    content: {
      version: '4.6.0',
      objects: [
        {
          type: 'text',
          version: '4.6.0',
          visible: true,
          width: 195.53,
        },
        {
          type: 'image',
          version: '4.6.0',
          visible: true,
          width: 800,
        },
      ],
      background: 'rgba(255,255,255,1)',
    },
  },
];
