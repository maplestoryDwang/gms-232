function start() {
    if (!cm.isQuestFinished(64036)) {
        cm.sendNormalTalk_Bottom("#face1##h0#！你能先和我聊一聊吗？", 36, 9400581, false, true)
    } else {
        if (cm.haveItem(4036373, 20) && cm.haveItem(4036374, 20)) {
            cm.sendNormalTalk_Bottom("#b给大家伙分发木柴和肉吧。", 57, 0, false, true)
        } else {
            cm.warp(867200810, 0)
        }
    }
};