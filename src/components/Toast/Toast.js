import toast from 'react-hot-toast';

const notifySuccessMessage = (message) => toast.success(message);
const notifyErrorMessage = (message) => toast.error(message);
const notifyLoadingMessage = (message) => toast.loading(message);
const notifyPromise = (promise, message) => toast.promise(promise, message);

export { notifySuccessMessage, notifyErrorMessage, notifyLoadingMessage, notifyPromise }
