import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
    render() {
        const { black } = this.props;
        const fill = black ? 'black' : 'white';

        return <div style={{ backgroundColor: fill }} />;
    }
}

Square.PropTypes = {
    black: PropTypes.bool
}

export default Square;
