function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue < 0.5) {
                resolve(`Operation successful: ${randomValue}`);
            } else {
                reject(`Operation failed: ${randomValue}`);
            }
        }, 1000);
    });
}

simulateAsyncOperation()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
