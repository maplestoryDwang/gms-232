function start() {
    var a = em.getNumberProperty("clear");
    if (a > 0) {
        cm.warp(867236300, 0, true)
    } else {
        cm.addPopupSay(9400602, 2000, "现在无法移动。再多坚持一会儿。", "", 0)
    }
};