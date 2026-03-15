var status = -1;

function start(c, b, a) {
    if (c == 0) {
        if (status == 0) {
            cm.sendNext("This is an important decision to make.");
            cm.dispose();
            return
        }
        status--
    } else {
        status++
    }
    if (status == 0) {
        cm.sendNextSNoESC("我才刚刚开始恢复我多年前的权力。不过，虽然我不是一个伟大的小偷，我必须准备进入我的大门。")
    } else {
        if (status == 1) {
            cm.sendNextS("每一个英雄都要先睡着时，# H #，你第一次SLEP将为ereve，一切准备就绪，你只需要出口船舶和下坡。")
        } else {
            if (status == 2) {
                cm.sendNextSNoESC("对于这个世界上最伟大的小偷来说，这没什么问题。!")
            } else {
                if (status == 3) {
                    cm.sendNextPrevS("你可以走了，你的旅程从这里开始。")
                } else {
                    if (status == 4) {
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
};