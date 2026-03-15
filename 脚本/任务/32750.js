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
            cm.sendNormalTalk_Bottom("我坐在正门那里，那家伙走过来就骂‘滚开，臭狗屎！’，然后抬脚就踢。居然骂我是狗屎，居然骂我这么可爱的小狗狗？真是个可恶的家伙，对吧？", 37, 1530030, false, true);
            cm.gainItem(4030040, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不管怎样，给你吧，这是学生记录簿。我是多么亲切地为你整理的啊，你拿着它回到屋顶去吧。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("就连我自己都觉得我真是太亲切了呢。有人见过这么亲切的狗屎吗？\r\n\r\n#b（返回屋顶吧。）#k", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32750, "");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("你把学生记录簿拿回来了啊。让我看看。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("原来他是董事长阿烈达的儿子！这回似乎所有的疑问都能得到解释了。", 37, 1530070, true, true);
                cm.effect_NormalSpeechBalloon("!", 1, 0, 1, 1500, 1530070, cm.getPlayer().getId())
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("等等，你别光顾着自己明白了，也跟我们说明一下吧？", 37, 1530120, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#事实上，董事长并不是像大家所知道的那样，是个善良的人。那是发生在去年的一件事……", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(330002112, 0)
                        }
                    }
                }
            }
        }
    }
};