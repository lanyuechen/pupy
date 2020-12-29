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
        <Category name="变量">
          <Block type="variables_get" />
          <Block type="variables_set" />
          <Block type="variables_get_dynamic" />
          <Block type="variables_set_dynamic" />
        </Category>
        <Category name="文本">
          <Block type="text">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
          <Block type="text_multiline" />
          <Block type="text_join" />
          <Block type="text_create_join_container" />
          <Block type="text_create_join_item" />
          <Block type="text_append" />
          <Block type="text_length" />
          <Block type="text_isEmpty" />
          <Block type="text_indexOf" />
          <Block type="text_charAt" />
        </Category>
        <Category name="数学">
          <Block type="math_number" />
          <Block type="math_arithmetic" />
          <Block type="math_single" />
          <Block type="math_trig" />
          <Block type="math_constant" />
          <Block type="math_number_property" />
          <Block type="math_change" />
          <Block type="math_round" />
          <Block type="math_on_list" />
          <Block type="math_modulo" />
          <Block type="math_constrain" />
          <Block type="math_random_int" />
          <Block type="math_random_float" />
          <Block type="math_atan2" />
        </Category>
        <Category name="逻辑">
          <Block type="controls_if" />
          <Block type="controls_ifelse" />
          <Block type="logic_boolean" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="logic_null" />
          <Block type="logic_ternary" />
        </Category>
        <Category name="循环">
          <Block type="controls_repeat" />
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="controls_whileUntil" />
          <Block type="controls_for" />
          <Block type="controls_forEach" />
          <Block type="controls_flow_statements" />
        </Category>
        <Category name="列表">
          <Block type="lists_create_empty" />
          <Block type="lists_repeat" />
          <Block type="lists_reverse" />
          <Block type="lists_isEmpty" />
          <Block type="lists_length" />
        </Category>
        <Category name="颜色">
          <Block type="colour_picker" />
          <Block type="colour_random" />
          <Block type="colour_rgb" />
          <Block type="colour_blend" />
        </Category>
      </Blockly>
    </PageContainer>
  );
};
