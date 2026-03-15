var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("呜……啊！这……这里是什么地方？姬儿，姬儿人呢！？我的斩霞之刀又跑到哪里去了？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呜……不好。不仅斩霞之刀消失不见了，就连我身上的铠甲也被彻底破坏了。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("先来冷静地整理一下现状吧。我记得在那个时候，我为了救出姬儿而进入了本能寺，并与信长进行了对峙……醒来后的姬儿呼唤了一声我的名字，瞬间就有一道强烈的光柱出现，我也随之昏了过去。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("周围的景色看起来非常陌生……很明显，这里并不是本能寺。这究竟是怎么一回事啊？话说回来，在刚才醒来的时候，我似乎听到了有人说话的声音。先让我四周查探一下再说吧。", 56, 0)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(57102);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askAcceptDecline_Bottom("#face0#我们将新的据点称作枫叶山丘。这是一个飘散着鲜红枫叶的地方。好了，去营地看看吧。我来帮忙带路。", 36, 9130024)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57102);
                cm.gainExp(1242);
                cm.dispose()
            }
        }
    }
};