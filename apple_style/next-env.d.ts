/// <reference types="next" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace React {
  interface JSX {
    // Allow any element
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [elem: string]: any;
  }
} 