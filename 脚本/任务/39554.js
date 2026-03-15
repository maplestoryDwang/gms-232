var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face11#饕餮,道士要先去做一会儿梦了~！", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#哼！要你管。", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face12#这么挑剔做什么,你不明白道士的深意啊,\r\n这就表示要去梦里看一看道术集,就像上次一样。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face9#你就在这里等我醒过来吧,只要片刻就好,没了我在,你可别觉得寂寞啊。\r\n哈哈,那我就去梦里看看了……呼呼……呼呼……", 36, 3001674 + cm.getPlayer().getGender(), 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#你说谁寂寞呢！？哦,已经睡着了啊。\r\n这家伙还真是睡得沉,怕是被人抱走了都不知道……", 36, 3001651, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(我一边回想着记忆中的道观一边沉沉睡去,\r\n那熟悉的景象便在漆黑一片的眼前慢慢展开。)", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39554, "rMap=" + cm.getMapId());
                                    cm.dispose();
                                    cm.warp(993160125, 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39554.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceCompleteQuest(39554);
            cm.teachSkill(164120012, 0, 10);
            cm.teachSkill(164120011, 0, 10);
            cm.teachSkill(164120010, 0, 10);
            cm.teachSkill(164121010, 0, 5);
            cm.teachSkill(164121009, 0, 10);
            cm.teachSkill(164121007, 0, 10);
            cm.teachSkill(164121008, 0, 10);
            cm.teachSkill(164121006, 0, 10);
            cm.teachSkill(164121005, 0, 10);
            cm.teachSkill(164121003, 0, 10);
            cm.teachSkill(164121000, 0, 10);
            cm.updateInfoQuest(1073, "16400=10;16410=31;16411=201;16412=201");
            cm.openUIWithOption(3, 164121000);
            cm.sendNormalTalk_Bottom("#face0#师父传授的法术进入了我的体内,\r\n这是唯有修炼到较高境界的道士才能施展的道术。", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face7#……还有这个,等我从梦中醒来后就发现手里握着这个,\r\n难道是师父送我的礼物？该不会还在做梦吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face5#哎,不管了,这很重要吗？\r\n反正眼下也已经学会了新法术,不妨就用用看吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                    cm.changeJob(16412);
                    cm.forceStartQuest(39508, "");
                    cm.forceCompleteQuest(39508);
                    cm.dispose()
                }
            }
        }
    }
};