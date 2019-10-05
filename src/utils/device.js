/**
 * @file device
 */

const ua = navigator.userAgent;

export default {
  platform: {
    // Android
    isAndroid: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
    // IOS
    isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  },
};
