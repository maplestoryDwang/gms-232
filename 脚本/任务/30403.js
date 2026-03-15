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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/30403.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("兴夫大叔？不知道，我看他突然一副生龙活虎的样子，\r\n一言不发地拿着饭勺就走了……\r\n啧啧，去哪儿了？不知道，你去问问#g七诚大叔#k，我嫌烦。", 37, 2074143, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(30403, "NpcSpeech=20740061");
                cm.dispose()
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("你是哪位？你知道兴夫为什么会那样吗？\r\n嗯，他原本可不是那样的人，为什么会那样呢？", 37, 2074123, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那眼神绝对不太正常……\r\n我是没看到他去哪儿了，不过也许#g沈师铭#k能听到点什么。", 37, 2074123, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(30403, "NpcSpeech=20740061/20740042");
                    cm.dispose()
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("你现在是在向我问路吗？\r\n呵呵……", 37, 2074110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("虽然不知道是谁，不过刚刚我听到，有人急匆匆地往#b左上方#k那边跑过去了。\r\n估计，应该是#g乐夫家#k的方向吧。\r\n还有，下次就不要来找我问路了。", 37, 2074110, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这可真是，活到这把岁数，居然能见着有人找瞎子问路的。", 37, 2074110, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(30920, "1");
                        cm.updateInfoQuest(30403, "NpcSpeech=20740061/20740042/20740033");
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function stage3(d, c, b) {
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("门被摧毁了？！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(284119);
                cm.updateInfoQuest(30403, "NpcSpeech=20740061/20740042/20740033/20740204");
                cm.updateInfoQuest(30403, "gExpCheck=1;NpcSpeech=20740061/20740042/20740033/20740204");
                cm.forceCompleteQuest(30403);
                cm.setInGameDirectionMode(false, true, false);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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