var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(32970, "s1=1;s2=1");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
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
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -85, -20);
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.sendNormalTalk_Bottom("米露，你不好奇吗？", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯？外面的世界吗？", 37, 2560002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我只是有点好奇。\r\n进入#r镜世界#k之后，外面的记忆不是全都失去了吗？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("原来的我是什么样子的呢？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#这个嘛？都说镜世界是为了困住#r不洁者#k……但是……\r\n其实对我来说，这里更像是现实世界。", 37, 2560002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#虽然医务队的事情很麻烦……但我还是喜欢这个地方。", 37, 2560002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#如果没有某个家伙……", 37, 2560002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你该不会是在说我吧？", 37, 2560006, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_ChangeController(2560006, "oid=3560094", -300, -20, 8, -350, -250, 0, false, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=3560094", "summon", 0, 0);
                                                            cm.npc_ChangeController(2560004, "oid=3560095", -430, -20, 8, -480, -380, 0, false, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=3560095", "summon", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#怎，怎么会。", 37, 2560002, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#不管怎样都好，你能安静一下吗？\r\n要是有怪物出现，还不是得由我们解决。", 37, 2560006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#你们医务队员只要去采采果实就行了。", 37, 2560006, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……哈哈哈，说得没错。不好意思。", 37, 2560002, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("我们也在努力训练……", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#训练？也是，估计没有人比你更擅长用勺子了，哈哈哈。", 37, 2560006, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#够了，肯。", 37, 2560004, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#影子怪物马上就会出现，队长让我们马上回去。\r\n#r艾特#k会展开歼灭作战。", 37, 2560004, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("艾特……", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#反正我们已经传达到了。别给我们惹事～", 37, 2560006, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.Npc_Fadeout("oid=3560094", 0, 1000);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.npc_LeaveField("oid=3560094");
                                                                                                                cm.npc_LeaveField("oid=3560094");
                                                                                                                cm.sendNormalTalk_Bottom("#face0#肯，你这家伙总是……", 37, 2560004, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你们俩小心点。\r\n如果遇到了影子怪物，别忘了吃#b中和剂#k。", 37, 2560004, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯，我们也不想因为诅咒而变成怪物。", 37, 2560002, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.Npc_Fadeout("oid=3560095", 0, 1000);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.npc_LeaveField("oid=3560095");
                                                                                                                                    cm.npc_LeaveField("oid=3560095");
                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                    cm.eventSKill(0);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#不过真遗憾。要是再搜集一些，就能搜集到需要的量了。", 36, 2560002, false, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("我再搜集一些。你先回去吧。", 56, 0, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#是吗？那我先回去整理一下。其余的材料就拜托你了。", 36, 2560002, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##i4036341##t4036341#从#b#m307000010##k的#b#o8230062##k身上很容易就能搜集到。", 36, 2560002, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.forceStartQuest(32970, "");
                                                                                                                                                    cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0");
                                                                                                                                                    cm.OnStartNavigation(307000000, 0, "pt00", 0);
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

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(" 事情全都做完了……要稍微逛逛吗？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("反正只要不接触就没关系……", 57, 0, true, true);
                cm.spawnMobLimit(8230062, 1, -595, -6, 100);
                cm.spawnMobLimit(8230062, 1, 307, -6, 100);
                cm.spawnMobLimit(8230062, 1, -494, -6, 100);
                cm.spawnMobLimit(8230062, 1, -381, -6, 100);
                cm.spawnMobLimit(8230062, 1, -718, -6, 100);
                cm.spawnMobLimit(8230062, 1, -241, -6, 100);
                cm.spawnMobLimit(8230062, 1, -137, -6, 100)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(307090010, 0, true)
                }
            }
        }
    }
};