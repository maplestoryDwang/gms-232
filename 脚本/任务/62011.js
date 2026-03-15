var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("呼，多亏了你，我们才能渡过难关。对了，我好像从没见过你嘛……你怎么会来到这么危险的地方？", 37, 9310047, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("(说出了这段时间发生的事情。)", 57, 0, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#b老魔僧#k的书啊……你说的是#b#t4034637##k吧。#b老魔僧#k是一位非常有能力的高僧。与现在的#b#p9310053##k不同，他不喜欢钱财，是一个深受僧侣们崇敬的清廉之人。", 37, 9310047, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("(好像的确是这么回事，#b#p9310053##k的穿着非常华丽，不像个僧侣。大雄殿的祭坛也是富丽堂皇的。)", 57, 0, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("现在的首要任务是阻止妖怪肆虐，找书的事情我也会帮助你的！	", 37, 9310047, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#b#m701220300##k会把除妖怪以外的生物全部驱逐出地图。使用这个变身药水，可以暂时变成和那些妖怪相同的模样。", 37, 9310047, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#r#k暂时变成妖怪后，你需要避开妖怪的视线，对#b#p9310048##k所说的#m701220300#进行调查。", 37, 9310047, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.askYesNo_Bottom("现在立刻开始吗？", 37, 9310047)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("那些妖怪在#b#m701220300##k中放置了很多用于瞎捣蛋的物品，你在调查时最好小心。", 37, 9310047, false, true)
                                        } else {
                                            if (status === b++) {
                                                var a = cm.getEventManager(PQname[chs]);
                                                if (a == null || open == false) {
                                                    cm.askMenu("配置文件不存在,请联系管理员。");
                                                    cm.dispose()
                                                } else {
                                                    var f = a.getNumberProperty("state");
                                                    if (f == 0) {
                                                        cm.forceStartQuest();
                                                        cm.sendNormalTalk_Bottom("祝你好运吧。", 37, 9310047, true, true)
                                                    } else {
                                                        cm.sendOk("好像已经有人在进行尝试了，换其他频道尝试吧。");
                                                        cm.dispose()
                                                    }
                                                }
                                            } else {
                                                if (status === b++) {
                                                    var a = cm.getEventManager(PQname[chs]);
                                                    a.startInstance(cm.getPlayer());
                                                    a.setProperty("PQLog", PQLog[chs]);
                                                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("(终于搞清楚秘密书库的位置了。现在就剩下寻找#t4034637#了。)", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                cm.forceCompleteQuest(62011);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                cm.dispose()
            }
        }
    }
}
var open = true;
var PQname = ["副本_少林寺_藏经阁密道"];
var PQLog = ["副本_少林寺_藏经阁密道"];
var startmap = 701220200;
var minLevel = [30];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var status = -1;
var minPlayers = 1;
var maxPlayers = 1;
var moblevel = 255;
var chs = 0;