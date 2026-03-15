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
            cm.sendNormalTalk("呵呵……年轻人来这么偏僻的地方干嘛？", 8, 1203000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我想要最厉害的长矛！", 2, 1203000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("最厉害的长矛？那种东西在小村子里怎么有卖的……", 8, 1203000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我知道你就是冒险岛世界里最厉害的铁匠！我想要你做的武器！", 2, 1203000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("我这个老头子太老了，哪还能做什么优秀的武器啊。倒是有一支很久以前做的长矛……不过却不能给你。那个家伙太锋利，弄不好连主人都会被伤到。这种武器你还想要吗？", 0, 1203000)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(21202, "");
                                cm.sendNormalTalk("呵呵……既然你这么说，我这个老头子就试一试你。你去旁边的#b修炼场#k，打败那些#r#o9001012##k，取回#b#t4032311##k#b30个#k给我。我就把#p1201001#交给你。", 0, 1203000, false, true)
                            } else {
                                if (status === a++) {
                                    cm.OnStartNavigation(914021000, 0, "west00", 21202);
                                    cm.dispose()
                                }
                            }
                        }
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21202.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哎呦～#t4032311#都取回来了？你……比我想象的还要厉害一些嘛。不过，对于随时都可能伤到自己的危险武器，你那种毫不畏惧的爽朗豪放的心态实在是……好吧，#p1201001#就给你了。", 0, 1203000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（过了好一会儿，#p1203000#才郑重地将裹在布里的#p1201001#交给我。）#k", 0, 1203000, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("这就是专门为你而做的长矛，名叫#p1201002#……以后就拜托了。", 0, 1203000)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(21202, "");
                        cm.forceCompleteQuest(21202);
                        cm.eventSKill(0);
                        cm.setStandAloneMode(true);
                        cm.gainItem(4032311, -30);
                        cm.dispose();
                        cm.warp(914090201, 0, false)
                    }
                }
            }
        }
    }
};