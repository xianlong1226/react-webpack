// 配置webpack proxy bypass的规则
// 针对特定path的处理规则，若不定义，则直接转发到target
// handle取值：
// false：直接转发到target服务器
// true：拦截并以默认命名规则返回本地json文件，命名规则为：/a/b/c -> /locals/a.b.c.json
// 字符串：将此字符串作为路径返回其所指向的文件
// 函数：返回以上三值之一
exports.rules = [{
  url: /^\/test\/*/,
  method: 'GET',
  local: false
}]