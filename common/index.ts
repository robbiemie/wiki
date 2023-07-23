export const calculateScrollVisibility = (className = '') => {
  const element = document.querySelector(`.${className}`);
  if(!element) return
  const elementRect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (elementRect.bottom < 0 || elementRect.top > viewportHeight) {
    // 元素在视口上方或下方，不可见
    return 0;
  } else if (elementRect.top >= 0 && elementRect.bottom <= viewportHeight) {
    // 元素完全可见
    return 100;
  } else {
    // 计算可视区域占比
    const visibleHeight = Math.min(elementRect.bottom, viewportHeight) - Math.max(elementRect.top, 0);
    return (visibleHeight / elementRect.height);
  }
}