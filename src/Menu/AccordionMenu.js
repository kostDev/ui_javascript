import { memo, useMemo } from "react";
import { Accordion, Button } from "react-bootstrap";
import {
  VariablesSection,
  ObjectSection,
  TemplatesSection,
  DEFAULT_ACTIVE_KEY_VARIABLE
} from "../consts";

function RenderAccordionSection(data, setElement) {
  const { key, title, subTitle, createNew, list } = data;
  const renderList = useMemo(() => {
    return list.map((obj) => (
      <li
        key={obj.name}
        className={"list-group-item " + obj.uiClass}
        onClick={() => setElement(obj)}
      >
        {obj.name}
      </li>
    ));
  }, [list]);
  return (
    <Accordion.Item eventKey={key}>
      <Accordion.Header className="bg-warning">
        {title}
        <span className="ps-1 opacity-25">{subTitle}</span>
      </Accordion.Header>
      <Accordion.Body>
        <ul className="list-group c-pointer">
          {createNew && (
            <Button className="btn-warning list-group-item-warning mb-2">
              Create New
            </Button>
          )}
          {renderList}
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
}

function AccordionMenu({ setElement }) {
  // console.log("render AccordionMenu");
  return (
    <Accordion defaultActiveKey={DEFAULT_ACTIVE_KEY_VARIABLE} className="mb-2">
      {RenderAccordionSection(VariablesSection, setElement)}
      {RenderAccordionSection(ObjectSection, setElement)}
      {RenderAccordionSection(TemplatesSection, setElement)}
    </Accordion>
  );
}

export default memo(AccordionMenu);
