import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Header from 'layouts/SharedLayout/Header/Header';
import SideBar from 'layouts/SharedLayout/SideBar/SideBar';

import { themes } from 'styles/themes';

const { s, xl } = themes.indents;
const barH = `calc(100vh - ${xl})`;

const SharedLayout = () => {
  const [barW, setBarW] = useState(`${s}`);

  return (
    <>
      <Header $height={xl} barW={barW} setBarW={setBarW} />
      <GridWrap $gtc={`${barW}  calc(100% - ${barW})`} $cg="0">
        <div style={{ height: barH }}></div>
        <SideBar $side="left" $width={barW} $height={barH} $offY={xl} />
        <Suspense fallback={<OvalLoader />}>
          <Outlet />
        </Suspense>
      </GridWrap>
    </>
  );
};

export default SharedLayout;
