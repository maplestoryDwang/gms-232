var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1200, 1000, 2805, -22)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(3000)
            } else {
                if (status === a++) {
                    cm.npc_ChangeController(3004081, "oid=368340", 2678, 78, 0);
                    cm.npc_ChangeController(3004328, "oid=2752524", 3022, 78, 1);
                    cm.npc_ChangeController(3004329, "oid=2752525", 3044, 78, 0);
                    cm.npc_SetSpecialAction("oid=2752524", "special", -1, 1);
                    cm.npc_LeaveField("oid=2752525");
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_MoveAction(1);
                        cm.inGameDirectionEvent_AskAnswerTime(0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_AskAnswerTime(300)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 255, 0, 0, 0, 1500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.effect_Text(["#fn黑体##fs18#不久前，拉克兰"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("那么，就由我来负责押送军团长路西德。", 36, 1540451, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_MoveAction(1);
                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("南哈特，请稍微等一下。", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#h0#大人？", 36, 1540451, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("身为埃欧雷之王的我，应该更有权决定如何处置路西德。", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("难不成您要带她前往埃欧雷？", 36, 1540451, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("……对，她的状态很不稳定。\r\n在她恢复意识以前，我们会予以相应的保护。", 56, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#以埃欧雷的兵力而言，想要看守她简直是天方夜谭！\r\n即便您贵为精灵女王，在下也恕难从命。", 36, 1540451, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#若她有脱逃的意图，那么后果将不堪设想。", 36, 1540451, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("如果真到了那时候……我会阻止她的。", 56, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("所以，即便她醒过来的话……", 56, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#h0#大人，您也应该明白自己正在无理取闹吧。", 36, 1540451, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("……抱歉，南哈特。", 56, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("您有些反常。", 36, 1540451, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("在这次营救行动中遭遇了什么事情吗？", 36, 1540451, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("路西德……她……", 56, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("……在噩梦中不断呼唤着我的名字。", 56, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("您的名字？", 36, 1540451, false, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_MoveAction(2);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(0)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("数百年来，她一直在期盼着能被解救。", 56, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("独自一人，在令人窒息的黑暗中啜泣。", 56, 0, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("……", 36, 1540451, false, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("我知道的。\r\n路西德被她那荒诞的信念驱使，犯下了不可宽恕的恶行。", 56, 0, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("但在她为此付出代价之前……\r\n我并非以女王的身份……只是作为她的旧友。", 56, 0, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("希望她不要再被伤害了。", 56, 0, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("……这可有些难办了。", 36, 1540451, false, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("我能理解您的心情，可她身为黑魔法师的心腹，我无法就这么轻易地……", 36, 1540451, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.npc_ChangeController(3004158, "oid=368342", 2526, 78, 2, 2450, 2540, 0, true, 2000, false);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.npc_SetForceMove("oid=368340", -1, 0, 100);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(0)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.inGameDirectionEvent_MoveAction(1);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(0)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("南哈特大人……", 36, 3004158, false, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("女皇陛下传信？", 36, 1540451, false, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=368340"], [0, 5, -10]);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("嗯……好的。", 36, 1540451, false, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=368340", 1, 0, 100);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(800)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("遵女皇陛下之命……将军团长路西德交予埃欧雷处置。", 36, 1540451, false, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("！！！", 56, 0, true, true)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("如女皇陛下所言，我们没有理由回绝拯救世界之人的请求。", 36, 1540451, false, true)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("不过等她恢复意识后，联盟方面依然会要求她配合调查，还望您能理解。", 36, 1540451, false, true)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("一言为定。", 56, 0, true, true)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.Npc_Fadeout("oid=368340", 0, 2000);
                                                                                                                                                                                                                                    cm.Npc_Fadeout("oid=368342", 0, 2000);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#一切终于尘埃落定，真是可喜可贺。", 36, 3003251, false, true)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_MoveAction(2);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(0)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("防毒面具，谢谢你。", 56, 0, true, true)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("今后……你有什么打算？", 56, 0, true, true)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#还不知道拉克兰能维持多久。", 36, 3003251, false, true)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#不过这世界消失之前，我也想在其中“生活”下去。", 36, 3003251, false, true)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1700, 0, 2930, 39)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("路西德，你终于可以回家了……", 56, 0, true, true)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("这一切对你来说应该是一场漫长的噩梦。", 56, 0, true, true)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("不过从今往后……", 56, 0, true, true)
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("祝你好梦。", 56, 0, true, true)
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                            cm.setInGameDirectionMode(false, false, false);
                                                                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=368277");
                                                                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2752524");
                                                                                                                                                                                                                                                                                            cm.warp(993141003, 0, false);
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