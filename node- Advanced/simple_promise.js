const promise = new Promise((resolve) => {
    resolve('Promise resolved successfully');
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
