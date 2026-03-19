function enter() {
    if (cm.isQuestActive(64044) || cm.isQuestActive(64045)) {
        cm.openScriptNpc()
    } else {
        if (cm.isQuestActive(64047)) {
            cm.warp(867201160, 0)
        } else {
            if (cm.isQuestActive(64064)) {
                cm.warp(867201360, 0)
            } else {
                if (cm.isQuestActive(64067)) {
                    cm.warp(867201180, 0)
                } else {
                    if (cm.isQuestFinished(64070) && !cm.isQuestFinished(64071)) {
                        cm.sendOkS_Bottom("托尔逊好像有话要说。先跟他说话吧。")
                    } else {
                        if (cm.isQuestFinished(64071)) {
                            cm.openNpc(0, "副本_莫奈德_Act2_探索森林")
                        } else {
                            cm.sendOkS_Bottom("村庄里好像还有人需要帮助。先去看看吧。")
                        }
                    }
                }
            }
        }
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu_Bottom("#face1#磨蹭什么呢！赶紧去#m867201110#找点能吃的肉！#b\r\n#L0#现在立刻出发吧。#l\r\n#L1#稍作整顿后再出发吧。#l", 36, 9400581)
        } else {
            if (status === a++) {
                cm.dispose();
                if (cm.isQuestActive(64044)) {
                    cm.warp(867201110, 0)
                } else {
                    cm.warp(867201130, 0)
                }
            }
        }
    }
};