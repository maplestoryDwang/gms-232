function start() {
    var a = cm.getPlayer().getEventInstance();
    switch (cm.getMapId()) {
        case 910340100:
            if (a.getProperty("1stageclear") == null) {
                cm.getTopMsgFont("请稍等，任务未完成。", 3, 20, 4, 0, 0)
            } else {
                cm.warp(910340200, 0, false);
                cm.removeAll(4001008)
            }
            break;
        case 910340200:
            if (a.getProperty("2stageclear") == null) {
                cm.getTopMsgFont("请稍等，任务未完成。", 3, 20, 4, 0, 0)
            } else {
                cm.warp(910340300, 0, false);
                cm.removeAll(4001008)
            }
            break;
        case 910340300:
            if (a.getProperty("3stageclear") == null) {
                cm.getTopMsgFont("请稍等，任务未完成。", 3, 20, 4, 0, 0)
            } else {
                cm.warp(910340400, 0, false);
                cm.removeAll(4001008)
            }
            break;
        case 910340400:
            if (a.getProperty("4stageclear") == null) {
                cm.getTopMsgFont("请稍等，任务未完成。", 3, 20, 4, 0, 0)
            } else {
                cm.warp(910340500, 0, false);
                cm.removeAll(4001008)
            }
            break
    }
};