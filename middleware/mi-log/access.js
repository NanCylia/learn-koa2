// 日志信息的封装文件

module.exports = (ctx, message, commonInfo) => {
    const {
        method, // 请求方法 get post或其他
        url, // 请求链接
        host, // 发送请求的客户端的host
        headers // 请求中的headers
    } = ctx.request;
    const client = {
        method,
        url,
        host,
        message,
        referer: headers['referer'], // 请求的源地址
        userAgent: headers['user-agent'] // 客户端信息 设备及浏览器信息
    }
    return JSON.stringify(Object.assign(commonInfo, client));
}
