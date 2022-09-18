import { Select, Radio, Image, List, Tooltip } from 'antd';
import React, { useState } from 'react';
import { fabric } from 'fabric';
import styles from './index.less';
import { materialData } from '@/mock';

interface IProps {
  canvasRef: React.RefObject<any>;
}

const Tpl: React.FC = (props: IProps) => {
  const { canvasRef } = props;
  const [tpls, setTpls] = useState<any>(() => {
    const tpls = JSON.parse(localStorage.getItem('tpls') || '{}');

    return Object.keys(tpls).map((item) => ({ t: tpls[item].t, id: item }));
  });

  const renderJson = (id: string) => {
    const tpls = JSON.parse(localStorage.getItem('tpls') || '{}');
    canvasRef.current.clear();
    canvasRef.current.backgroundColor = 'rgba(255,255,255,1)';
    canvasRef.current.loadFromJSON(
      tpls[id].json,
      canvasRef.current.renderAll.bind(canvasRef.current),
    );
  };
  return (
    <>
      <main className={styles.contentWrap}>
        <section className={styles.tplWrap}>
          <div className={styles.simpleTit}>模版素材</div>
          <div className={styles.tpls}>
            {tpls.map((item: { id: string; t: string }, i: number) => {
              return (
                <div
                  key={i}
                  className={styles.tplItem}
                  onClick={() => renderJson(item.id)}
                >
                  <img
                    src={
                      JSON.parse(localStorage.getItem('tplImgs') || '{}')[
                        item.id
                      ]
                    }
                    alt=""
                  />
                  <div>{item.t}</div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Tpl;
