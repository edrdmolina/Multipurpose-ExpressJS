module.exports = {
    cleanIp(ip) {
        const regex = /^::ffff:/g;
	    return ip.replace(regex, '');
    }
}