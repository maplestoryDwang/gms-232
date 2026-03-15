var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNext("如果你不想成为魔法师的话，那你来找我是为何事？你想见夜光法师？是不是冒险岛世界又发生了什么变故？不是就好，但你为什么要找夜光法师呢？", 1032001)
        } else {
            if (status == a++) {
                cm.askAcceptDecline("嗯，你的个人隐私我就不再询问了。总之，我也不知道他住在哪里。不过，我认识和他一起生活的少女。她现在应该过来了呢……你要去见见她吗？", 1032001)
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
                    cm.dispose()
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38057.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("您好，汉斯爷爷。我今天是来向您借历史书的。因为我很想知道几百年的时间里夜光法师在冒险岛世界都发生过哪些事情。好吗？我很想见一见夜光法师！可是夜光法师却不怎么喜欢见外部的人。", 0, 2159464, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是…………夜光法师以前的同伴？那么你也是几百年前的人了？哇，很高兴见到你！我还是第一次亲眼见到夜光法师的朋友！夜光法师以前是什么样呢？他现在的性格比较古板，以前也是那样吗？我想知道的实在是太多太多了！回家的路上，边走边和我说说吧！", 0, 2159464, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38057, "");
                    cm.forceCompleteQuest(38057);
                    cm.gainExp(30000);
                    cm.dispose();
                    cm.warp(910141100, 0, false)
                }
            }
        }
    }
};