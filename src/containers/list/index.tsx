import React from 'react';
import { useRouter } from 'next/router';

import { List } from '@views/list';

import { ListProps } from '@views/list/list.type';
import { UserProps } from '@components/generics/table/table.type';
import { CardProps } from '@components/generics/card/card.type';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';
import { useMobile } from '@hooks/mobile';

const ListContainer = (props: ListProps): React.ReactElement => {
  const {
    BLogin,
    BAnnouncements,
    BCreateAnnouncement,
    BCreateUser,
    BListUsers,
    BLogo,
    BLogout,
    BUpdatePerfil,
  } = props.buttons;

  const { isMobile } = useMobile();

  const pubsStore = useSelector((state: RootState) => state.publication);
  const userStore = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<Dispatch>();

  const [users, setUsers] = React.useState<UserProps[]>([]);
  const [cards, setCards] = React.useState<CardProps[]>([]);
  const [page, setPage] = React.useState(1);

  const router = useRouter();

  React.useEffect(() => {
    (async () => {
      await dispatch.publication.getAllByPage(page);
      // Need to adjust card component
      setCards(
        pubsStore.publications.map((publication) => ({
          variant: 'secondary',
          size: isMobile() ? 'small' : 'normal',
          views: true,
          functionalities: false,
          buttons: {
            googleMap: {
              label: 'Google Map',
              size: 'medium',
            },
            visualize: {
              size: 'medium',
            },
          },
          publication,
        }))
      );
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pubsStore.publications.length]);

  BLogin.callback = () => {
    router.push('/login');
  };

  BAnnouncements.callback = () => {
    router.push('/list/announcements');
  };

  BCreateAnnouncement.callback = () => {
    router.push('/announcement/address');
  };

  BCreateUser.callback = () => {
    router.push('/create-user');
  };

  BListUsers.callback = () => {
    router.push('/list/users');
  };

  BLogo.callback = () => {
    router.push('/');
  };

  BLogout.callback = () => {
    dispatch.user.clear();
  };

  BUpdatePerfil.callback = () => {
    router.push('/update-user');
  };

  return (
    <List
      userName={userStore?.user?.firstName}
      isLogged={!!userStore?.user?.id}
      render={{ admin: true, user: false }}
      users={users}
      cards={cards}
      quantity={cards.length || users.length}
      isMobile={isMobile()}
      {...props}
    />
  );
};

export default ListContainer;
