function start() {
    cm.fieldEffect_ScreenMsg("lightning/screenMsg/6");
    cm.updateInfoQuest(25673, "1");
    cm.spawnMonster(9300535, 0, -80);
    cm.npc_ChangeController(2159367, 150, -520, 1);
    cm.npc_SetSpecialAction(2159367, "summon");
    cm.topMsg("最后的封印在中央阶梯下方。去激活它吧。");
    return true
};