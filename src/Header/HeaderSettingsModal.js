import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import settingsIcon from '../icons/settings.svg';
import EditorThemeChanger from "../Editor/EditorThemeChanger";
import LayoutChanger from "../Layouts/LayoutChanger";

function HeaderSettingsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span className="empty-focus p-2 mb-0 ms-1 c-pointer" onClick={handleShow}>
        <img alt="settings icon" width="24px" src={settingsIcon} />
      </span>

      <Modal contentClassName="" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editor Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="list-group d-flex flex-row justify-content-between">
            <div className="p-1 fs-5">theme:</div>
            <EditorThemeChanger />
          </div>
          <div className="list-group d-flex flex-row justify-content-between">
            <div className="p-1 fs-5">layout:</div>
            <LayoutChanger />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HeaderSettingsModal;