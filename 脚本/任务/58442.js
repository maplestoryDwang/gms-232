var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("那个…有可以吃的吗？真的好饿…", 32)
    } else {
        if (status == 1) {
            cm.sendNextPrev("现在我也没有什麽能吃的东西耶…等我一下喔. 我去找找看有没有可以吃的东西。", 56)
        } else {
            if (status == 2) {
                cm.sendNextPrev("真的吗…？谢谢！", 32)
            } else {
                if (status == 3) {
                    cm.sendNextPrev("(在这里不管多努力，还是很难找到ㄧ些食物. 是不是要回到枫之谷看看呢? 去找 K 获得ㄧ些建议吧。)", 56)
                } else {
                    if (status == 4) {
                        cm.forceStartQuest();
                        cm.dispose()
                    } else {
                        cm.dispose()
                    }
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
        cm.sendNext("怎麽了呢？", 32)
    } else {
        if (status == 1) {
            cm.sendNextPrev("K！异世界的村民在饥饿中. 不能这样下去. 把枫之谷世界的食粮搬到异世界如何?", 56)
        } else {
            if (status == 2) {
                cm.sendNextPrev("把枫之谷世界的物品搬到异世界? 从其他时空搬移东西，还真是第一次听到的事情。", 32)
            } else {
                if (status == 3) {
                    cm.sendNextPrev("不管如何必须要的事情。", 56)
                } else {
                    if (status == 4) {
                        cm.sendNextPrev("没有办法了…会帮忙把枫之谷的食粮移动到异世界。", 32)
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