import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-copenhagen',
    predictionPlace: {
      address: 'Copenhagen, Denmark',
      bounds: new LatLngBounds(
        new LatLng(55.75536934, 12.6989751),
        new LatLng(55.58585048, 12.44416076)
      ),
    },
  },
  {
    id: 'default-aarhus',
    predictionPlace: {
      address: 'Aarhus, Denmark',
      bounds: new LatLngBounds(
        new LatLng(56.17896808 , 10.25444671),
        new LatLng(56.11722603, 10.16048869)
      ),
    },
  },
  {
    id: 'default-odense',
    predictionPlace: {
      address: 'Odense, Denmark',
      bounds: new LatLngBounds(
        new LatLng(55.43220618, 10.43225521),
        new LatLng(55.37262303, 10.34330096)
      ),
    },
  },
  {
    id: 'default-aalborg',
    predictionPlace: {
      address: 'Aalborg, Denmark',
      bounds: new LatLngBounds(
        new LatLng(57.07388084, 9.95788619),
        new LatLng(57.0223552, 9.87758494)
      ),
    },
  },
  {
    id: 'default-portland',
    predictionPlace: {
      address: 'Esbjerg, Denmark',
      bounds: new LatLngBounds(
        new LatLng(55.49920252, 8.4956667),
        new LatLng(55.44257717, 8.4109815)
      ),
    },
  },
];
