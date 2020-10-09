const ajax = (callback = (req) => {}, type = "GET", url = "") => {
	let req = new XMLHttpRequest();
	if (type = "GET") {
		req.open(type, url)
	}
	req.send();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.status == 200) {
				callback(req)
			}
		}
	}
}
export default ajax;