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
            cm.sendNormalTalk_Bottom("#face0#喂？哦，#h0#~", 37, 1530607, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你问我为什么这么无精打采？只要想到得在全校学生面前，用屁股写名字……\r\n哈啊，就算是全年级都不行啊……", 37, 1530607, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("反正，伊莉娜姐姐只要一生气，谁都拦不住。但是，昨天她也比平常更兴奋啊？为什么呢？", 37, 1530607, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#总之，你没忘记我们今天开始要在#b屋顶上进行乐队练习#k吧？", 37, 1530110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom(" 一定不要忘了啊~", 37, 1530110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom(" #b(去学校屋顶吧。)#k", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(33508, "");
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
            cm.sendNormalTalk_Bottom("哇~这么快就来了？", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##h0#也来了啊。\r\n因为笨蛋伊莉娜，大家都得受罪~在这个打瞌睡的时间~", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真是不像你啊，伊莉娜，那么性急。", 37, 1530090, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("吵死了，因为太气人了啊。你们能眼睁睁看着我们学校被欺负吗？", 37, 1530604, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……啊啊，不管了。既然现在已经变成这样了，那也没办法。\r\n如果输了，我就动一下我性感的屁股就行了。没什么损失！", 37, 1530100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("没什么损失的只有胡克你。我先说啊，如果输了，我就要转学。", 37, 1530090, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我也是~", 37, 1530607, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("好了，那个之后再说。我们得先选定乐队的曲子……大家有想好的曲子吗？", 37, 1530120, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("哈哈！我早就知道这样，所以准备了我自己创作的曲子！", 37, 1530100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我也是！我也有自己写的曲子！", 37, 1530110, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我也有…… ", 37, 1530090, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("那就一个个看一遍，再从中选择吧。虽然不用看也知道我的曲子是最好的。", 37, 1530100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("哼……好吧。", 37, 1530120, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("好，那就开始吧~", 37, 1530100, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                    cm.sendNormalTalk_Bottom("耶~哎~你真帅，女孩看见你都会被迷住。", 37, 1530100, true, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/CH6_03/2", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("你真帅！而且唱歌也好~从头到尾都完美，那就是完美，那就是人生的真理。", 37, 1530100, true, true);
                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_03/3", 100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("淘汰。", 37, 1530110, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("不行。", 37, 1530090, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("你疯了吧。", 37, 1530120, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#为什么~！", 37, 1530100, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("我觉得比起用屁股写名字，唱这个歌会更难受。", 37, 1530090, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("接下来就听听奥兹的……", 37, 1530120, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("好，听好了~", 37, 1530110, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("'喜欢你。'", 37, 1530110, true, true);
                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_03/4", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("我真的喜欢你。你知道我激动的心情吗~", 37, 1530110, true, true);
                                                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_03/5", 100)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("我常常想着你~ ", 37, 1530110, true, true);
                                                                                                                cm.effect_Voice("Voice2.img/Friends/CH6_03/6", 100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("哦，不错啊~", 37, 1530120, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("只要一有时间，我就会奔向你~", 37, 1530110, true, true);
                                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_03/7", 100)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("可乐饼，牛角面包~金枪鱼三明治~还有拉面~", 37, 1530110, true, true);
                                                                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_03/8", 100)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("这是店铺大妈的叫卖歌曲吧。", 37, 1530100, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("这能增加食欲啊。", 37, 1530090, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#嘿嘿，这是昨天我回家的时候创作的歌曲。", 37, 1530110, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("嗯……下一个，伊卡尔特。", 37, 1530120, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("嗯……虽然不是为了公开才创作的曲子……", 37, 1530090, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("'黑暗的房间'", 37, 1530090, true, true);
                                                                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH6_03/9", 100)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("穿过那时黑暗的房间~n就看见了墙。看见了墙~ 看见了墙~", 37, 1530090, true, true);
                                                                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_03/10", 100)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("我轻轻地~ 躺下了，在那~ 墙上~ 。", 37, 1530090, true, true);
                                                                                                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_03/11", 100)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("哇啊，伊卡尔特越来越中2了。", 37, 1530100, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("……切，吵死了，这是我小时候写的曲子。", 37, 1530090, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("要是再改改，说不定能用？", 37, 1530110, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("我不要，PASS吧。", 37, 1530090, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.forceCompleteQuest(33508);
                                                                                                                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3));
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
};