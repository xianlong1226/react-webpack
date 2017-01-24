module.exports = {
    ajaxBase: function(url, type, data, callback) {
        $.ajax({
            url: url,
            type: type,
            cache: false,
            data: data,
            success: function(result) {
                if (callback) {
                    callback(result);
                }
            },
            error: function(xhr,message) {
                console.error(xhr);
                console.error(message);
                jynotify.error('网络异常',3000);
            }
        });
    },
    ajaxGet: function(url, data, callback) {
        this.ajaxBase(url, 'get', data, callback);
    },
    ajaxPost: function(url, data, callback) {
        this.ajaxBase(url, 'post', data, callback);
    }
}