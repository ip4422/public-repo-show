import '@testing-library/jest-dom'

// to solve problems:
// 1. TypeError: window.matchMedia is not a function
// 2. TypeError: Cannot read property 'addListener' of undefined
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }
  }
