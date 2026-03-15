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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58714.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58714.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            var d = cm.getNumberFromQuestInfo(58715, "npc") - 9111000;
            var e = new Date().getTime() - cm.getNumberFromQuestInfo(58715, "last");
            if (e < 1800 * 1000) {
                var a = Math.ceil(e / 1000 / 60);
                switch (d) {
                    case 0:
                        cm.sendNormalTalk_Bottom("#face0#你拜托我的事还没做完。还剩" + a + "分钟。", 37, 9111000, false, false);
                        break;
                    case 1:
                        cm.sendNormalTalk_Bottom("#face0#我还在做你委托的事。请等" + a + "分钟后再跟我对话。", 37, 9111001, false, false);
                        break;
                    case 2:
                        cm.sendNormalTalk_Bottom("#face0#嗯？你真是个急性子。哈哈哈，我还没做完事情。还剩" + a + "分钟。", 37, 9111002, false, false);
                        break;
                    case 3:
                        cm.sendNormalTalk_Bottom("#face0#喂，我动作再敏捷也没那么快完成啊……你过" + a + "分钟后再来找我。", 37, 9111003, false, false);
                        break;
                    case 4:
                        cm.sendNormalTalk_Bottom("#face0#哼，你这讨厌鬼指使我做事还要催，真烦人。事情还没做完，你过" + a + "分钟后再来。", 37, 9111004, false, false);
                        break;
                    case 5:
                        cm.sendNormalTalk_Bottom("#face0#虽然不能精确到秒，但是我能告诉你还剩" + a + "分钟才结束。", 37, 9111005, false, false);
                        break;
                    case 6:
                        cm.sendNormalTalk_Bottom("#face0#唔……还没弄完……不好意思……请再等" + a + "分钟。", 37, 9111006, false, false);
                        break;
                    case 7:
                        cm.sendNormalTalk_Bottom("#face0#事情还没做完。请耐心等待。还剩" + a + "分钟！", 37, 9111007, false, false);
                        break;
                    case 8:
                        cm.sendNormalTalk_Bottom("#face0#还剩" + a + "分钟。", 37, 9111008, false, false);
                        break;
                    case 9:
                        cm.sendNormalTalk_Bottom("#face0#根据我研发的特殊闹钟显示，你还得等待" + a + "分钟。", 37, 9111009, false, false);
                        break
                }
                cm.dispose();
                return
            }
            cm.forceCompleteQuest(58714);
            cm.setNumberForQuestInfo(58715, "ing", 0);
            cm.addNumberForQuestInfo(58715, "ask", 1);
            switch (d) {
                case 0:
                    cm.sendNormalTalk_Bottom("#face0#我在执行你的委托的过程中获得了这个东西。它归你了。", 37, 9111000, false, false);
                    break;
                case 1:
                    cm.sendNormalTalk_Bottom("#face0#勇士，我在执行你的委托的过程中获得了这个东西。它归你了。", 37, 9111001, false, false);
                    break;
                case 2:
                    cm.sendNormalTalk_Bottom("#face0#你早知道会获得这个才拜托我的吗？喏，给你。", 37, 9111002, false, false);
                    break;
                case 3:
                    cm.sendNormalTalk_Bottom("#face0#我也不太清楚这是什么……总之我不需要，给你吧。", 37, 9111003, false, false);
                    break;
                case 4:
                    cm.sendNormalTalk_Bottom("#face0#呵呵，这是我给你的礼物。虽然是白捡的，但希望你珍惜。", 37, 9111004, false, false);
                    break;
                case 5:
                    cm.sendNormalTalk_Bottom("#face0#获得这个东西也算是意外惊喜，拿着吧。", 37, 9111005, false, false);
                    break;
                case 6:
                    cm.sendNormalTalk_Bottom("#face0#嘿嘿……我带回这样的东西纯属意外。", 37, 9111006, false, false);
                    break;
                case 7:
                    cm.sendNormalTalk_Bottom("#face0#呵呵，这些是在执行你的委托时获得的，好好使用它吧。", 37, 9111007, false, false);
                    break;
                case 8:
                    cm.sendNormalTalk_Bottom("#face0#这物品或许对你有用，拿去吧", 37, 9111008, false, false);
                    break;
                case 9:
                    cm.sendNormalTalk_Bottom("#face0#我获得了一些对我没什么用处的物品，你会用得上的，拿去吧。", 37, 9111009, false, false);
                    break
            }
        } else {
            if (status == b++) {
                switch (cm.rand(1, 3)) {
                    case 1:
                        cm.gainItem(2000005, cm.rand(30, 60));
                        break;
                    case 2:
                        cm.gainMeso(100, 10000) * cm.getLevel();
                        break;
                    case 2:
                        cm.gainItem(4001832, cm.rand(1, 3) * cm.getLevel());
                        break
                }
                cm.dispose()
            }
        }
    }
};