import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import elements from '../json/element.json'

class Element extends React.Component {
  render() {
    if (this.props.origin === 'monster') {
      return(
        elements
                .filter(element => element.element_id === this.props.elem)
                .map(element =>
                  <React.Fragment>
                      <Typography key={element.element_id} variant='subheading'>
                        Element: {element.element_name}
                      </Typography>
                  </React.Fragment>)
      )
    }
    if (this.props.origin === 'mew') {
      return(
        elements
                .filter(element => element.element_id === this.props.elem)
                .map(element => <React.Fragment>
                                <TableCell>
                                  <Typography key={element.element_id} variant='subheading'>
                                    {element.element_name}
                                  </Typography>
                                </TableCell>
                                </React.Fragment>
                    )
      )
    }
  }
}

export default Element;
