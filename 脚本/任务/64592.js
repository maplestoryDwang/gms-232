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
            cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/2", 0, 900, 0, -80, 12, 4, 0);
            cm.sendNormalTalk_Bottom("#face1#点击我的小屋菜单的#i3801392##t3801392#就能进入可以搬动家具的放置模式。", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#在放置模式状态中，点击床后再点击你想要放置的位置即可！", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
                    cm.sendNormalTalk_Bottom("#face2#你要不要试试？将床放到你想要放的地方后再和我对话吧。", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(64591);
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
            if ("ok".equals(cm.getInfoQuest(64592))) {
                cm.sendNormalTalk_Bottom("#face0#果然！只是挪动了下位置，房间看起来就宽敞多了！", 37, 9400921, false, true)
            } else {
                cm.sendNormalTalk_Bottom("#face1#你还没能搬运家具啊。没关系，一开始肯定不容易。我再跟你说明一遍吧。", 37, 9400921, false, true)
            }
        } else {
            if (status === a++) {
                if ("ok".equals(cm.getInfoQuest(64592))) {
                    cm.sendNormalTalk_Bottom("#face1#要不要试着躺在床上？", 37, 9400921, true, true)
                } else {
                    cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/2", 0, 900, 0, -80, 12, 4, 0);
                    cm.sendNormalTalk_Bottom("#face1#首先点击我的小屋菜单的#i3801392##t3801392#，即可进入能够搬动家具的放置模式。", 37, 9400921, true, true)
                }
            } else {
                if (status === a++) {
                    if ("ok".equals(cm.getInfoQuest(64592))) {
                        cm.sendNormalTalk_Bottom("#face2#靠近床后点击就能躺下了。\r\n你就当我不在，舒舒服服地躺一下吧！", 37, 9400921, true, true)
                    } else {
                        cm.sendNormalTalk_Bottom("#face1#然后点击床，再点击一次你想要放的地方就可以了。", 37, 9400921, true, true)
                    }
                } else {
                    if (status === a++) {
                        if ("ok".equals(cm.getInfoQuest(64592))) {
                            cm.forceCompleteQuest(64592);
                            cm.forceStartQuest(64593, "")
                        } else {
                            cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
                            cm.sendNormalTalk_Bottom("#face2#你要不要再试一次？", 37, 9400921, true, true)
                        }
                        cm.dispose()
                    }
                }
            }
        }
    }
};