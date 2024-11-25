/**
 * Utility function to conditionally join class names.
 * Supports strings, objects, and arrays.
 *
 * Example usage:
 * cn('class1', 'class2', { 'class3': isActive })
 */
export const cn = (...classes) => {
    return classes
      .flatMap((cls) => {
        if (typeof cls === 'string') return cls;
        if (typeof cls === 'object' && cls !== null) {
          return Object.entries(cls)
            .filter(([_, value]) => Boolean(value))
            .map(([key]) => key);
        }
        return [];
      })
      .join(' ');
  };
  
  /**
   * Utility function to capitalize the first letter of a string.
   *
   * @param {string} str - Input string
   * @returns {string} - Capitalized string
   *
   * Example usage:
   * capitalize('hello world') => 'Hello world'
   */
  export const capitalize = (str) => {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Utility function to debounce execution of a function.
   *
   * @param {Function} func - Function to debounce
   * @param {number} delay - Delay in milliseconds
   * @returns {Function} - Debounced function
   *
   * Example usage:
   * const debouncedFunction = debounce(() => console.log('Hello'), 300);
   */
  export const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };
  
  /**
   * Utility function to throttle execution of a function.
   *
   * @param {Function} func - Function to throttle
   * @param {number} limit - Limit in milliseconds
   * @returns {Function} - Throttled function
   *
   * Example usage:
   * const throttledFunction = throttle(() => console.log('Hello'), 300);
   */
  export const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return (...args) => {
      if (!lastRan) {
        func(...args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func(...args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };
  
  /**
   * Utility function to detect if the user prefers dark mode.
   *
   * @returns {boolean} - `true` if dark mode is preferred, otherwise `false`
   *
   * Example usage:
   * const isDarkMode = prefersDarkMode();
   */
  export const prefersDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  