
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Promise Rejection:", reason);
});

// Triggering an unhandled promise rejection
const promise = Promise.reject(new Error("Unhandled Rejection Example"));
