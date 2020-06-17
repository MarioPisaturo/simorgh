import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { getLocalMostReadEndpoint } from '#lib/utilities/getMostReadUrls';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { UserContextProvider } from '#contexts/UserContext';
import IdxPage from '#pages/IdxPage';

const radioServiceOverride = 'dari';

/* eslint-disable react/prop-types */
const IdxPageWithContext = ({
  service = 'persian',
  pageData,
  mostReadEndpointOverride,
}) => (
  <BrowserRouter>
    <ToggleContextProvider service={service} origin="https://www.test.bbc.com">
      <RequestContextProvider
        pageType="IDX"
        service={service}
        pathname="/pathname"
        data={{ status: 200 }}
        isAmp={false}
      >
        <ServiceContextProvider service={service}>
          <UserContextProvider>
            <IdxPage
              pageData={pageData}
              mostReadEndpointOverride={
                mostReadEndpointOverride ||
                getLocalMostReadEndpoint({ service })
              }
              radioScheduleEndpointOverride={`./data/${service}/bbc_${radioServiceOverride}_radio/schedule.json`}
            />
          </UserContextProvider>
        </ServiceContextProvider>
      </RequestContextProvider>
    </ToggleContextProvider>
  </BrowserRouter>
);

export default IdxPageWithContext;
