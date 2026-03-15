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
            cm.updateInfoQuest(40306, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40306.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("嗯？什么……你们还没放弃啊？我说过我不去了……嗯？不是这个？", 33, 2440000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face5#是啊。我们去了趟#p2440001#那里，他说你最近因为太困了都无法正常干活，让我们把这药交给你。快，拿着吧。", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#p2440001#咦？他不是这种人啊，可真是稀奇啊。嗅嗅……味道挺不错的。那就帮我谢谢他吧。", 33, 2440000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face4#他让我们看着你吃药。", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face4#啊，对了！他说你一厌倦了就不会吃药，所以一定要让我们看着你把药吃完。", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是吗？这家伙还真了解我……唉，那么我就喝了？", 33, 2440000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("药还是会苦啊。我已经喝完了……那么……要睡……", 33, 2440000, true, true);
                                    cm.gainItem(4033834, -1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face3#成功了吗？嘿嘿", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("怎么突然……感觉……这么……困？你们……该不会……？", 33, 2440000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face2#好好睡吧。", 41, 2400006, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(40316, "1");
                                                    cm.sendNormalTalk("#face2#真简单。不过精神力强的仙人，马上就会醒来的，我们赶紧把他带回去吧。", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("嗯。", 41, 2400006, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("其他人都很自觉地变成了宝石，这家伙可真麻烦。", 41, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_MoveAction(1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_ChangeController(2440019, "oid=2832224", 195, 180, 12, 145, 245, 1, false, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=2832224", "summon", 0, 0);
                                                                        cm.sendNormalTalk("你、你们！你们要把哥哥带到哪里去？！", 33, 2440019, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("……什么呀？少管闲事。", 41, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("少、少管闲事！你们绑架别人，还有脸说？虽然不是亲哥哥，但是#p2440000#比我亲哥哥还亲！你们绝对不能带走！", 33, 2440019, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#face2#这家伙真烦。#p2400006#，你去堵住他的嘴巴。说不定#p2440000#会被吵醒。", 41, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("嗯。", 41, 2400006, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("不行！放下我哥！你们要把我哥带到哪里去，你们这些坏人！", 33, 2440019, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("#face3#哼，随便你怎么骂，我们只是做了该做的事情而已。", 41, 2400005, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("哥！快睁开眼睛！哥！他们在绑架你！#p2440000#哥！", 33, 2440019, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.forceStartQuest(40316, "0");
                                                                                                        cm.sendNormalTalk("哈啊啊啊……太守，给我来杯冰水……不对……这是怎么回事？", 33, 2440000, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("切，醒过来了！", 41, 2400006, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("额！你们，你们到底喂了我什么？难道趁我睡着的时候，想带我走？！可、可怕的家伙……", 33, 2440000, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("但是，我既然睁开了眼睛，就不会再上你们当了！我绝对不会回去！我要在这里舒舒服服地过着！", 33, 2440000, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk("#face3#失败了吗……没办法了，就用最后一招。#p2400006#！你没忘记刚才我说的话吧？", 41, 2400005, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk("嗯。", 41, 2400006, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk("#face3#不跟我们回去，我们就要了这孩子的命！如果你按照我们说的做，就放了这孩子！", 41, 2400005, false, true);
                                                                                                                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/threat/0", 1, 1, 1, 0, 0)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk("额啊？你们在干什么！你们不是神之子吗？你们怎么能这么乱来，威胁别人？我可是女神之泪！", 33, 2440000, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk("#face2#你都不愿意和我们走，还说什么自己是女神之泪？少说废话，赶快决定。是要和我们回去，还是要牺牲这个孩子。", 41, 2400005, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk("坏人！", 33, 2440000, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk("#face3#哎呀呀？我的手怎么越来越滑了？", 41, 2400006, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk("哥！哥！救救我！", 33, 2440002, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk("住、住手！你们太狠毒了！我跟你们走不就行了！", 33, 2440000, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk("#face2#嘿嘿嘿嘿……", 41, 2400005, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk("#face2#嘿嘿嘿嘿……", 41, 2400006, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk("#face3#你一开始乖乖地听我们的话不就行了。好了，走吧。#p2400006#，等#p2440000#这家伙变成宝石之前，绝对不要放了他。", 41, 2400005, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk("等、等一下！给我一点时间！我在这里活了这么久，我岂能就这么轻松地离开！给我时间整理一下！", 33, 2440000, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk("#face3#其他的女神之泪都很轻松地离开了，不是吗？", 41, 2400005, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk("是、是嘛？但那是他们自己的事，我可不一样！别担心！我肯定会遵守诺言！我整理完，就会跟你们去的！", 33, 2440000, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk("哼，你不会是在说谎吧？好吧，#p2400006#，放了他。", 41, 2400005, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/threat/0", 1, 0, 0, 0, 0)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk("#face4#我很宽容，我就相信你这一次，如果你敢说谎的话……", 41, 2400005, false, true);
                                                                                                                                                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk("还宽容呢。自言自语……知、知道了。我肯定会回去的，你们过一会儿再来吧。", 33, 2440000, true, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.forceCompleteQuest(40306);
                                                                                                                                                                                                        cm.forceCompleteQuest(40931);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2100)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.gainExp(5700000);
                                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                                            cm.warp(324000000, 11, false);
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};