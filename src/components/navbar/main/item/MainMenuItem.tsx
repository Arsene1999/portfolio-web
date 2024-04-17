import { Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IMainMenuItem } from './interfaces';

const MainMenuItem: FC<IMainMenuItem> = ({
  children,
  active,
  onClick,
  to = '/',
  ...rest
}) => {
  return (
    <Link
      href={to}
      justifyContent={'center'}
      alignItems={'center'}
      display={'flex'}
      borderBottom={`3px solid ${active ? 'green' : 'transparent'}`}
      style={{ textDecoration: 'none' }}
      onClick={onClick}
    >
      <Text display="block" fontSize={'medium'} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MainMenuItem;
