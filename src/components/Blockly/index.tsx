import React, { useEffect, useRef } from 'react';
import Blockly from 'blockly/core';
import locale from 'blockly/msg/zh-hans';

import 'blockly/blocks';

Blockly.setLocale(locale);

export const Block = (props: any) => {
  const { children, ...others } = props;
  return <block is="blockly" {...others}>{children}</block>
};

export const Category = (props: any) => {
  const { children, ...others } = props;
  return <category is="blockly" {...others}>{children}</category>
};

export const Value = (props: any) => {
  const { children, ...others } = props;
  return <value is="blockly" {...others}>{children}</value>
};

export const Field = (props: any) => {
  const { children, ...others } = props;
  return <field is="blockly" {...others}>{children}</field>
};

export const Shadow = (props: any) => {
  const { children, ...others } = props;
  return <shadow is="blockly" {...others}>{children}</shadow>
};

export default (props: any) => {
  const blocklyDiv = useRef<any>();
  const toolbox = useRef<any>();

  const { initialXml, children, store, ...others } = props;

  useEffect(() => {
    store.workspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...others
    });
    if (initialXml) {
      setXml(initialXml);
    }
  }, []);

  const setXml = (xml: string) => {
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), store.workspace);
  }

  return (
    <>
      <div ref={blocklyDiv} style={{height: 500}} />
      <xml
        xmlns="https://developers.google.com/blockly/xml"
        is="blockly"
        style={{ display: 'none' }}
        ref={toolbox}
      >
        {children}
      </xml>
    </>
  )
};
