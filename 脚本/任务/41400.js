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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("听了两位的歌声，黑暗龙王竟然会嚎啕大哭？奇怪了，两位的歌声如天籁般美妙……", 33, 2400000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们觉得唱得还不错，虽然音有点高了。对吧？", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…………", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("女神偶尔也会弹奏竖琴唱一曲，她的歌声感觉可以治愈一切的悲痛。", 33, 2400008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的是的，我也记得。那这么说来，阿尔法和贝塔应该要唱得很好才对吧？", 33, 2400007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("没听说过唱歌也会遗传，阿尔法和贝塔就算是音痴也没什么稀奇的。", 33, 2400001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你们在说什么！我们的阿尔法和贝塔怎么可能是音痴呢。来吧，两位好好来唱一曲。皮埃一天到晚听着两位的声音，都会感到非常的幸福。", 33, 2400000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嘿嘿，虽然有点惭愧，要不我们来唱一曲？贝塔，你准备好了吗？那么就开始了。", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face5#睡吧~睡吧~我的宝贝~~~睡吧~睡吧~我的宝贝~~~~~~~~~~", 41, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face1#……停，停下！！！呜哇，真的不能再听下去了。", 33, 2400007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("貌似神殿的玻璃都碎掉了！", 33, 2400001, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("啊啊，女神啊……", 33, 2400008, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("真的有那么难听吗？皮埃，你觉得也是吗？", 41, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face0#只要是两位唱的歌，就算声音如杀猪般嚎叫，我也已经做好心理准备了！", 33, 2400000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#face7#杀猪……嚎叫……", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.updateInfoQuest(41400, "");
                                                                        cm.forceStartQuest(41400, "");
                                                                        cm.forceCompleteQuest(41400);
                                                                        cm.gainExp(420000);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.gainItem(4310085, 5);
                                                                        cm.gainItem(2001530, 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41400.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};