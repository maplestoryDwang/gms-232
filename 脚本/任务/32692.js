var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("进行得怎么样了？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（咳咳），#k差不多了。明天零时左右就能启动了。", 36, 2550002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("迈勒，你还好吧？我看你好像消瘦了不少。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("没事，只是长时间集中精力，有点疲惫而已。", 36, 2550002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不说这个了，现在战况如何？", 36, 2550002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("现在还能应付……重要的是明天。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#fs#狮子王的大部队明天就要到了。#k#fs16#\r\n我派海姿过去，让他无论如何也要拖延时间，但是恐怕不行了。", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你也别太担心，大家都有心理准备。\r\n虽然现在说这个有点晚了，不过和队长一起作战还能活到现在，我已经觉得是个奇迹了。", 36, 2550002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("哈……哈哈……", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("还有#b作战备案#k呢……应该能行吧。", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("你说的不会是“那个”吧？我想起了不好的回忆呢。", 36, 2550002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("别担心，只是用来确保退路而已。如果不出意外的话。", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("如果不出意外……的话。", 36, 2550002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askYesNo_Bottom("外面这么混乱，貌似是海姿那家伙回来了。\r\n看来需要你去看看。", 36, 2550002)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(32692, "");
                                                                    cm.sendNormalTalk_Bottom("那就，继续加油吧。", 56, 0, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("…………", 36, 2550002, true, false);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("你回来了，海姿。死伤情况如何？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("失去了7个士兵。都……回归故乡了。", 36, 2550001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是吗……愿他们能安息吧……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我判断实在无法继续坚持，才带着剩下的人回来了。\r\n敌人的大部队恐怕明天就到了。", 36, 2550001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("辛苦了。明天就是最后一仗了。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你看到阿丽莎了吗？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我在回来的路上碰见她了，她和我们一起进城了。\r\n她好像捕获了不少怪物，很开心的样子呢。", 36, 2550001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("那就好……\r\n我去休息了。明天就是最后一仗了，你也好好休息一下吧。", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose();
                                            cm.warp(306090060, 0);
                                            cm.gainExp(186336)
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