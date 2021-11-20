import React from 'react';
import { useRouter } from 'next/router';

import { Home } from '@views/home';
import { HomeProps } from '@views/home/home.type';
import { CardProps } from '@components/generics/card/card.type';

const HomeContainer = (props: HomeProps): React.ReactElement => {
  const { BLogin, BLogo, BShowImovels } = props.header.buttons;

  const [cards, setCards] = React.useState<CardProps[]>([]);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    setCards([
      {
        images: [
          'https://via.placeholder.com/269x143?text=1',
          'https://via.placeholder.com/269x143?text=2',
          'https://via.placeholder.com/269x143?text=3',
        ],
        variant: 'primary',
        size: 'small',
        title: 'A partir de',
        address: 'SQNW 303 BLOCO',
        value: 5000,
        neighborhood: 'Noroeste, Brasilia',
        quantityRoom: 5,
        quantityGarage: 1,
        quantityBathroom: 1,
        buttons: {
          BCircleWhatsApp: {},
          BNavigation: {
            typeSize: 'small',
          },
          BContact: {
            label: 'Contatar',
          },
        },
        name: 'John',
        phoneNumber: '(41) 99119-9642',
      },
    ]);
  }, []);

  const router = useRouter();

  BLogo.callback = () => {
    console.log(1);
  };

  BLogin.callback = () => {
    console.log(2);
  };

  BShowImovels.callback = () => {
    router.push('/list/anuncements');
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return (
    <Home
      userName="John"
      cards={cards}
      isLogged={false}
      {...props}
      handleData={handleData}
    />
  );
};

export default HomeContainer;
