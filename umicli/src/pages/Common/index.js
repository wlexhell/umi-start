//导入外部Js文件

export default function getAMap() {
    var isLoaded = true
    return new Promise(function (resolve, reject) {
      // if (isLoaded) {
      //   window.AMap.plugin(['AMap.MouseTool', 'AMap.PolyEditor'], () => {
      //     resolve(window.AMap)
      //   })
      //   return
      // }
      
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js'
      // script.onload = resolve
      script.onerror = reject
      script.onload = function () {
        isLoaded = true
        resolve(window.AMap)
      }
      document.head.appendChild(script)
    })
  }