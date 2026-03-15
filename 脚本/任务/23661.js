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
            cm.sendNormalTalk("哎呀，你去哪儿？喂，年轻人。不好意思，你能帮帮我吗？", 4, 2300004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我叫#p2300004#，是从玛加提亚来的。我平时一直待在研究室里。因为有点事情，最近被派到了这里。", 4, 2300004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是这里用于研究的材料太少了。我订购了急需的东西……不过那边好像有什么情况，没有送东西过来，而是寄来了一封信。但是我把信放在了这里，一眨眼的功夫就不见了。", 4, 2300004, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("一定是在这里的#b灰尘堆#k中的某个地方。我的眼睛不太好……年轻人，要是你能帮我找到，那就太感谢了。你愿意帮我吗？", 0, 2300004)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(23661, "");
                            cm.warp(923050000, 0, false);
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23661.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("原来在这里。谢谢你。辛苦你了。看你，弄得全身都是灰尘。", 4, 2300004, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(23661);
                cm.gainExp(8000);
                cm.gainItem(4033643, -1);
                cm.dispose();
                cm.warp(230050000, 0, false)
            }
        }
    }
};