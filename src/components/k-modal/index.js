import KModal from './k-modal.vue';

let modalInstance;

function getModalInstance (render = undefined) {
    modalInstance = modalInstance || KModal.newInstance({
        closable: false,
        maskClosable: false,
        footerHide: true,
        render: render
    });

    return modalInstance;
}

function confirm (options) {
    const render = ('render' in options) ? options.render : undefined;
    let instance = getModalInstance(render);

    options.onRemove = function () {
        modalInstance = null;
    };

    instance.show(options);
}

KModal.info = function (props = {}) {
    props.icon = 'info';
    props.showCancel = false;
    return confirm(props);
};

KModal.success = function (props = {}) {
    props.icon = 'success';
    props.showCancel = false;
    return confirm(props);
};

KModal.warning = function (props = {}) {
    props.icon = 'warning';
    props.showCancel = false;
    return confirm(props);
};

KModal.error = function (props = {}) {
    props.icon = 'error';
    props.showCancel = false;
    return confirm(props);
};

KModal.confirm = function (props = {}) {
    props.icon = 'confirm';
    props.showCancel = true;
    return confirm(props);
};

KModal.remove = function () {
    if (!modalInstance) {   // at loading status, remove after Cancel
        return false;
    }

    const instance = getModalInstance();

    instance.remove();
};

export default KModal;
