export const checkDeviceType = () => {
  let result = 'desktop';

  if (window.matchMedia('(max-width: 768px)').matches) {
    result = 'mobile';
  } else if (window.matchMedia('(max-width: 1280px)').matches) {
    result = 'tablet';
  }

  return result;
}
