function customErrorHandler(error) {
    console.error("Custom error handler:", error.message);
}

function doSomething() {
    try {
        // Code that may throw an exception
        const result = 1 / 0;
        console.log(result);
    } catch (error) {
        customErrorHandler(error);
    }
}

doSomething();
