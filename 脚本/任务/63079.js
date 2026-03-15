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
            cm.sendNormalTalk("思索是通过思考问题与自省来回顾自我的一段愉快又幸福的时光。", 4, 9400218, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("村庄外面的#o9402047#和#o9402048#会干扰到我们平静的深思。你能不能帮我们消灭#o9402047#和#o9402048#？", 4, 9400218)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(63079, "");
                    cm.sendNormalTalk("谢谢你。只要你消灭#o9402047#和#o9402048#各50只，我们就能好好地进行更深刻的思索。", 4, 9400218, false, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63079.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("…………", 4, 9400218, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……………………", 4, 9400218, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("什么？你说什么？\r\n……啊！谢谢你。这下子我们能放心地沉浸在思索的海洋中了。", 4, 9400218, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(63079);
                        cm.gainExp(635200);
                        cm.addNumberForQuestInfo(63079, "count", 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};