function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    var d = cm.getJob();
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_AskAnswerTime(0)
        } else {
            if (status === a++) {
                switch (Math.floor(d / 100)) {
                    case 25:
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        break;
                    case 27:
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        break;
                    case 31:
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        break;
                    default:
                        cm.inGameDirectionEvent_AskAnswerTime(0);
                        break
                }
            } else {
                if (status === a++) {
                    switch (Math.floor(d / 100)) {
                        case 25:
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(0);
                            break;
                        case 27:
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(0);
                            break;
                        case 31:
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(0);
                            break;
                        default:
                            cm.inGameDirectionEvent_AskAnswerTime(0);
                            break
                    }
                } else {
                    if (status === a++) {
                        switch (Math.floor(d / 100)) {
                            case 25:
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                break;
                            case 27:
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                break;
                            case 31:
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                break;
                            default:
                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                break
                        }
                    } else {
                        if (status === a++) {
                            switch (Math.floor(d / 100)) {
                                case 25:
                                    cm.sendNormalTalk_Bottom("临走之前，我还有件事想问一下。", 57, 0, true, true);
                                    break;
                                case 27:
                                    cm.sendNormalTalk_Bottom("临走之前，我还有一件事想问你。", 57, 0, true, true);
                                    break;
                                case 31:
                                    cm.sendNormalTalk_Bottom("#face0#在离开之前，有件事应该让你知道。", 37, 3003900, false, true);
                                    break;
                                default:
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                    break
                            }
                        } else {
                            if (status === a++) {
                                switch (Math.floor(d / 100)) {
                                    case 25:
                                        cm.sendNormalTalk_Bottom("#face0#如果有关你所中的诅咒……", 37, 3003900, false, true);
                                        break;
                                    case 27:
                                        cm.sendNormalTalk_Bottom("我体内从黑魔法师那里转移来的#r黑暗#k……\r\n还是没有消失吗？", 57, 0, true, true);
                                        break;
                                    case 31:
                                        cm.sendNormalTalk_Bottom("……", 57, 0, true, true);
                                        break;
                                    default:
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                        break
                                }
                            } else {
                                if (status === a++) {
                                    switch (Math.floor(d / 100)) {
                                        case 27:
                                            cm.sendNormalTalk_Bottom("#face0#没错，它并没有消失。而是与你同化，成为了你的一部分。", 37, 3003900, false, true);
                                            break;
                                        case 31:
                                            cm.sendNormalTalk_Bottom("是有关黛米安和阿卡伊勒的事吗？", 57, 0, true, true);
                                            break;
                                        default:
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                            break
                                    }
                                } else {
                                    if (status === a++) {
                                        switch (Math.floor(d / 100)) {
                                            case 27:
                                                cm.sendNormalTalk_Bottom("……", 57, 0, true, true);
                                                break;
                                            case 31:
                                                cm.sendNormalTalk_Bottom("#face0#原来你已经知道了。", 37, 3003900, false, true);
                                                break;
                                            default:
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                break
                                        }
                                    } else {
                                        if (status === a++) {
                                            switch (Math.floor(d / 100)) {
                                                case 25:
                                                    cm.sendNormalTalk_Bottom("#face0#很抱歉，我并不知道该如何解除它。", 37, 3003900, false, true);
                                                    break;
                                                case 27:
                                                    cm.sendNormalTalk_Bottom("#face0#因此必须了解那股黑暗，更要学着如何去爱。", 37, 3003900, false, true);
                                                    break;
                                                case 31:
                                                    cm.sendNormalTalk_Bottom("只不过知晓了一点皮毛。", 57, 0, true, true);
                                                    break;
                                                default:
                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    break
                                            }
                                        } else {
                                            if (status === a++) {
                                                switch (Math.floor(d / 100)) {
                                                    case 25:
                                                        cm.sendNormalTalk_Bottom("……", 57, 0, true, true);
                                                        break;
                                                    case 27:
                                                        cm.sendNormalTalk_Bottom("#face4#就像拉尼娅一直以来所做的那样。", 37, 3003900, false, true);
                                                        break;
                                                    case 31:
                                                        cm.sendNormalTalk_Bottom("一开始……满腔怒火完全不知道该向谁倾泻。", 57, 0, true, true);
                                                        break;
                                                    default:
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                        break
                                                }
                                            } else {
                                                if (status === a++) {
                                                    switch (Math.floor(d / 100)) {
                                                        case 25:
                                                            cm.sendNormalTalk_Bottom("#face0#但不必多虑。\r\n因为再过不久，那诅咒本身也将失去意义。", 37, 3003900, false, true);
                                                            break;
                                                        case 27:
                                                            cm.sendNormalTalk_Bottom("啊……！", 57, 0, true, true);
                                                            break;
                                                        case 31:
                                                            cm.sendNormalTalk_Bottom("这件事究竟是阿卡伊勒的个人行为，还是他背后的黑魔法师蓄意引导。", 57, 0, true, true);
                                                            break;
                                                        default:
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            break
                                                    }
                                                } else {
                                                    if (status === a++) {
                                                        switch (Math.floor(d / 100)) {
                                                            case 25:
                                                                cm.sendNormalTalk_Bottom("嗯？这是什么意思？", 57, 0, true, true);
                                                                break;
                                                            case 31:
                                                                cm.sendNormalTalk_Bottom("时至今日，无论真相是怎样，都已经不重要了。", 57, 0, true, true);
                                                                break;
                                                            default:
                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                break
                                                        }
                                                    } else {
                                                        if (status === a++) {
                                                            switch (Math.floor(d / 100)) {
                                                                case 25:
                                                                    cm.sendNormalTalk_Bottom("#face4#你很快就会知道了。", 37, 3003900, false, true);
                                                                    break;
                                                                case 31:
                                                                    cm.sendNormalTalk_Bottom("因为阿卡伊勒，黑魔法师……以及黛米安，都已不在人世。", 57, 0, true, true);
                                                                    break;
                                                                default:
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                    break
                                                            }
                                                        } else {
                                                            if (status === a++) {
                                                                switch (Math.floor(d / 100)) {
                                                                    case 31:
                                                                        cm.sendNormalTalk_Bottom("我不想继续怀着愤怒和悔恨活下去了。", 57, 0, true, true);
                                                                        break;
                                                                    default:
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                        break
                                                                }
                                                            } else {
                                                                if (status === a++) {
                                                                    switch (Math.floor(d / 100)) {
                                                                        case 31:
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                        default:
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                            break
                                                                    }
                                                                } else {
                                                                    if (status === a++) {
                                                                        switch (Math.floor(d / 100)) {
                                                                            case 31:
                                                                                cm.sendNormalTalk_Bottom("#face0#看来你已经释怀了。", 37, 3003900, false, true);
                                                                                break;
                                                                            default:
                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                break
                                                                        }
                                                                    } else {
                                                                        if (status === a++) {
                                                                            switch (Math.floor(d / 100)) {
                                                                                case 31:
                                                                                    cm.sendNormalTalk_Bottom("释怀？我可没有那么高尚……只不过是就此作罢而已。", 57, 0, true, true);
                                                                                    break;
                                                                                default:
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                    break
                                                                            }
                                                                        } else {
                                                                            if (status === a++) {
                                                                                switch (Math.floor(d / 100)) {
                                                                                    case 31:
                                                                                        cm.sendNormalTalk_Bottom("#face0#既然如此，我只有一句话要说。", 37, 3003900, false, true);
                                                                                        break;
                                                                                    default:
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                        break
                                                                                }
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    switch (Math.floor(d / 100)) {
                                                                                        case 31:
                                                                                            cm.sendNormalTalk_Bottom("#face4#缅怀过去，但并不驻足于此，是因为生者仍需前行。", 37, 3003900, false, true);
                                                                                            break;
                                                                                        default:
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                            break
                                                                                    }
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_Hero9(0, 1500);
                                                                                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/bubble/skeleton", "animation", "", "bubble"], [0, 1, 0, 90000, 0, 0, -20, 1]);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3300)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_取消复合图片动画("bubble", 1, 1000);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("记忆中的白魔法师，对将要离开的我们露出了纯真的微笑。", 0)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("他保持着那样的微笑，被埃尔达的流动所同化，飘散于风中。", 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("所谓的复杂性和不确定性……", 57, 0, false, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.askYesNo_Bottom("#face0#如果不了解关于#b魔法和宇宙构成原理#k方面的知识，理解起来会很吃力。需要我简单为你解释一下吗？", 36, 3004323)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face5#我根本听不懂你在说什么。快给我解释解释。", 37, 3004322, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#也得要让哥哥知道才行……", 37, 3004323, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你想象一下在小箱子里放入几枚珠子，然后摇动箱子。", 37, 3004323, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#在没有外部因素影响，珠子数量不多，箱子受到的冲击和方向确定的情况下，我们可以推测出珠子的轨迹。", 37, 3004323, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#现在有一枚#r特异珠#k虽然比普通的珠子大，但大小和重量都不一样，把它放到这里怎么样？", 37, 3004323, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#嗯……推测过程可能会变复杂。\r\n因为珠子总是随意滚来滚去的，难免会互相胡乱碰撞。", 37, 3004322, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#无法预测会是哪个珠子被撞到，也无法预测它又会撞到哪个珠子。", 37, 3004322, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#没错，这会加深复杂性和不确定性。", 37, 3004323, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#所以世界才需要#r超越者#k。\r\n这样的特异珠，既可以驱离#r古代神#k，也能够抑制由他们带来的变动。", 37, 3004323, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#这样一来，既可以预知世界的未来，也可以操控未来了。", 37, 3004323, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("嗯……", 57, 0, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#所有人都知道，超越者就是为了维持世界秩序而存在的。\r\n然而这其中的原理，我至今才明白。", 37, 3004323, false, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#咦？所有人都知道这说法吗？", 37, 3004322, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#对……（也许除了哥哥之外）确实如此……", 37, 3004323, true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.warp(993135006, 0, false);
                                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2783822");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2783822");
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