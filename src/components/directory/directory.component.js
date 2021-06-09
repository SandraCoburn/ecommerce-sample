import React from 'react';
import { connect } from 'react-redux';
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../state/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
