function start() {
    cm.npc_ChangeController(9111017, "oid=3999585", 580, -45, 62, 530, 630, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=3999585", "summon", 0, 0);
    cm.dispose()
}
var status = -1;