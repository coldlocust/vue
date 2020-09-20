const STORAGE_KEY = 'todolist'
export default{

//获取指定STORAGE_KEY本地存储的值
fetch() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY)
    || '[]')
},
//将JSON.stringify(items)获取的值存储到STORAGE_KEY字段
save(items) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}
}

