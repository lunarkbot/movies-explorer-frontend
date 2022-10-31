export const checkDeviceType = () => {
  let result = 'desktop';

  if (window.matchMedia('(max-width: 767px)').matches) {
    result = 'mobile';
  } else if (window.matchMedia('(max-width: 1279px)').matches) {
    result = 'tablet';
  }

  return result;
}
