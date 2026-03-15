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
            cm.sendNormalTalk_Illus("但第一次航海太高兴了，结果忘记要装载贸易品了。那…… 这次就试着购买贸易品吧。请再点一次多尔切地区吧。", 9390220, 5, false, true, 1)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(17009, "step=2");
                cm.openUI(554);
                cm.sendNormalTalk_Illus("快看，贸易品购买窗出现了吧？刚开始能够购买的贸易品不是很多，但是以后随着交易地区逐渐增多，能够购买的贸易品也会变多的，不用担心。", 9390220, 5, false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus("把鼠标放在图标上，就能查看到各个贸易品的情况了。", 9390220, 5, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Illus("抓怪物时，偶尔可以捡到怪物掉落的物品，可以把其中比较珍贵的物品作为个人贸易品来卖。这种珍贵的物品可以卖到很多金币的。", 9390220, 5, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Illus("购买贸易品需要使用金币。试着用我刚刚给你的金币来购买贸易品吧？试着运载2个 #t3100000# 吧。", 9390220, 5, true, false, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Illus("你做得很好。马上就要出航了，快上船吧。", 9390220, 5, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(865000900, 0)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17006.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(17006);
            cm.sendNormalTalk("你刚刚通过贸易获得了1个凯梅尔兹金币。", 1, 9390220, false, true);
            cm.gainItem(4310100, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("贸易结束之后，请不要忘记来我这领取贸易奖励。", 1, 9390220, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};