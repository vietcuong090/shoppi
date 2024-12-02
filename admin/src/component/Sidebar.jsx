import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSquarePlus } from 'react-icons/fa6';
// import { FaListAlt } from 'react-icons/fa';
// import { MdFactcheck } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <NavLink to={'/'} className={''}>
              <FaSquarePlus />
              <div>Add Items</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
