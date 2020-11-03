import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'components/Dropdown';
import React, { useContext } from 'react';
import { ThemeContext } from 'components/Theme';

export default () => {
  const { setIsDark, isDark } = useContext(ThemeContext);

  return (
    <div className="w-full px-8 flex justify-between items-center space-x-4 text-xs">
      <FontAwesomeIcon
        icon={faSun}
        size="lg"
        className="text-navy dark:text-white cursor-pointer"
        role="button"
        onClick={() => setIsDark?.(!isDark)}
        data-testid="theme-toggle"
      />

      <Dropdown label="Select Language" options={['English', 'Spanish', 'Italian']} />

      <span className="flex-grow"></span>

      <a href="#" className="">
        Help
      </a>
      <a href="#" className="">
        Privacy
      </a>
      <a href="#" className="">
        Terms
      </a>
    </div>
  );
};
