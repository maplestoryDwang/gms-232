var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextPrev("#h0#、该要到回去的时间了。", 32)
    } else {
        if (status == 1) {
            cm.sendNextPrev("是吗…了解了。", 56)
        } else {
            if (status == 2) {
                cm.sendNextPrev("很难得，所以最後去向想要到别的人打个招呼如何？", 32)
            } else {
                if (status == 3) {
                    cm.sendNextPrev("去跟最初给马铃薯的孩子们打个招呼吧，去制作最後的回忆吧。", 56)
                } else {
                    if (status == 4) {
                        cm.sendNextPrev("那去打个招呼後再来吧. 我在视野良好的城墙上等你。", 32)
                    } else {
                        if (status == 5) {
                            cm.forceStartQuest();
                            cm.dispose()
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextS_New("唷~好久不见！", 56)
    } else {
        if (status == 1) {
            cm.sendNextPrev("哇！你好！好久不见耶!", 32)
        } else {
            if (status == 2) {
                cm.sendNextPrev("最近也常常肚子饿吗？", 56)
            } else {
                if (status == 3) {
                    cm.sendNextPrev("不. 现在我开始帮我母亲. 父亲回来前，因为我要保护我妈妈阿", 32)
                } else {
                    if (status == 4) {
                        cm.sendNextPrev("哇！很勇敢呢！话说我晚点会离开这里. 所以我来跟你告别了. 你要保重喔。", 56)
                    } else {
                        if (status == 5) {
                            cm.sendNextPrev("是去旅行吗? 有点羡慕呢. 哪时候会回来呢? 你会回来吧？", 32)
                        } else {
                            if (status == 6) {
                                cm.sendNextPrev("嗯…我回来的话，我一定会再来看你的. 要保重喔。", 56)
                            } else {
                                if (status == 7) {
                                    cm.sendNextPrev("(感到有点依依不舍的心情. 到跟 K要见面的城墙上吧。)", 56)
                                } else {
                                    if (status == 8) {
                                        cm.forceCompleteQuest();
                                        cm.warp(814000900, 1);
                                        cm.dispose()
                                    } else {
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
};