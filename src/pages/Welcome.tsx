import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Blockly, { Block } from '@/components/Blockly';
import BlocklyJS from 'blockly/javascript';
import { Button } from 'antd';

export default (): React.ReactNode => {
  const ref = useRef<any>({});

  const generateCode = () => {
    const code = BlocklyJS.workspaceToCode(ref.current.workspace);
    console.log('>>>', code);
  }

  return (
    <PageContainer>
      <Button onClick={generateCode}>获取</Button>
      <Blockly store={ref.current}>
        <Block type="controls_ifelse" />
      </Blockly>
    </PageContainer>
  );
};
