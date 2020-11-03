import React, { useState } from 'react';

interface ThemeProps {
  isDark: boolean;
  setIsDark?: (theme: boolean) => void;
}

export const ThemeContext = React.createContext<ThemeProps>({ isDark: false });

export default ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};
