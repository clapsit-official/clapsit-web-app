export default function (width = window?.innerWidth) {
    const sizes = {
        'large-desktop': 2000,  // For larger desktops
        'desktop': 1250,        // For desktops
        'tablet': 600,          // For full-sized tablets
        'mobile': 325,          // For larger phones
        'small-mobile': 100,    // For smaller phones
    };

    if (width >= sizes['large-desktop']) {
        return 'desktop';
    } else if (width >= sizes['desktop'] && width < sizes['large-desktop']) {
        return 'desktop';
    } else if (width >= sizes['tablet'] && width < sizes['desktop']) {
        return 'tablet';
    } else if (width >= sizes['mobile'] && width < sizes['tablet']) {
        return 'mobile';
    } else if (width >= sizes['small-mobile'] && width < sizes['mobile']) {
        return 'mobile';
    } else {
        return null;
    }
}