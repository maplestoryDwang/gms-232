var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextNoESC_New("训练新兵 #h0# 吗? 从训练兵团有接收到物品赠送的事项. 请跟我来领支给用品吧。", 33, 1)
    } else {
        if (status == 1) {
            cm.sendNextPrevNew("支给用品是什麽呢？", 56)
        } else {
            if (status == 2) {
                cm.sendNextPrevNew("我猜应该是立体机动装置. 请在近期内收取物品。", 33)
            } else {
                if (status == 3) {
                    cm.forceStartQuest();
                    cm.dispose()
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextNoESC_New("为了支给用品来的吗? 名称是…嗯…阿！在这，#h0# 没错吧? 赠送给你立体机动装置吧。", 33, 1)
    } else {
        if (status == 1) {
            if (!cm.canHold(1073010)) {
                cm.topMsg("装备栏位不足。请空出 1格以上的空位。");
                cm.dispose();
                return
            }
            cm.gainItem(1073010, 1);
            cm.forceCompleteQuest();
            cm.updateInfoQuest(58445, "clear=1");
            cm.sendOk_New("请穿用看看是否合身以及功能是否正常。\r\n以防万一弄不见了还会支配，因此到时来找我。");
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};