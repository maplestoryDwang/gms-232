function start() {
    if (cm.isQuestActive(35813) && cm.getQuestStatus(35814) == 0) {
        cm.openNpc(0, "黑魔法师_剧情模式")
    } else {
        cm.openNpc(0, "BOSS_黑魔法师入场")
    }
};