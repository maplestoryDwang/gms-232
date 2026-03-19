function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(64021)) {
        cm.sendOkS_Bottom("还没采集到足够的木材，先别急着回去了。")
    } else {
        if (cm.isQuestActive(64025)) {
            if (!cm.haveItem(4036395, 50)) {
                cm.sendOkS_Bottom("还没采集到足够的木材，先别急着回去了。")
            } else {
                cm.warp(867200400, 2)
            }
        } else {
            if (cm.isQuestActive(64030)) {
                if (!cm.haveItem(4036372, 50)) {
                    cm.sendOkS_Bottom("#b（还没收集到足够的物资，先别急着回去了。）")
                } else {
                    cm.sendNormalTalk_Bottom("#b(已经收集到足够的粮食，跟斯洛克说话吧。) ", 57, 0, false, true)
                }
            } else {
                cm.warp(867200400, 2)
            }
        }
    }
};