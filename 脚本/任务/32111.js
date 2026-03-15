var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("从纸条上获得有用的信息了吗？")
    } else {
        if (status == 1) {
            cm.sendNext("秘密物品……那个到底是什么？最好我们亲自找找看。")
        } else {
            if (status == 2) {
                cm.askAcceptDecline("按照纸条上所写的话，应该是藏在宿舍的某个地方。男生的宿舍应该在2楼的两侧。你去调查一下那里，看看会发现什么。")
            } else {
                if (status == 3) {
                    cm.sendNext("我会在这里等着你的，#h #。\r\n#b（去查看一下位于2楼两侧的宿舍吧。）")
                } else {
                    if (status == 4) {
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};