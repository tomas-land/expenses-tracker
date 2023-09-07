'use client';

import React from 'react';
import Link from 'next/link';
import s from '@styles/Components/_DropdownMenu.module.scss';
import { useGlobalContext } from '@context/context';

const DropdownMenu = () => {
  const { isStatsDropdownOpen } = useGlobalContext();

  return (
    <>
        <ul className={`${s.dropdown} ${isStatsDropdownOpen? s.open : ''}`}>
          <li className={s.dropdown_item}>
            <Link href={'/statistics/annual-review'}>Metinių išlaidų ataskaita</Link>
          </li>
          <li className={s.dropdown_item}>
            <Link href={'#'}>Kitos išlaidos</Link>
          </li>
          <li className={s.dropdown_item}>
            <Link href={'#'}>Kitos išlaidos</Link>
          </li>
        </ul>
    </>
  );
};

export default DropdownMenu;