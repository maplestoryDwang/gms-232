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
            cm.sendNormalTalk_Bottom("#b埃尔宾！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2##h0#，这比之前要宽敞很多啊！还有2楼！", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b是的，太好了！想到以后装修的事情，我就很激动呢。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("#b所以说……我觉得如果以后装修房屋的事情也能和埃尔宾一起完成，那就太好了。\r\n#b#L0# 请你成为我的管家。#l\r\n#L1#今后我们一起好好相处吧。#l\r\n#r(※只能雇佣1名管家，雇佣后可以通过管家菜单进行变更。)#l", 57, 0)
                    } else {
                        if (status === a++) {
                            if (b == 0) {
                                cm.sendNormalTalk_Bottom("#face2#……我一直梦想着这个瞬间的到来！装修和管理房屋可是我的特长。请交给我吧！", 37, 9400921, false, true)
                            } else {
                                cm.sendNormalTalk_Bottom("#face1#今后就请多多指教了，#h0#！", 37, 9400921, true, true);
                                cm.dispose()
                            }
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#今后就请多多指教了，#h0#！", 37, 9400921, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#这是给#h0#的礼物。因为你说要用高级的家装饰，我就准备了这个！它还有特别功能，你可别被吓到了！", 37, 9400921, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(64608);
                                        cm.forceCompleteQuest(64609);
                                        cm.updateInfoQuest(64610, "hide=1");
                                        cm.updateInfoQuest(500773, "askR=0;manager=1;managerHide=0;s1=25;s2=14;s3=3;bonusTalk=0;s4=2;s5=3;resetDate=" + cm.getNowTimeString(3) + ";affDown=" + cm.getNowTimeString(3));
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
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};