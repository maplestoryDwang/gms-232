function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.onSetMapObjectCreateLayer("tower", 6, 1);
    cm.onSetMapObjectCreateLayerMore("tower", 2, "idle", 1);
    cm.Hidden_background("hideRope01", 1);
    cm.onSetBackEffect("hideRope01", 1, 1, 0, 0);
    cm.onSetBackEffect("hideTile01", 1, 1, 0, 0)
};