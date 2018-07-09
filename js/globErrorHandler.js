function globalErrorHandler(message, filename, lineno, colno, error) {
    debugger;
    var errMsg = [];
    errMsg.push(message);
    errMsg.push(" in ");
    errMsg.push(filename);
    console.info(errMsg.join("\n"));
}
window.onerror = globalErrorHandler;