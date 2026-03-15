var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextPrevNew("你来晚了呢? 今天开始有训练兵团的训练. 每开设一个训练会另外进行联络，请大家一定要参加。", 32)
    } else {
        if (status == 1) {
            cm.sendNextPrev("嗯? 不，我…我是…你好像误会了…", 56)
        } else {
            if (status == 2) {
                cm.sendNextPrev("突然怕了吗? 但是到了现在无法取消参加。已经加入了训练兵团一定不会有问题。那，请多指教罗。", 32)
            } else {
                if (status == 3) {
                    cm.sendNextPrev("…训练兵团？这…等等…", 56)
                } else {
                    if (status == 4) {
                        cm.sendNextPrev("(但是他已经离开已久…)\r\n 好像有什麽严重误会…怎麽办呢…我真得要接受训练吗?!", 56)
                    } else {
                        if (status == 5) {
                            cm.forceCompleteQuest();
                            cm.dispose()
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};