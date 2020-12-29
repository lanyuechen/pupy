import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Blockly, { Block, Value, Shadow, Field, Category } from '@/components/Blockly';
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
        <Category name="Logic">
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="logic_boolean" />
          <Block type="logic_null" disabled="true" />
          <Block type="logic_ternary" />
        </Category>
        <Category name="Controls">
          <Block type="controls_ifelse" />
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
        </Category>
        <Category name="Text">
          <Block type="text_charAt">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
        </Category>
      </Blockly>
    </PageContainer>
  );
};
