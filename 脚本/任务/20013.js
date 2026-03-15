var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 2) {
            cm.sendNext("嗯……。我就在这里。");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.sendNext("#b(*哗……哗……。*)#k")
    } else {
        if (status == 1) {
            cm.sendNextPrev("哇唔！嘿！你吓了我一跳，我都不知道有客人了。你一定是刚才和 #p1102006# 聊天的人吧。欢迎你！我是 #p1102007#，和我的制作品 #b椅子#k。我在考虑做一个你喜欢的礼物。")
        } else {
            if (status == 2) {
                cm.sendNextPrev("等等！我不能白白的送给你东西，因为我的材料没有了，你可以找到制作礼物的材料吗？你看看周围这个地方，你可以看到有很多箱子，你可以带来 #t4032267# 和 #t4032268# 给我吗？")
            } else {
                if (status == 3) {
                    cm.sendNextPrev("你知道怎么从箱子里面拿到材料呢？你就把眼前的箱子当成是一个怪物，使用普通攻击攻击他。攻击几次，就可以获取里面的材料了。")
                } else {
                    if (status == 4) {
                        cm.askAcceptDecline("请带来 1歌 #b#t4032267##k 和 1个 #b#t4032268##k 。用这些道具我将送你一样礼物！")
                    } else {
                        if (status == 5) {
                            cm.forceStartQuest();
                            cm.hireTutorMsg(9);
                            cm.dispose()
                        }
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
        cm.sendNext("你带来了我要的东西了吗？让我看看。噢，这些东西就是我想要的。他们的确是一歌 #t4032267# 和一个 #t4032268#！我会用这些材料送给你一把椅子。")
    } else {
        if (status == 1) {
            cm.sendNextPrev("给，这个就是 #t3010060#。你觉得怎么样，很漂亮吧。坐上椅子，你可以更快的回复HPMP。可以放在快捷键上乘坐。好了，就到这里了，祝你愉快！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010060# 1 #t3010060# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp")
        } else {
            if (status == 2) {
                cm.gainItem(4032267, -1);
                cm.gainItem(4032268, -1);
                cm.gainItem(3010060, 1);
                cm.forceCompleteQuest();
                cm.forceCompleteQuest(20000);
                cm.forceCompleteQuest(20001);
                cm.forceCompleteQuest(20002);
                cm.forceCompleteQuest(20015);
                cm.gainExp(95);
                cm.hireTutorMsg(10);
                cm.dispose()
            }
        }
    }
};