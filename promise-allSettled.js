const batch = async myArr => {
    const res = [];

    for (let i = 0; i < myArr.length; i += 2) {
        const requests = myArr.slice(i, i + 2).map(num => {
            if (num % 2 === 0) {
                return Promise.resolve(num).catch(e => e);
            }

            if (num % 2 === 1) {
                return Promise.reject(Error(`Error in for loop at num ${ num }`));
            }
        });

        // eslint-disable-next-line no-await-in-loop
        await Promise.allSettled(requests)
            .then(response => res.push(response))
            .catch(e => console.log('Error running loop here => ', e));
    }

    return res.flat();
};

batch([1, 2, 3, 4, 5, 6])
    .then(res => console.log('Res => ', res))
    .catch(error => console.log('Error in main process => ', error));
