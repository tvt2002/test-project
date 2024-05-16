function fetchApi(url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(function (res) { return resolve(res); })
            .catch(function () { return reject("can not load data"); })
            .finally(function () { return console.log("call api finish"); });
    });
}
