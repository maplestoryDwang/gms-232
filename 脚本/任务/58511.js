var status = -1;

function start(f, c, b) {
    if (f == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        switch (cm.getMapId()) {
            case 814011900:
                break;
            default:
                cm.dispose();
                return
        }
        var e = cm.getInfoQuest(58507).split(";");
        for (var a = 0; a < e.length; a++) {
            var d = e[a].split("=");
            if (d[0] == "accuracy") {
                accuracy = parseInt(d[1])
            } else {
                if (d[0] == "fakeMobKillCount") {
                    fakeMobKillCount = parseInt(d[1])
                } else {
                    if (d[0] == "score") {
                        score = parseInt(d[1])
                    }
                }
            }
        }
        if (parseInt(score) >= 4000) {
            itemId = 2028308
        } else {
            if (parseInt(score) >= 3500) {
                itemId = 2028309
            } else {
                if (parseInt(score) >= 3000) {
                    itemId = 2028310
                } else {
                    if (parseInt(score) >= 2000) {
                        itemId = 2028311
                    } else {
                        if (parseInt(score) >= 1500) {
                            itemId = 2028312
                        } else {
                            if (parseInt(score) >= 500) {
                                itemId = 2028313
                            } else {
                                itemId = 2028314
                            }
                        }
                    }
                }
            }
        }
        if (!cm.canHold(itemId)) {
            cm.topMsg("消耗栏位不足。请空出 1格以上的空位。");
            cm.dispose();
            return
        }
        cm.gainItem(itemId, 1);
        cm.updateInfoQuest(58507, "accuracy=0;fakeMobKillCount=0;score=0");
        cm.warp(parseInt(cm.getInfoQuest(58466).split("=")[1]));
        cm.dispose()
    } else {
        cm.dispose()
    }
};