/**
 * Detects the driver type (e.g., Selenium, Puppeteer, Nodriver) and stores it in localStorage.
 * The detectDriver function is the fixed entry point and should not be modified.
 * To add new driver types, extend the logic in getDriverType.
 */

/**
 * Determines the driver type based on browser or automation tool indicators.
 * @returns {string} The detected driver type (e.g., "Selenium", "Chrome", "Unknown").
 */
function getDriverType({
    navigator = window.navigator,
    windowObj = window,
  } = {}) {
    let driverType = 'Unknown';
    const userAgent = navigator?.userAgent?.toLowerCase?.() || '';
    const windowKeys =
      typeof windowObj === 'object' ? Object.keys(windowObj) : [];
  
    // --- Automation Detection ---
    if (
      userAgent.includes('headless') ||
      navigator.plugins.length === 0 ||
      !Array.isArray(navigator.languages) ||
      navigator.languages.length === 0 ||
      windowKeys.some(key => key.toLowerCase().includes('puppeteer'))
    ) {
      driverType = 'Puppeteer';
    } else if (windowKeys.some(key => key.toLowerCase().includes('playwright'))) {
      driverType = 'Playwright';
    } else if (navigator.webdriver) {
      driverType = 'Selenium/WebDriver';
    } else if (
      /bot|crawl|spider|headless/.test(userAgent) ||
      (!('chrome' in windowObj) && 'webdriver' in navigator)
    ) {
      driverType = 'HeadlessBot';
    }
  
    // --- Browser Detection ---
    else if (navigator.brave || userAgent.includes('brave')) {
      driverType = 'Brave';
    } else if (userAgent.includes('opr/')) {
      driverType = 'Opera';
    } else if (userAgent.includes('edg/')) {
      driverType = 'Edge (Chromium)';
    } else if (userAgent.includes('chrome') && !userAgent.includes('edg/')) {
      driverType = 'Chrome';
    } else if (userAgent.includes('firefox')) {
      driverType = 'Firefox';
    } else if (
      userAgent.includes('safari') &&
      !userAgent.includes('chrome') &&
      !userAgent.includes('crios')
    ) {
      driverType = 'Safari';
    } else if (userAgent.includes('edge')) {
      driverType = 'Edge (Legacy)';
    }
  
    return driverType;
  }
  
  /**
   * Stores the detected driver type in localStorage.
   * This function is the fixed entry point and should not be modified.
   */
  function detectDriver() {
    let driverType = getDriverType();
    console.log(driverType);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('driver', driverType);
      } else {
        console.warn('localStorage is not available.');
      }
    } catch (e) {
      console.error('Failed to access localStorage:', e);
      console.log('Detected driver type:', driverType);
    }
  }
  
  // Run detection on load
  (function () {
    detectDriver();
  })();