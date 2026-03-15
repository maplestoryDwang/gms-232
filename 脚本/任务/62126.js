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
            cm.sendNormalTalk_Bottom("呼……你真的和一般人不同。既懂礼貌又善良……\r\n如果现在的人都像你一样，那该多好啊？", 37, 9310539, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("希望豫园的居民也能变得亲切友善起来！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯，会的，会的……不过，不好意思，我不能领你的情。在与陪伴了我10年之久的动物们在一起时，我感到舒心而幸福……", 37, 9310539, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("而且这些动物也不会伤害我，所以我想继续留在这里。\r\n#p9310536#为我操心，这让我非常感动……请替我转达对他的谢意。", 37, 9310539)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(62126, "");
                            cm.sendNormalTalk_Bottom("谢谢你啊~ 下次有事路过的话，别忘了来我这里坐坐啊！", 37, 9310539, false, false)
                        } else {
                            if (status === a++) {
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
            cm.askMenu_Bottom("哦！你回来啦~！不过，#p9310539#怎么没有跟你一起来呢？\r\n\r\n#b#L0#转达#p9310539#的问候。#l", 37, 9310536)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62126);
                cm.updateInfoQuest(62126, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
                cm.sendNormalTalk_Bottom("啊……原来如此。既然这样，那就没办法了。不过他过得挺好的，那我就放心了。", 37, 9310536, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这一路辛苦你了！谢谢~！我的心情变得舒畅了不少呢。", 37, 9310536, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};