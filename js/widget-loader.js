(function () {
    //get location script
    const currentScript = document.currentScript;
    const parent = currentScript.parentElement;

    // create container
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';

    //create element iframe
    const iframe = document.createElement('iframe');

    //get base url
    const scriptSrc = document.currentScript.src;
    const baseUrl = new URL(scriptSrc).origin;

    //set iframe src
    iframe.src = baseUrl + "/widgets";
    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.display = "block";
    iframe.style.transition = "position 0s";
    iframe.scrolling = "no";
    iframe.id = "ramadhan-widget-" + Math.random().toString(36).substring(7);

    let isExpanded = false;
    let collapsedHeight = 0;

    // listener auto resize and toggle
    window.addEventListener('message', function (event) {
        if (!event.data) return;

        if (event.data.type === 'setHeight') {
            iframe.style.height = event.data.height + 'px';
            // set height
            if (!isExpanded) {
                collapsedHeight = event.data.height;
                container.style.height = collapsedHeight + 'px';
            }
        }

        if (event.data.type === 'toggleExpand') {
            isExpanded = event.data.isExpanded;
            if (isExpanded) {
                iframe.style.position = 'absolute';
                iframe.style.zIndex = '9999';
                iframe.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';
                // set height
                container.style.height = collapsedHeight + 'px';
            } else {
                iframe.style.position = 'relative';
                iframe.style.zIndex = 'auto';
                iframe.style.boxShadow = 'none';
            }
        }
    }, false);

    //insert iframe into container
    container.appendChild(iframe);
    parent.insertBefore(container, currentScript);
})();
