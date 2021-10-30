interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BArrowBefore: {
    label: string;
    callback?: () => void;
  };
  BLogin: {
    label: string;
    callback?: () => void;
  };
}

interface GenericProps {
  title: string;
  buttons: ButtonsProps;
  type: 'create' | 'get' | 'update';
  handleData?: (fieldName: string, value: any) => void;
}

export type { ButtonsProps, GenericProps };
