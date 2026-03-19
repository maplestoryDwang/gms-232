function start() {
    if (cm.isQuestActive(3164)) {
        cm.openNpc(0, "副本_狮子王城_危险的第一座塔楼")
    } else {
        cm.openNpc(0, "副本_狮子王城_第一座塔")
    }
    return true
};