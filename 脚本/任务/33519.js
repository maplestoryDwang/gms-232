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
            cm.sendNormalTalk_Bottom("这里还有人手吗？我让同学们去阅读室拿庆典宣传册，但是他们都没回来呢。", 37, 1530370, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嘤，老师，我们还得调试乐器……您能去问问其他同学……", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你们这些家伙！离演出开始还有两个小时呢。\r\n我连你们在屋顶上练习时那么吵都没管，你们就不能来帮我一下吗！", 37, 1530370, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("呃……最终还是要我们跑腿啊。", 37, 1530607, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("跑得最快的家伙快点去！\r\n\r\n#b(去2楼阅览室找到宣传册吧)#k", 37, 1530370, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(33519, "");
                                cm.dispose()
                            }
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
            cm.sendNormalTalk_Bottom("#h0#，今天不是要演出吗？你怎么在这儿？", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33519);
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.dispose()
            }
        }
    }
};