var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.sendNext("(启动音乐盒，让音乐响起来吧。)")
    } else {
        if (status == 1) {
            cm.forceStartQuest(24003, "");
            cm.forceCompleteQuest(24003);
            cm.sendNormalTalk("(想起了和村里冰冷的气息不相称的和平的音乐。希望孩子们能做个好梦……)", 0, 1033206, false, true);
            cm.effect_PlayMusic("Game/QueenOfElf");
            cm.enableActions()
        } else {
            if (status == 2) {
                cm.getTopMsgFont("点击头上有书本图标的NPC就能完成任务。", 3, 20, 20, 0);
                cm.npc_LeaveField("oid=214367");
                cm.npc_LeaveField("oid=214368");
                cm.npc_LeaveField("oid=214369");
                cm.forceCompleteQuest(24000);
                cm.forceStartQuest(24001, "");
                cm.npc_LeaveField("oid=214363");
                cm.npc_LeaveField("oid=214364");
                cm.npc_LeaveField("oid=214365");
                cm.npc_LeaveField("oid=214366");
                cm.npc_LeaveField("oid=214370");
                cm.dispose()
            }
        }
    }
};