import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHouse, faLocationDot, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBell, faClipboard, faComment, faFileLines, faUser } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';
import '../style/Sidebar.css';

function Sidebar({ nav, navToggle }) {
  const refs = useRef([]);

  useEffect(() => {
    const elements = refs.current;

    const onMouseOver = (e) => {
      elements.forEach((item) => {
        item.classList.remove('hovers');
      });
      e.currentTarget.classList.add('hovers');
    };

    elements.forEach(ref => {
      if (ref) {
        ref.addEventListener('mouseover', onMouseOver);
      }
    });



    return () => {
      elements.forEach(ref => {
        if (ref) {
          ref.removeEventListener('mouseover', onMouseOver);
        }
      });
    };
  }, []);

  return (
    <div className={`side ${nav ? 'side-media' : 'side-none'}`}>
      <div className="side-wrapper">
        <div className="side-inner">
          <button className={`navigation-button ${'none-media-screen-button'} ${nav ? "" : 'crossbutton'}`} onClick={navToggle}>
            {nav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
          <button className={`navigation-button ${'media-screen-button'}${nav ? "" : 'crossbutton'}`} onClick={navToggle}>
            {nav ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
          </button>
          <ul>
            {[
              { icon: faHouse, text: 'Dashboard', path: '/' },
              { icon: faUser, text: 'User Profile', path: '/user' },
              { icon: faClipboard, text: 'Table List', path: '/table' },
              { icon: faFileLines, text: 'Typography', path: '/typography' },
              { icon: faComment, text: 'Icons', path: '/icons' },
              { icon: faLocationDot, text: 'Maps', path: '/maps' },
              { icon: faBell, text: 'Notification', path: '/notification' },
              { icon: faGear, text: 'Settings', path: '/settings' },
            ].map((item, index) => (
              <li key={index}> {/* Added the key attribute here */}
                <NavLink to={item.path} activeClassName="active-link" exact className='li-in' ref={el => refs.current[index] = el}>
                  <div className="icon"><FontAwesomeIcon icon={item.icon} /></div>
                  <span className='text'>{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
