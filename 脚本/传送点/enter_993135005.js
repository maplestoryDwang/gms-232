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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -170, -75);
            cm.curNodeEventEnd(true)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(3004326, "oid=2773236", 1211, -555, 8, 1161, 1261, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=2773236", "summon", 0, 0);
                cm.npc_ChangeController(3004330, "oid=2773237", 1345, -554, 8, 1295, 1395, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=2773237", "summon", 0, 0);
                cm.npc_ChangeController(3004323, "oid=2773238", -165, -97, 11, -215, -115, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=2773238", "summon", 0, 0);
                cm.npc_ChangeController(3004322, "oid=2773239", -106, -97, 11, -156, -56, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=2773239", "summon", 0, 0);
                cm.npc_ChangeController(3004330, "oid=2773240", 0, -105, 12, -50, 50, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=2773240", "summon", 0, 0);
                cm.Npc_Fadeout("oid=2773240", 0, 10);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("看那边！", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushScaleInfo(700, 0, 2000, 700, 1310, -568)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayBGM("Bgm26/DarkMage", 0, 0);
                                    cm.sendNormalTalk_Bottom("#fs20##r白魔法师#k#n？！", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("历史中出现在特鲁埃博的明明是黑魔法师才对？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face4#超越者可以超越时空对整个世界造成影响。", 37, 3004323, true, true);
                                            cm.effect_Voice("Voice5.img/CH1/Lily/6", 128)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face4#你之前说过，真正的黑魔法师在消亡前，回到了凡人的形态？\r\n这里的白魔法师应该是受到了那时候的影响。", 37, 3004323, true, true);
                                                cm.effect_Voice("Voice5.img/CH1/Lily/7", 128)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#嘘，仔细听。", 37, 3004322, true, true);
                                                    cm.effect_Voice("Voice5.img/CH1/Elwyn/3", 128)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#清除阿卡伊勒这件事就交给在莫拉斯重现的另一个我负责。", 37, 3003923, false, true);
                                                            cm.effect_Voice("Voice5.img/CH1/Heinze/13", 128)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#实现目标的过程难免漫长而曲折。", 37, 3003923, true, true);
                                                                cm.effect_Voice("Voice5.img/CH1/Heinze/14", 128)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#虽然我还在跟随世界法则的指引……", 37, 3003923, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH1/Heinze/15", 128)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#然而因其复杂性和不确定性……\r\n或许可以在过程中埋下一些挣脱命运的伏笔。", 37, 3003923, true, true);
                                                                        cm.effect_Voice("Voice5.img/CH1/Heinze/16", 128)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#复杂性和不确定性？", 37, 3004323, false, true);
                                                                                cm.effect_Voice("Voice5.img/CH1/Lily/8", 128)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/heinzTeleport", 100);
                                                                                        cm.npc_SetSpecialAction("oid=2773236", "teleport", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.userSetFieldFloating(993135005, 3, 3, 3);
                                                                                            cm.npc_LeaveField("oid=2773236");
                                                                                            cm.npc_LeaveField("oid=2773236");
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(700)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.userSetFieldFloating(993135005, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(700)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#啊！", 37, 3004322, false, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH1/Elwyn/4", 128)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -114, -115)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.npc_LeaveField("oid=2773237");
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#怎么办？我们要去追师父才行啊……\r\n可如果#r那家伙#k在旁边的话，我无法开启传送门啊？", 37, 3004322, false, true);
                                                                                                                        cm.effect_Voice("Voice5.img/CH1/Elwyn/5", 128)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face2#嗯……近距离接触他，会很危险吧？？", 37, 3004323, true, true);
                                                                                                                            cm.effect_Voice("Voice5.img/CH1/Lily/9", 128)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.Npc_Fadeout("oid=2773240", 255, 10);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2773240", "tel", 1, 1);
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/will_teleport", 200);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2773238"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2773239"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("呃……", 57, 0, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#哈？这……怎么办？！", 37, 3004322, true, true);
                                                                                                                                                cm.effect_Voice("Voice5.img/CH1/Elwyn/6", 128)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#我不是黑魔法师。\r\n因此，我们应该不会威胁到彼此的存在。", 37, 3003900, false, true);
                                                                                                                                                        cm.effect_Voice("Voice5.img/CH1/White/1", 128)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#既、既然你没有敌意……请告诉我们。", 37, 3004323, true, true);
                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/Lily/10", 128)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#你和师父说了什么？师父又去哪里了呢？", 37, 3004323, true, true);
                                                                                                                                                                cm.effect_Voice("Voice5.img/CH1/Lily/11", 128)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#他什么都没有问。\r\n他只是在进入此地的那一刻，就自行领悟了。", 37, 3003900, true, true);
                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH1/White/2", 128)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#他……领悟了什么？", 37, 3004323, false, true);
                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/Lily/12", 128)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#'超越者为何而存在……' \r\n就是这个问题的答案。", 37, 3003900, true, true);
                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH1/White/3", 128)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("超越者……是为何而存在呢？", 57, 0, false, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm34.img/TheAurora", 0, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", "ani_01", "", "01"], [0, 1, 1, 100000, 0, 0, 0, 1]);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#很久以前，在超越者出现之前，\r\n这世上存在着许多无法预测且不受约束的古代生命。", 37, 3003900, false, true);
                                                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH1/White/4", 128)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#他们都曾带有各自企图和目的，是#r独立的人格神#k，\r\n会视情况，积极地干预这世界的事务。", 37, 3003900, true, true);
                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH1/White/5", 128)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#如此一来，混沌是无法避免的。", 37, 3003900, true, true);
                                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/CH1/White/6", 128)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##r'世界'#k希望通过对抗他们，从而变得井然有序。", 37, 3003900, true, true);
                                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/White/7", 128)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", "ani_02", "ani_03", "02"], [0, 0, 1, 0, 1, 10000, 0, 1]);
                                                                                                                                                                                                                                cm.fieldEffect_取消复合图片动画("01", 1, 10);
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#随着强大的法则开始压制#r古代的神明们#k\r\n他们留存于世的痕迹也逐渐变得无足轻重。", 37, 3003900, true, true);
                                                                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH1/White/8", 128)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#混沌就这样逐渐平息下去。", 37, 3003900, true, true);
                                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH1/White/9", 128)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#然而，#r世界#k并不满足于此。", 37, 3003900, false, true);
                                                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/White/10", 128)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#沉睡的#r古代神#k总有一日会再次苏醒，\r\n正是他们的暂时沉睡，导致了无数因果相互交错，并孕育了无尽的未来。", 37, 3003900, true, true);
                                                                                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH1/White/11", 128)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#那就意味着#r不确定性#k不会即刻终结。", 37, 3003900, true, true);
                                                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH1/White/12", 128)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", "ani_04", "", "03"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                                                                                                                                                        cm.fieldEffect_取消复合图片动画("02", 1, 10);
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4500)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#直到那时，未来之门依然洞开。\r\n无论是谁，亦不能预测或操纵命运。", 37, 3003900, false, true);
                                                                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/White/13", 128)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#于是#r超越者#k应运而生。", 37, 3003900, false, true);
                                                                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH1/White/14", 128)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.fieldEffect_取消复合图片动画("03", 1, 1000);
                                                                                                                                                                                                                                                                        cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", "ani_05", "ani_06", "04"], [0, 0, 1, 0, 1, 10000, 0, 1]);
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#一方面，他们想尽办法让古代神永远无法苏醒，\r\n另一方面，他们对整个世界产生了巨大的影响力。", 37, 3003900, false, true);
                                                                                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/White/15", 128)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#他们的存在减少了世界的不确定性，进而#r决定了未来的走向#k。", 37, 3003900, true, true);
                                                                                                                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH1/White/16", 128)
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/0/story_g", "ani_07", "", "05"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                                                                                                                                                                                    cm.fieldEffect_取消复合图片动画("04", 1, 10);
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(6000)
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                        cm.fieldEffect_取消复合图片动画("05", 1, 10);
                                                                                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                    switch (Math.floor(d / 100)) {
                                                                                                                                                                                                                                                                                                        case 31:
                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("（原来我们也不过是被制造出来用以#r操纵命运#k的工具而已？！）", 57, 0, true, true);
                                                                                                                                                                                                                                                                                                            break;
                                                                                                                                                                                                                                                                                                        default:
                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#连超越者也……确切地说，超越者才是为了#r操纵命运#k而被制造出来的工具。", 37, 3004323, false, true);
                                                                                                                                                                                                                                                                                                            break
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH1/Lily/13", 128)
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#那么师父得到这样的启示后，感到心满意足了吗？", 37, 3004323, true, true);
                                                                                                                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/CH1/Lily/14", 128)
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3003900, false, true)
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#（白魔法师摇了摇头。）", 37, 3003900, true, true)
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#至今还是无法解释，为何超越者空缺会导致这种现象发生。", 37, 3003923, false, true);
                                                                                                                                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH1/Heinze/17", 128)
                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                                                        cm.warp(993132500, 0, false);
                                                                                                                                                                                                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                                                                        cm.forceCompleteQuest(37307);
                                                                                                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=2773238");
                                                                                                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=2773238");
                                                                                                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=2773239");
                                                                                                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=2773239");
                                                                                                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=2773240");
                                                                                                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=2773240");
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