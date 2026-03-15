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
            cm.askAcceptDecline("沙漠的白天很无聊吧？来，和我们一起来玩游戏吧，怎么样？什么游戏？嘿嘿，就是个简单的猜谜游戏，只要你能猜中了我就送你礼物。", 0, 2420003)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41055, "");
                cm.forceStartQuest(41055, "");
                cm.sendNormalTalk("出第一道题，在#b沙漠中最珍贵的东西#k是什么呢？提示嘛……没有。如果你知道答案就和我对话吧。", 0, 2420003, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(切，才这种水准的谜题，也太小看我神之子了。谁都知道，在沙漠里不喝“这个”东西，肯定必死无疑。这可是常识啊？)", 2, 2420003, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41055.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askText("知道问题的答案了吗？那就猜猜看吧。#r沙漠中最可爱的东西#k是什么？", "", 2420003, 0, 1000)
        } else {
            if (status === a++) {
                var d = cm.getText();
                if (d.equals("水")) {
                    cm.forceCompleteQuest(41055);
                    cm.gainExp(640000);
                    cm.sendNormalTalk("沙漠里最珍贵的就是水，在这么炽热的沙漠里没有水的话绝对活不了。你回答的很正确，比我想象的还要聪明啊。", 0, 2420003, false, true);
                    cm.gainItem(4310085, 5)
                } else {
                    cm.sendNormalTalk("答错了！你再好好想想。", 0, 2420003, true, true);
                    cm.dispose()
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("出第二道题，在阿里特安找个最耀眼的东西来吧，这次也没有提示。", 0, 2420003, false, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41056, "");
                        cm.forceStartQuest(41056, "");
                        cm.sendNormalTalk("(阿里特安最耀眼的东西？这个还真有难度，不过阿里特安当地人也许会知道吧？……跟他们要提示应该不算犯规吧。)", 2, 2420003, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};