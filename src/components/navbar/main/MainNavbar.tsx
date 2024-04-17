import React, { FC, useEffect, useState } from 'react';
import { IMainNavbar } from './interfaces';
import { Box, Flex } from '@chakra-ui/react';
import MainMenuItem from './item/MainMenuItem.tsx';
import { ActiveItem, isActiveItem } from '../../../types.ts';

const MainNavbar: FC<IMainNavbar> = ({
  navBarData,
  rightComponent,
}): JSX.Element => {
  const [activeNavItem, setActiveNavItem] = useState<ActiveItem>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          if (isActiveItem(section.id)) setActiveNavItem(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      position={'fixed'}
      backgroundColor={'transparent'}
      left={0}
      right={0}
      top={5}
    >
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        h={12}
        minWidth={'fit-content'}
        justifyContent={'center'}
        alignItems={'center'}
        paddingRight={4}
        paddingLeft={4}
        gap={32}
        shadow={'lg'}
        backgroundColor={'white'}
      >
        <Box>Logo</Box>
        <Flex gap={4} h="100%">
          {navBarData.map((n, index) => (
            <MainMenuItem
              children={n.text}
              active={activeNavItem === n.id}
              to={n.href}
              onClick={() => setActiveNavItem(n.id)}
            />
          ))}
        </Flex>
      </Flex>
      {rightComponent}
    </Flex>
  );
};

export default MainNavbar;
