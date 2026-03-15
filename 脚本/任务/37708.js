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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 512, 65);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 500, -10)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
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
                                cm.sendNormalTalk_Bottom("#face0#呃呃……真想把那条小狗……", 36, 3004732, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(800)
                                } else {
                                    if (status === a++) {
                                        cm.effect_NormalSpeechBalloon("汪！！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004705, null, cm.getPlayer().getId());
                                        cm.sendNormalTalk_Bottom("#face0#声音很嘹亮嘛！可能因为有三个脑袋，所以声音也大了三倍。", 36, 3004744, false, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#总之……#h0#，刚才让你见笑了……这位是红鸟佩皮。", 36, 3004732, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（怎么有种似曾相识的……既视感……）", 57, 0, false, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（刚才见到卡斯特的时候也……）", 57, 0, false, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#佩皮，快打个招呼。这是我在寻找芒泰尔的时候遇到的#h0#。", 36, 3004732, false, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#很高兴认识你。你喜欢舞会吗？\r\n#b我马上要举办一场误会，希望能邀请你参加。", 36, 3004744, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#唉……整天说要办舞会，也不见你开……", 36, 3004732, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯哼，卡斯特，还不是因为你没能帮我找到命运中的另一半，所以才无法举办舞会。", 36, 3004744, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#怎么？这次又不是？呃呃……", 36, 3004732, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我说了多少遍？我命运中的另一半是#r蓝色#k的。", 36, 3004744, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（红色和蓝色……还有舞会……）", 57, 0, false, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_PlayBGM("Bgm40/SecretMissionBase", 0, 0);
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#r（啾啾岛上的这些生物，是各种生命体的艾尔达混杂在一起诞生的吗？）", 56, 0, false, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("1_1", "Effect/Direction25.img/YumYumI/dot/0_1", 0, 500, -150, -30, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("1_2", "Effect/Direction25.img/YumYumI/face/0", 0, 500, 100, -20, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1_1", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1_2", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("1_3", "Effect/Direction25.img/YumYumI/dot/0_2", 0, 500, 0, -20, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("（之前还有长得和蝙蝠怪和蘑菇王很像的怪物……）", 57, 0, false, true, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("1_3", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("（难道……）", 57, 0, false, true, 1)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1_6", "Effect/Direction25.img/YumYumI/dot/3", 0, 500, -150, -30, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1_7", "Effect/Direction25.img/YumYumI/face/3", 0, 500, 100, -20, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("（皮埃尔……！没错。他不仅是个舞会狂，还从一个分离成了蓝色和红色两个！）", 57, 0, false, true, 1)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1_6", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1_7", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("（那么……卡斯特呢……卡斯特长着鸡冠和鸡翅膀，还有蜥蜴……）", 57, 0, false, true, 1)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("1_4", "Effect/Direction25.img/YumYumI/dot/2", 0, 500, -150, -30, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("1_5", "Effect/Direction25.img/YumYumI/face/2", 0, 500, 100, -20, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("（半半……！没错，是半半。挂着单片眼镜，而且在半半的庭院里好像有蜥蜴。）", 57, 0, false, true, 1)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("1_4", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("1_5", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("（芒泰尔……长着三个脑袋，还有角和翅膀……米纳尔森林的黑暗龙王……）", 57, 0, false, true, 1)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("（全部……都是冒险岛世界的强大怪物……）", 57, 0, true, true, 1)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("（等等……那么……）", 57, 0, false, true, 1)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("1_8", "Effect/Direction25.img/YumYumI/dot/4", 0, 500, -150, -30, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("1_10", "Effect/Direction25.img/YumYumI/face/4", 0, 500, 100, -20, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("（戴米安……？）", 56, 0, false, true, 1)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("（但是瑞昂身上没有纽扣。）", 57, 0, true, true, 1)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("（瑞昂好像只是受到了在冒险岛世界消失的戴米安的影响……）", 57, 0, true, true, 1)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("1_8", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("1_10", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("（卡斯特和芒泰尔，还有佩皮……）", 57, 0, false, true, 1)
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("（身上有纽扣的其他人……）", 57, 0, true, true, 1)
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##b我想也许是那个太阳创造出了我们。我们身上的纽扣，不也跟太阳一样长得圆圆的吗？", 36, 3004732, false, true, 1)
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("不是像啾啾岛一样自然诞生的……", 56, 0, true, true, 1)
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#r是什么人故意将冒险岛世界的强大怪物混杂在一起创造出来的……", 56, 0, false, true, 1)
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯？干嘛露出那么可怕的表情？", 36, 3004744, false, true, 1)
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(800)
                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##h0#？", 36, 3004732, false, true, 1)
                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（混杂在一起诞生的生物……）", 56, 0, true, true, 1)
                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（但是……）", 56, 0, true, true, 1)
                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（那个巨大、凶恶的黑暗龙王……却变成了……变成了这样的……小狗……）", 56, 0, true, true, 1)
                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（皮埃尔变成了有点奇怪的鹦鹉……）", 56, 0, false, true, 1)
                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（先观察一下。从刚才突然发动袭击的那些家伙来看，他们的力量好像并不完整……没有必要把他们变成敌人。）", 56, 0, true, true, 1)
                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm54/MushbudForest", 0, 0);
                                                                                                                                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("嗯？不，只是突然想到了一点事……", 56, 0, false, true, 1)
                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                            if (status === a++) {
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
                                                                                                                                                                                                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                                                                                                                                                cm.forceStartQuest(37708, "");
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
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37708.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 512, 65);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 500, -10)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.gainSkillBuff(80000268);
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
                                cm.sendNormalTalk_Bottom("#face0#这个长得奇奇怪怪的人到这里来干什么，卡斯特？", 36, 3004744, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#对啊，为什么会到这里来呢……？", 36, 3004732, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=0"], [0, 668, 80, 1, 0, 1, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=0"], [0, 231, -137, 1, 0, 1, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#之前光顾着自己说话，都没问你为什么到这里来。", 36, 3004732, false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#你招待客人的态度太不周到了，卡斯特。", 36, 3004744, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("不久前有人在这一带听到了巨大的吼叫声，所以我想过来看看到底发生了什么事。", 56, 0, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#啊……不久前森林深处发生了骚乱。", 36, 3004732, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#大家都很害怕，不敢到那边去，所以不知道具体的情况……\r\n不过那时感觉好像有某个非常、非常巨大的东西诞生了。", 36, 3004732, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#还好没给这里的舞会准备工作造成影响……", 36, 3004744, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=0"], [0, 354, 100, 1, 0, 1, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那我们一起去寻找新诞生的生命，顺便调查一下黑蘑古森林吧。", 36, 3004732, false, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#刚才看你教训蒙奇怪和蘑菇狂的身手，在黑蘑古森林里应该也能应对自如。", 36, 3004732, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
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
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.forceCompleteQuest(37708);
                                                                                                    cm.gainExp(11264558);
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
};