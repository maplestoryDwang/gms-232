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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("希纳斯，这是我的朋友#h0#。打个招呼吧，这是希纳斯。", 5, 2520000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus("你好，#h0#。很高兴认识你。", 2520002, 5, true, true, 2)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……！", 17, 2520001, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("她比我想象中要小很多。", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("……还是个孩子啊? 你是说要让这个孩子坐上女皇之位? ", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("难道不过分吗? 我这么大的时候，还在问妈妈要钱买糖吃呢。", 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("心里突然有点不舒服……究竟是要让这孩子背负多么大的负担啊? ", 1)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                        } else {
                                            if (status === a++) {
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.sendNormalTalk("希纳斯，#h0#是非常能干的武士。以后的1年里，他将会和我们一起，帮助女皇你成长。", 5, 2520000, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("！！什么？喂，等下……", 17, 2520001, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Illus("是真的吗？那真是太好了，这对我们很有帮助。", 2520002, 5, true, true, 2)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#b(……咳，这家伙，知道我没办法当着小孩子面前拒绝……！)#k", 17, 2520001, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Illus("我现在还年幼……也没有足够的资格成为女皇。虽然我具有女皇血统，但我仍然很担心，不知道自己能不能成为一位优秀的女皇。拜托你了，#h0#。", 2520002, 5, true, true, 2)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(32606, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32606.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("将一个人推上女皇之位，是件非常危险而沉重的事情。即便是圣地长老也无法轻易决定。明年春天，将召集议会，来判断希纳斯是否具备成为女皇的资格。", 5, 2520000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#h0#只要完成 #e我拜托给你的事情#n，帮助希纳斯具备女皇的资格就可以了。", 5, 2520000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，好，明白了，哈哈哈……\r\n\r\n#b(抖肩) 喂，你这家伙……我说怎么觉得不对劲呢，原来你给我挖了陷阱？#k", 17, 2520000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那么就从明天开始执行任务吧？\r\n\r\n#b(抖肩)你不会要拒绝吧？看着她亮晶晶的双眼，你能狠心拒绝吗？#k", 5, 2520000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("…………谁说要拒绝了？就1年啊！再长就不行了。你听明白了吧？", 17, 2520000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("遵命。", 5, 2520000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("切，记住，这是你的荣幸！", 17, 2520000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("什么话？是#h0#你的荣幸才对吧，这可是辅助未来女皇希纳斯呢。就你，也敢觊觎这种荣幸？", 5, 2520000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("呃……#b(讨厌的家伙，一点亏都不肯吃……以后我这是要吃苦了吗？)#k", 17, 2520000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose();
                                                cm.warp(303090100, 0, false)
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