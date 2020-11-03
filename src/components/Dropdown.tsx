import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
}

export default ({ label, options }: DropdownProps) => {
  return (
    <div className="space-x-1 cursor-pointer">
      <select className="bg-transparent appearance-none focus:outline-none">
        <option value={label}>{label}</option>

        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>

      <FontAwesomeIcon icon={faChevronDown} size="xs" />
    </div>
  );
};
