import { HomeDetailFields } from '@store/models/store/store.interface';

import { BreadCrumbProps } from '@components/generics/breadcrumb/breadcrumb.type';

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BArrowBefore: {
    label: string;
    callback?: () => void;
  };
  BArrowAfter: {
    label: string;
    callback?: () => void;
  };
  BNext: {
    label: string;
    callback?: () => void;
  };
}

interface DetailsProps {
  title: string;
  buttons: ButtonsProps;
  breadCrumb: BreadCrumbProps;
  handleData?: (fieldName: string, value: any) => void;
  handleValidation?: (fieldName: string, value: any) => void;
}

interface DetailsViewProps extends Required<DetailsProps> {
  data: HomeDetailFields;
  valid: boolean;
}

export type { DetailsProps, DetailsViewProps };