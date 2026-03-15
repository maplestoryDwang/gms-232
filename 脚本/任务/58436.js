var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 4) {
            cm.sendOk_New("真是可惜的事情。");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.sendNext("您好，我的名字叫「K」。#b#h0##k，可以听听我的话吗？", 32)
    } else {
        if (status == 1) {
            cm.sendNextPrev("可是我不认识你阿. 你怎麽会知道我的名字呢？", 56)
        } else {
            if (status == 2) {
                cm.sendNextPrev("嗯. 那个我认为不是重点. 不管怎样，现在我跟你在谈话的事情为比较重要吧? 我能保证我绝对不是什麽奇怪的人. 反而是提出ㄧ些有趣事情的人喔。", 32)
            } else {
                if (status == 3) {
                    cm.sendNextPrev("现在虽然无法了解你说的事情…好…你先说说看吧…", 56)
                } else {
                    if (status == 4) {
                        cm.askYesNo("感谢你. 那先暂时移动到别的地方好了. 跟我一起走吧。")
                    } else {
                        if (status == 5) {
                            cm.forceCompleteQuest();
                            cm.gainExp(1000);
                            cm.saveReturnLocation("MULUNG_TC");
                            if (cm.getMapId() != 814000000) {
                                cm.warp(814000000)
                            }
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