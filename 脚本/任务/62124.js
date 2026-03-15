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
            cm.sendNormalTalk_Bottom("#p9310536#说了什么？难不成是要带我回豫园？呃，净喜欢瞎折腾。我待在这里挺好的。不管怎样，我都要待在这里。", 37, 9310539, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呼……不过，偶尔也会怀念#p9310536#做的食物。说得我都有点饿了。咳咳咳。", 37, 9310539, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("你居然能毫发无伤地来到这里，看来你挺有两下子的，你帮我搜集一些#i4009362:##t4009362#吧，怎么样？", 37, 9310539);
                    cm.spawnMobLimit(9600304, 1, -231, -113, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(62124, "");
                        cm.sendNormalTalk_Bottom("你去消灭农场附近的那些#o9600305#和#o9600306#，就能获得#i4009362:##t4009362#。以前很容易就能搜集到#t4009362#的，可如今却变得非常珍贵啊。希望你能帮我搜集到！", 37, 9310539, false, false)
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
            cm.sendNormalTalk_Bottom("哦，你搜集来#i4009362:##t4009362#了？", 37, 9310539, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62124);
                cm.updateInfoQuest(62124, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("咕嘟咕嘟，\r\n啊！浓香的口感！感觉肚子真舒服。\r\n谢谢你啊，年轻人！", 37, 9310539, true, false);
                cm.gainItem(4009362, -1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};