import {showMessage} from "react-native-flash-message";

const showError = (message) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message : ("Server Error")
    })
}

const showSuccess = (message) => {
    showMessage({
        type: 'success',
        icon: 'success',
        message : ("Good")
    })
}

export {
    showError, 
    showSuccess
}