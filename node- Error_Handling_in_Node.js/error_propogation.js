async function performTask() {
    try {
        await doSomethingAsync();
        console.log("Task completed.");
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

async function doSomethingAsync() {
    return new Promise((_, reject) => {
        reject(new Error("Async Error"));
    });
}

performTask();
