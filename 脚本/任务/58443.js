var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendOk_New("不是说想帮助饥饿的小孩吗？变心了吗？");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.askYesNo("第一次尝试的关系，先选择简单的东西吧…可以从枫之谷世界怪物中取得的马铃薯如何呢？请打倒枫之谷怪物收集50个马铃薯。")
    } else {
        if (status == 1) {
            cm.sendOk_New("希望这事情可以顺利完成.。");
            cm.forceStartQuest();
            cm.dispose()
        } else {
            cm.dispose()
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
        if (!cm.haveItem(4034246, 50)) {
            cm.dispose();
            return
        }
        cm.sendNextS("来，先吃点这些东西吧。", 56)
    } else {
        if (status == 1) {
            cm.sendNextPrevNew("哇！马铃薯！谢谢你！刚刚肚子真的超级饿. 你怎麽获得这些的呢?  ", 32)
        } else {
            if (status == 2) {
                cm.sendNextPrevNew("呃…就去随便找一下…跟妈妈一起吃喔。", 56)
            } else {
                if (status == 3) {
                    cm.sendNextPrevNew("好！真得很感谢你！", 32)
                } else {
                    if (status == 4) {
                        cm.sendNextPrevNew("(那小孩会喜欢真是太好了。)", 56)
                    } else {
                        if (status == 5) {
                            cm.gainItem(4034246, -50);
                            cm.forceCompleteQuest();
                            cm.warp(814000000);
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