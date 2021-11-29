import { connect } from "react-redux";
import MessageInfo from "../../components/info";
import { closeMessage } from "../../actions/info";

const mapStateToProps = (state) => {
    return {
        message: state.messageInfo.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => dispatch(closeMessage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInfo);