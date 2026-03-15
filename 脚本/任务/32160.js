var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 2) {
            cm.sendNext("你太忙了吗？");
            cm.dispose();
            status--
        }
    }
    if (status == 0) {
        cm.sendNormalTalk("被冰川覆盖的里恩的环境正在发生变化。看来一定是发生了某种不寻常之事。\r\n\r\n#b（※ #r列娜海峡#b是特殊主题副本。提供#r59级#b以下和勇士等级对应的怪物和任务。）", 0, 1201000, false, true)
    } else {
        if (status == 1) {
            cm.sendNormalTalk("…………", 0, 1201000, true, true)
        } else {
            if (status == 2) {
                cm.askYesNo("接下来的话不是明摆着呢嘛，我想要将此次事件的解决交给你，你能不能现在来这里？\r\n\r\n#b#e(接受时自动前往里恩。)#n#k", 0, 1201000)
            } else {
                if (status == 3) {
                    cm.sendNext("我会在里恩等你。")
                } else {
                    if (status == 4) {
                        cm.warp(140000000, 0);
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
};