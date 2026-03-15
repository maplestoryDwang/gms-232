var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("有一段时间，透过你的记忆查看到至今体验的所有事情。\r\n完成「异世界的记忆」任务就可以开启章节的UI，请选择想要进行的章节。\r\n想要参加训练兵团的日课的罗塞之墙战斗时需要进击的巨人活动中获得的游戏硬币。", 32)
    } else {
        if (status == 1) {
            cm.openUI(355);
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};