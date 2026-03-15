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
            cm.sendNormalTalk_Bottom("那个，\r\n虽然这件衣服并不是拿来卖的，不过您觉得这件怎么样？", 37, 2074116, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哎哟？这件衣服是什么啊？\r\n太漂亮了吧！幸好这件没被买走。", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("其实，这是我亲手做的衣服。", 37, 2074116, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你亲自做的吗？这件？\r\n这身衣服这么漂亮，要是穿上这件表白，肯定谁都会被迷倒的。\r\n实在是太漂亮了，真的可以卖给我们吗？", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("其实这件本来是我做给自己穿的……但没关系的，我也没可能了，\r\n而且毕竟没能守住衣服也是我的责任，\r\n无妨的，还请您收下。", 37, 2074116, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#那可不是姑娘你的错，\r\n毕竟也是你自己的衣服……实在是太感谢了。\r\n小荳也真的会很开心的。", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("真希望她能够表白成功，我是真心的，\r\n希望她穿上这身衣服一定要幸福。", 37, 2074116, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(30919, "1");
                                        cm.forceCompleteQuest(30919);
                                        cm.forceForfeitQuest(30919);
                                        cm.updateInfoQuest(30919, "");
                                        cm.forceStartQuest(30925, "1");
                                        cm.forceCompleteQuest(30925);
                                        cm.forceForfeitQuest(30925);
                                        cm.updateInfoQuest(30925, "");
                                        cm.forceStartQuest(30443, "");
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
            cm.dispose();
            cm.warp(224000050, 15, true)
        }
    }
};