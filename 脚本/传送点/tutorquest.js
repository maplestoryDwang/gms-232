function start() {
    var b = cm.getMapId();
    var a;
    var c = 2;
    switch (b) {
        case 130030001:
            a = 20010;
            c = 1;
            break;
        case 130030002:
            a = 20011;
            break;
        case 130030003:
            a = 20012;
            break;
        case 130030004:
            a = 20013;
            break;
        default:
            return
    }
    if (cm.getQuestStatus(a) == c) {
        cm.warp(cm.getMapId() + 1, "sp")
    } else {
        if (b == 130030001) {
            cm.playerMessage(5, "璇风?瑰??NPC棰???浠诲?°??")
        } else {
            cm.playerMessage(5, "璇峰????浠诲?°??")
        }
    }
};