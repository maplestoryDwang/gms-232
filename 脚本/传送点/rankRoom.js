function start() {
    switch (cm.getMapId()) {
        case 130000000:
            cm.warp(130000100, 5);
            break;
        case 130000200:
            cm.warp(130000100, 4);
            break;
        case 140010100:
            cm.warp(140010110, 0);
            break;
        case 120000101:
            cm.warp(120000105, 0);
            break;
        case 103000003:
            cm.warp(103000008, 0);
            break;
        case 100000201:
            cm.warp(100000204, 0);
            break;
        default:
            cm.warp(cm.getMapId() + 1, 0);
            break
    }
};