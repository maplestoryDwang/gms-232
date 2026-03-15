var status = -1;
function start(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNormalTalk('#b#h0##k。我已经把#b返回帕勒坦#k传授给你了。现在你可以随时回到卡鲁帕村了。', 16, 9010000, false, true);
    } else {
        if (status == 1) {
            cm.forceCompleteQuest(35941);
            cm.sendNormalTalk('你已经学会了新的技能#b返回帕勒坦#k，请通过技能栏确认！', 16, 9010000, true, false);
        } else {
            if (status == 2) {
                cm.teachSkill(1297,10);
                cm.addPopupSay(9110002, 5000, "#fn微软雅黑##e习得技能#b#q1297##k\r\n您可以打开技能栏确认。");
                cm.dispose();
            }
        }
    }
}
function end(c, b, a) {
    cm.dispose();
}