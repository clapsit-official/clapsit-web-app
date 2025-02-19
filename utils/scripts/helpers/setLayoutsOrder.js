export default (layouts = [], toElement = document.createElement('div')) => {
    toElement.style.position = 'relative'
    layouts.forEach(item => {
        item.style.position = 'absolute';
        toElement.appendChild(item);
    });
    return toElement;
}