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
            cm.sendNext("……那……那！你快点醒醒啊……！", 9130081)
        } else {
            if (status === a++) {
                cm.sendNextPrevS("呜……呜呜……")
            } else {
                if (status === a++) {
                    cm.sendNextPrev("神那，你快点醒醒啊！", 9130081)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("啊！")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("你总算是醒了，居然睡得这么毫无防备……", 9130081)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrevS("这里是什么地方？呜……我记得，我是为了阻止魔王降临的仪式，和变坏了的兰丸大战了一场之后，前去破坏了祭坛……我应该已经阻止了仪式的进行，但怎么也想不起来之后到底发生了什么。这到底是怎么回事啊？")
                            } else {
                                if (status === a++) {
                                    cm.sendNext("这个嘛，其实我所掌握的情况也和你差不了多少。正好附近有人在，不如先去向人家问问看吧？也有我们认识的人在这里呢。", 9130081)
                                } else {
                                    cm.forceStartQuest();
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
            cm.sendNormalTalk_Bottom("#face0#哦哦，这不是神那大人吗？神那大人也平安到达“这边”了啊。你现在的思绪肯定还很混乱，等你休息好后，我们再来说说现在的情况吧。", 37, 9130022, true, true)
        } else {
            if (status === a++) {
                cm.gainExp(1242);
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};