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
            cm.sendNormalTalk("但是现在放下心来还太早。\r\n\r\n村子周围的怪物突然变强了。这一点还是让人难以释然。", 4, 1013447, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在#b首先必须确保孩子们的安全#k。但如果可以，希望你能去调查一下古代怪兽的事情。", 4, 1013447, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("等找到孩子们之后，请回来向我报告。我还有点事，先失陪了。", 4, 1013447)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(35958, "");
                        cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0");
                        cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h1");
                        cm.OnStartNavigation(100051025, 1, "1013404", 0);
                        cm.sendNormalTalk("首先必须去找到孩子们。", 2, 1013403, false, true)
                    } else {
                        if (status === a++) {
                            cm.npc_LeaveField("oid=872");
                            cm.dispose()
                        }
                    }
                }
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
            cm.sendNormalTalk("莫里？", 2, 1013404, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你没事啊，#h0#！\r\n\r\n嗯？我为什么会在这里？我刚想收拾行李逃走呢。为了以防万一，我之前就把贵重物品藏在了这里。就放在那里来着……。", 4, 1013401, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("等，等等。那些家伙怎么样了？该不会跑到这边来了吧？", 4, 1013401, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("（说明情况。）", 2, 1013404, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么？不是黑魔法师，而是几个#b流鼻涕的小屁孩#k？唉，太好了。这下就不用搬家了。", 4, 1013401, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("但是那些小孩……会不会也很危险呢？", 4, 1013401, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(35958);
                                    cm.gainExp(713849);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};