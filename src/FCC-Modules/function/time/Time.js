const sleeptime = msec => new Promise(resolve => setTimeout(resolve, msec));
async function sleep(num, callback = () => {}) {
    await sleeptime(num);
    callback()
}

export default sleep;