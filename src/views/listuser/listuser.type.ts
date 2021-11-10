import { TableProps, UserProps } from '@components/generics/table/table.type';

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BAnuncement: {
    label: string;
    callback?: () => void;
  };
  BCreateAnuncement: {
    label: string;
    callback?: () => void;
  };
  BCreateUser: {
    label: string;
    callback?: () => void;
  };
  BListUsers: {
    label: string;
    callback?: () => void;
  };
  BLogout: {
    label: string;
    callback?: () => void;
  };
  BSettings: {
    label: string;
    callback?: () => void;
  };
}

interface ListUserProps {
  user: string;
  buttons: ButtonsProps;
  users: UserProps[];
}

export type { ListUserProps };
