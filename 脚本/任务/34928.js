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
            cm.sendNormalTalk_Bottom("#face0#嗯……来啦。在你帮助巴克巴克的时候，维依又搜索了一下电波……果然分散在各处。", 36, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#首先，最好从距离避难处最近的电波开始确认……怎么样……要去看看吗？", 36, 3001508, 1, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#谢谢你，亚克。和维依一起，到捕捉到电波的位置去确认一下吧。", 36, 3001508)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#啊，感觉到电波的地方是#r#m402000615##k。我想马上去确认一下，叽，叽勒。", 36, 3001510, 0, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34928, "");
                            cm.OnStartNavigation(402000615, 0, "", 34928);
                            cm.dispose()
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34928.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#（轻轻翻开堆积的沙子，看到了一个闪闪发光的东西。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 500, 0);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/expectation", 100);
                cm.fieldEffect_ProcessOnOffLayer("d0", "Effect/Direction17.img/effect/ark/illust/7/0", 0, 300, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                    cm.fieldEffect_ProcessOnOffLayer("d0", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#哎呀，碎成了碎块。这东西好像坏掉了，叽，叽勒……", 37, 3001510, 0, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不，动力源本来就是三个一组。把它带回避难处去吧。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#（和记忆中的那个东西一模一样。要是找到其余两个……应该就能重新启动。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(34928);
                                    cm.gainExp(5285);
                                    cm.updateInfoQuest(34928, "exp=1;e1=2");
                                    cm.updateInfoQuest(34995, "00=h1;10=h0;01=h1;11=h0;02=h1;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                                    cm.Hidden_background("core0", 1, 0, 0, 0);
                                    cm.Hidden_background("core1", 1, 0, 0, 0);
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.eventSKill(0);
                                                    cm.warp(402000600, 3, false);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.npc_LeaveField("oid=144116481");
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
};