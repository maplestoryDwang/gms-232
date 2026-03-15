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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(平民翼人少年说他见过一个没有翅膀的高等翼人，\r\n但是，不知道他现在在哪里……)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(那个高等翼人说不定知道我的过去。\r\n不如根据冒险家们的传闻，到据说他所在的地方去探探吧？)\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001951 - cm.getPlayer().getGender(), 1)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(39667, "rMap=" + cm.getMapId());
                    cm.dispose();
                    cm.warp(993162066, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39667.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(据说高等翼人没有展开直接的战争，\r\n但在格兰蒂斯各地，都有部下在暗中活动。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(看样子他们暂时不会有明显的动作。\r\n不过……那些可疑的传闻绝不是什么好的征兆。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(39667);
                    cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;54=h0;j=4;55=h0;56=h0;57=h0;58=h0;59=h0;q=7");
                    cm.teachSkill(150020006, 7, 10);
                    cm.getTopMsgFont("<回忆>技能的等级提高了。", 3, 20, 20, 0, 0);
                    cm.dispose()
                }
            }
        }
    }
};