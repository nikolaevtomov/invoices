
import React from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import getPathname from 'root/selectors/get-pathname';
import getAppState from 'root/selectors/get-app-state';

export const Navigation = ({ pathName, appState: { failed } }) => {

  const items = [
    { name: 'Home', link: '/' },
    { name: 'Invoices', link: '/invoices' },
    { name: 'Add Invoice', link: '/invoices/add' }
  ];

  return (
    <div>
      <div className={'button-group'}>
        {
          items.map((item, key) => {
            let classes = classNames({
              button: true,
              active: (pathName === item.link)
            });
            return <Link key={key} to={item.link}><div className={classes}>{item.name}</div></Link>
          })
        }
      </div>
      {failed && <div className={'warning'}>Date loading failed!</div>}
    </div>
  );
};

export default connect(
  (s) => ({
    pathName: getPathname(s),
    appState: getAppState(s)
  })
)(Navigation);
