var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendNext("点击画面左侧的相关图标，可以随时指定被传授的角色。");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.askYesNo("可以将连锁技能#b#e穿透#n#k传授给账号内的其他角色。现在要指定被传授的角色吗？")
    } else {
        if (status == 1) {
            if (cm.hasSkill(20040218)) {
                cm.sendLinkSkillWindow(20040218);
                cm.forceCompleteQuest()
            }
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};