var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("其实我已经知道了。隐月你总有一天会离开。因为在隐月身上有着风的味道。", 1, 3002000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……", 3, 3002000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我把精灵送给你，其实是不想让你走。让你在旁边保护我，那样你就不会走了。你不是答应我的吗？要保护我。所以，所以……", 1, 3002000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……我有个朋友。他是最先向我伸出手的人。他告诉认为自己没有理由活下去的我，你也没有理由要去死，让我们一起去寻找活下去的理由。", 3, 3002000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("在来到这里之前，我最后一个见到的人也是他。虽然做出选择的人是我，但最痛苦的人应该是他。他可能以为我已经死了，一定生活在负罪感之中。", 3, 3002000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……", 1, 3002000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我必须得回去。必须回去告诉那些还在等着我的人、正在经受痛苦的人，我还活着。而且我还要守护住他们所深爱的家园。还有…………当我处理完所有的事情后…………那时候，我会再回来。", 3, 3002000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……我也是隐月的朋友，对吧？我也是那么重要的人……对吧？", 1, 3002000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……当然。", 3, 3002000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我们狐狸把这叫做伙伴。伙伴。隐月和阿琅是伙伴，所以你必须快点回来。我会非常想念隐月，所以我会很难过的。明白了吗？", 1, 3002000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("不对，隐月是个笨蛋，也许会全部忘掉。所以，这样……", 1, 3002000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/tatoo/0"], [0, -54, -300, 1, 0, 1, 1, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2400)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(38901, "");
                                                                cm.forceStartQuest(38901, "");
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("来，这是作为朋友的证物。你既然对着狐狸树立下约定，就一定要遵守。如果违背的话，狐神就会震怒，并对你处以可怕惩罚的！", 1, 3002000, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("呃啊，我肚子好饿啊。我先走了，慢腾腾的隐月跟在我后面把！拜~", 1, 3002000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.updateInfoQuest(38027, "");
                                                                                cm.forceStartQuest(38027, "");
                                                                                cm.forceCompleteQuest(38027);
                                                                                cm.gainExp(6000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("雨……下个不停。", 3, 3002000, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.dispose();
                                                                                        cm.warp(940200020, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38027.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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