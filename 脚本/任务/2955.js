var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendOk("海岸上的怪物们进了客房，把房间里弄得一团糟。虽然內部已经打扫完了，但不知道它们会不会再来捣乱。请你去消灭#b100个绿贝壳迪波#k。\r\n\r\n你到哪里去？要消灭绿贝壳迪波，应该通过#b金海滩度假村右边#k的传送口过去。应该往#e金海滩海边#n那边走！")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};