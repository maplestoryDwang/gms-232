var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("啊……眼前什么都看不到。谁在那里？", 0, 2510020, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("原来是你啊。哈哈……我说什么来着？人生就是伸手不见五指的戏剧。光之魔法师，竟然被抢走了光，这就是我最后的结局……咳咳，咳咳。\r\n\r\n#b(情况非常不好。好像很难活下去了。)#k", 0, 2510020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("凯特……对不起，还有我们还未出生的孩子……\r\n\r\n#b(飞鱼丸的呼吸变淡。)#k", 0, 2510020, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32671);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};