import {Modal, ModalBody, ModalContent} from "@heroui/modal";
import type {SidebarSubItem} from "../../../models/sidebar-item.model.ts";

type DefaultMobileSidebarChildrenListProps = {
  items: SidebarSubItem[];
  isOpen: boolean,
  subItemClickHandler: (childIndex: number) => void;
  closeCallback: () => void,
};

export function DefaultMobileSidebarChildrenList({
  items,
  isOpen,
  subItemClickHandler,
  closeCallback,
}: DefaultMobileSidebarChildrenListProps) {

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeCallback}
    >
      <ModalContent>
        {() => (
          <ModalBody>
            <div className='max-h-32 overflow-auto'>
              {
                items.map((item, index) => (
                  <p
                    key={item.key}
                    onClick={() => subItemClickHandler(index)}
                  >
                    {item.label}
                  </p>
                ))
              }
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}