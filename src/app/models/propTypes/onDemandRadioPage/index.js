import { bool, shape, string, number } from 'prop-types';
// Delete model and reinstate the props within the page

export const onDemandRadioPageDataPropTypes = shape({
  brandTitle: string,
  headline: string,
  summary: string,
  language: string,
  episodeAvailableFrom: number,
  episodeAvailableUntil: number,
  releaseDateTimeStamp: number,
});

const onDemandPagePropTypes = {
  isAmp: bool,
  data: onDemandRadioPageDataPropTypes,
  service: string,
  status: number,
};

export default onDemandPagePropTypes;
