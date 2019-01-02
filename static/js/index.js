window.onload = function () {
  let guideItems = document.querySelectorAll('footer .guide-item')
  let sections = document.querySelectorAll('#content section')

  guideItems.forEach(function (item, index) {
    item.onclick = function () {
      // 1. 清除所有元素身上的active
      guideItems.forEach(function (item, index) {
        item.className = 'guide-item'
        sections[index].className = ''
      })

      // 2. 给当前触发事件的元素添加active
      this.className = 'guide-item active'
      sections[index].className = 'on'
    }
  })
}

