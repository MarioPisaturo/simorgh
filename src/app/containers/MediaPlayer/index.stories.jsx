import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import AmpDecorator from '../../../../.storybook/helpers/ampDecorator';
import MediaPlayerContainer from '.';
import { validVideoWithCaptionBlock } from './fixtureData';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { ToggleContext } from '#contexts/ToggleContext';
import { ARTICLE_PAGE } from '#app/routes/utils/pageTypes';

// eslint-disable-next-line react/prop-types
const Component = ({ service, isAmp = false }) => {
  return (
    <RequestContextProvider
      isAmp={isAmp}
      service={service}
      platform={isAmp ? 'amp' : 'canonical'}
      pathname="/pathname"
      id="c3wmq4d1y3wo"
      pageType={ARTICLE_PAGE}
      bbcOrigin="https://www.test.bbc.com"
    >
      <ServiceContextProvider service="news">
        <ToggleContext.Provider
          value={{
            toggleState: {
              mediaPlayer: {
                enabled: true,
              },
            },
          }}
        >
          <BrowserRouter>
            <MediaPlayerContainer
              blocks={validVideoWithCaptionBlock}
              assetId="c3wmq4d1y3wo"
              assetType="articles"
              showPlaceholder
            />
          </BrowserRouter>
        </ToggleContext.Provider>
      </ServiceContextProvider>
    </RequestContextProvider>
  );
};

export default {
  title: 'Containers/Media Player',
  Component,
  parameters: { chromatic: { disableSnapshot: true } },
  decorators: [withKnobs, withServicesKnob()],
};

export const Canonical = Component;
export const Amp = props => <Component isAmp {...props} />;
Amp.decorators = [AmpDecorator];
