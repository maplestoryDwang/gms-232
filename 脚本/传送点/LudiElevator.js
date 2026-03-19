var status;

function start() {
    status = -1;
    action(1, 1, 0)
}

function action(c, b, a) {
    if (c < 0) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            if (cm.getMapId() == 222020200) {
                cm.TimeMoveMap(222020210, 222020100, 13);
                cm.getPlayer().dropMessage(6, "妗ｉ?涓? ?哥?? 绉?搴??疯?? ?? 2??, ????浠????? 涔?缁? ?告???淇?.");
                cm.dispose()
            } else {
                cm.TimeMoveMap(222020110, 222020200, 13);
                cm.getPlayer().dropMessage(6, "妗ｉ?涓? ?哥?? 绉?搴??疯?? ?? 99??, 椋??煎??搴??虫?? 涔?缁? ?告???淇?.");
                cm.dispose()
            }
        } else {
            cm.dispose()
        }
    }
};