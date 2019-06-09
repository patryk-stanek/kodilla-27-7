import { connect } from 'react-redux';
import Comment from './Comment.js';

import {thumbUp, thumbDown} from './import/actions.js'

const mapDispatchToProps = dispatch => ({
    thumbUp: (id) => dispatch(thumbUp(id)),
    thumbDown: (id) => dispatch(thumbDown(id))
});

export default connect(null, mapDispatchToProps)(Comment);