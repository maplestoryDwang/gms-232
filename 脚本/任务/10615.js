var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.sendNext("暗影双刀达到了70级！\r\n\r\n\r\n\r\n#i3800008# 猫头鹰图标 1个。\r\n\r\n#i2040121# #t2040121# 1个。")
    } else {
        if (status == 1) {
            if (cm.isQuestFinished(10615)) {
                cm.dispose()
            } else {
                cm.sendOk("领取成功了。");
                cm.gainItem(2040121, 1);
                cm.gainItem(3800008, 1);
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};