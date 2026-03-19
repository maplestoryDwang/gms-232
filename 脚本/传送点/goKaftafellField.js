function start() {
    if (cm.isQuestActive(64021)) {
        if (cm.haveItem(4036370, 50)) {
            cm.sendNormalTalk_Bottom("#b(已经收集到足够的木材，去找佩图尔吧。) ", 57, 0, false, true)
        } else {
            cm.warp(867200420, 0)
        }
    } else {
        if (cm.isQuestActive(64025)) {
            if (cm.haveItem(4036395, 50)) {
                cm.sendNormalTalk_Bottom("#b(已经收集到足够的木材，去找佩图尔吧。) ", 57, 0, false, true)
            } else {
                cm.warp(867200440, 0)
            }
        } else {
            if (cm.isQuestActive(64030)) {
                cm.warp(867200460, 0)
            } else {
                cm.sendNormalTalk_Bottom("#b(啊，我现在没理由离开啊，还是去和村民们聊一聊，看看有没有什么我能帮上忙的地方吧。) ", 57, 0, false, true)
            }
        }
    }
};