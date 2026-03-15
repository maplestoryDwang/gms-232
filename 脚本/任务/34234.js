var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#我独自留在这里，守护着先走一步的同伴们，但一个人的力量还是有限的。", 36, 3003481, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#首先，为了让研究室安静下来，你们能帮我清理掉周围的怪物吗？\r\n之后我再告诉你们。", 36, 3003481)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34234, "");
                    cm.sendNormalTalk_Bottom("#face0#如果能消灭掉#b#o8644406:##k和#b#o8644407:##k各#r100个#k，这里暂时应该就会安静下来。", 37, 3003481, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##b#o8644406:##k在#r研究室左侧#k，#b#o8644407:##k在#r研究室右侧#k。他们距离研究室最近，因此威胁最大。", 37, 3003481, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我留在这里。你快去吧！", 37, 3003480, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#另外一个人就帮我把这里的墙壁修得更结实一点吧。", 37, 3003481, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#……", 37, 3003480, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("呵呵……我马上就回来！", 57, 0, true, true);
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
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("呼……这样应该就可以了。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("不过最好还是去周围转转。不能大意。\r\n#r（接受时立即移动。）#k", 56, 0)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(34245, "71=h1;75=h1;69=h1");
                    cm.forceStartQuest(34299, "");
                    cm.forceCompleteQuest(34234);
                    cm.dispose();
                    cm.warp(940204303, 0)
                }
            }
        }
    }
};