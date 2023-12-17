function performAsyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve("Task completed!");
            } else {
                reject(new Error("Task failed!"));
            }
        }, 1000);
    });
}

performAsyncTask()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
