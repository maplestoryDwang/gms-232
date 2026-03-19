function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getNumberFromQuestInfo(64006, "Ec");
    if (a == b) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    cm.setNumberForQuestInfo(64005, "duringEvent", 1);
    action(1, 0, 0)
}

function action(mode, type, selection) {
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            cm.莫奈德_特效(null, [0, 3]);
            cm.莫奈德_特效(null, [7, 6]);
            cm.sendNormalTalk_Bottom("#face0#村长，既然大篷车由我们的骑士护送，就由我来负责指挥大篷车吧。", 37, 9400581, false, true)
        } else {
            if (status === i++) {
                cm.sendNormalTalk_Bottom("#face0#你在一旁指引方向就行。", 37, 9400581, true, true)
            } else {
                if (status === i++) {
                    cm.sendNormalTalk_Bottom("#face0#不，队伍里大多都是我们村的人，应该由我来指挥才对。", 37, 9400587, true, true)
                } else {
                    if (status === i++) {
                        cm.sendNormalTalk_Bottom("#face0#团长你对地理情况和天气都不熟悉，在战斗方面多多出力就好。", 37, 9400587, true, true)
                    } else {
                        if (status === i++) {
                            cm.sendNormalTalk_Bottom("#face0#村长，你有领导过这么多人员吗？", 37, 9400581, true, true)
                        } else {
                            if (status === i++) {
                                cm.sendNormalTalk_Bottom("#face0#你连眼下的暴风雪有多么危险都不清楚，怎么拿主意？", 37, 9400587, true, true)
                            } else {
                                if (status === i++) {
                                    cm.onScriptMessage_莫奈德卷轴风格(9400590, "负责殿后的斯洛克走上前来，一脸无语地说道。\r\n“你们这是干什么？现在是打嘴仗的时候吗！我们刚离开村子，森林附近的怪物就尾随过来了！”\r\n正如他所说，能看见一帮怪物从雪原尽头朝这边涌来。\r\n“照这样下去，估计很快会被追上。咱们要么以辛苦收集到的食物做诱饵，跟他们拉开距离，要么就赶快过去灭了他们。”\r\n           #i4036367#\r\n#b\r\n#L0#得快点去消灭他们！#l")
                                } else {
                                    if (status === i++) {
                                        cm.sendNormalTalk_Bottom("#face0#暴风雪离我们越来越近了，没时间耽搁了。", 37, 9400581, false, true)
                                    } else {
                                        if (status === i++) {
                                            cm.sendNormalTalk_Bottom("#face0#再加快点脚步，要是怪物追上来，就把食物丢给他们。", 37, 9400581, true, true)
                                        } else {
                                            if (status === i++) {
                                                cm.sendNormalTalk_Bottom("#face0#这叫什么话！怎能把我们辛辛苦苦弄来的食物丢给他们？", 37, 9400587, true, true)
                                            } else {
                                                if (status === i++) {
                                                    cm.sendNormalTalk_Bottom("#face0#大篷车继续前进，派出骑士和猎人们去消灭怪物再回来才是上策。", 37, 9400587, true, true)
                                                } else {
                                                    if (status === i++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你不是一直强调暴风雪很危险吗？", 37, 9400581, true, true)
                                                    } else {
                                                        if (status === i++) {
                                                            cm.sendNormalTalk_Bottom("#face0#好了好了-可汗，巴特勒副团长，大家都别激动。越是这种时候，大家更得互相尊重，才能一起走下去。", 37, 9400589, true, true)
                                                        } else {
                                                            if (status === i++) {
                                                                cm.sendNormalTalk_Bottom("#face0#要是把食物丢掉，本来就很疲倦的乡亲们会更加士气低落。", 37, 9400587, true, true)
                                                            } else {
                                                                if (status === i++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#可惜归可惜，以食物为诱饵是目前情况下最好的选择。", 37, 9400581, true, true)
                                                                } else {
                                                                    if (status === i++) {
                                                                        cm.onScriptMessage_莫奈德卷轴风格(9400590, "在一旁看他们争执的斯洛克生气地催促道。\r\n“够了！到底要怎么做！”，“就在你们吵架的期间，怪物离我们更近了。要不想被怪物一网打尽，就快点做决定！”\r\n可汗和巴特勒仍在争执不下，我得做出选择了。\r\n           #i4036367#\r\n#b\r\n#L0#派骑士去讨伐怪物。#l\r\n#L1#交出食物。#l\r\n#L2#和志愿者们一起去讨伐怪物。#l")
                                                                    } else {
                                                                        var reactor = "action分支" + selectionLog[16];
                                                                        eval(reactor)(mode, type, selection, i)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0##h #，眼下这时候偏向他们任何一方都不合适。", 37, 9400589, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#真不好意思……你能帮帮忙吗？", 37, 9400589, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那就拜托你了！", 37, 9400589, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("前往#m867200600#。", 35, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(867200600, 0);
                        for (var a = 2210207; a <= 2210211; a++) {
                            cm.dispelBuff(a)
                        }
                    }
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0##h #，眼下这时候偏向他们任何一方都不合适。", 37, 9400589, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#真不好意思……你能帮帮忙吗？", 37, 9400589, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那就拜托你了！", 37, 9400589, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("前往#m867200600#。", 35, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(867200600, 0);
                        for (var a = 2210207; a <= 2210211; a++) {
                            cm.dispelBuff(a)
                        }
                    }
                }
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#噢！你真的愿意这么做吗？那就再没什么好吵的了。他们俩也该早点放宽心胸，学会合作…… ", 37, 9400589, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#那就拜托你了！", 37, 9400589, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("前往#m867200600#。", 35, 0, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(867200600, 0);
                    for (var a = 2210207; a <= 2210211; a++) {
                        cm.dispelBuff(a)
                    }
                }
            }
        }
    }
};