import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  //Method
  openSideMenu: () => void;
  closeSideMenu: () => void;
  startDragging: () => void;
  endDragging: () => void;

  setIsAddingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
