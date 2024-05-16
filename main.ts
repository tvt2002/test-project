function fetchApi(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => resolve(res))
      .catch(() => reject("can not load data"))
      .finally(() => console.log("call api finish"));
  });
}
