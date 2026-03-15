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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40207.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("#face11#……为什么后退？那洞里不是有#p2430000#吗？", 41, 2400006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("里边有影子骑士团。可恶，这帮家伙什么时候追踪我们到这里来了？或许是……碰巧？难道被他们发现是女神之泪，他们特地来守着的吗？", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face11#影子骑士团不是没有关系嘛，我们只要救出#p2430000#就行了。", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("说什么呢，影子骑士团的家伙们正在抓我们。我们最好能避开他们寻找时间之力，一旦被他们发现了我们以后可就有的玩了。", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11#那你打算就这么不管#p2430000#了？", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我哪说过不管他了？只是我们的优先级要改变了而已。因为女神之泪总共分成了6个，我们先去寻找其他的，等提升我们的力量之后再来救#p2430000#也为时不晚。", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face1#那就太晚了！", 41, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face11#寻找女神之泪，和顺序没关系吧？有什么晚不晚的？那样做的话，反而会被他们纠缠住的，速度也会很慢。", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face11#我不管速度快不快……但是对#p2430000#来说就是太晚了。", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face1#我不是说我们晚点再救出#p2430000#吗！你为什么听不懂话？不理解我的意思吗？", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face1#我知道！但是我不想去理解！我只想先救出#p2430000#！", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face11#就因为#p2430000#太可怜了？我也知道他很可怜！看到日记我就知道这孩子多么盼望我们的出现！但是也不能因为这样，坏了所有的事情。", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#face11#你也知道吧？我们的目的是打倒#p2410000#，冲向冒险岛世界。想要达到目的，就要计划周密，不可感情用事啊！", 41, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face10##p2400005#说什么我都想先救出#p2430000#！用理性来讲也许你说的没错……可是，可是我！", 41, 2400006, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#face1#给我振作点！你被关在神殿里那么久，不知道这世间的情况！我曾说过，这种时候就要听我的话吧？", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#face11#…………", 41, 2400006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("#face11#生气也没用，这个是最理智的顺序，所以绝对不行。我们先回到神殿，再想想如何找回女神之泪吧。知道了吗？", 41, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceCompleteQuest(40207);
                                                                                    cm.forceCompleteQuest(40923);
                                                                                    cm.gainExp(7043000);
                                                                                    cm.dispose();
                                                                                    cm.warp(323000000, 9, false);
                                                                                    cm.setInGameDirectionMode(false, true, false)
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
        }
    }
};