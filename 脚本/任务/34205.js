var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#嗯~我今天做的料理好像也很赞！", 37, 3003151, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好不好吃得由我们来判断！", 37, 3003153, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b哔比#k哥哥~ 你怎么一直吐槽猴姐啊？", 37, 3003154, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你这小家伙不要一直顶嘴！我是你哥哥！", 37, 3003153, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我知道~ 哥哥~不过，哥哥你总是这么没礼貌，所以我#r#fs20#有点点生气了！", 37, 3003154, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("哔……米#b哔美#k姐……姐好可怕…我害怕…… 哼哼哼~", 37, 3003155, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哎…哎！这么开心的用餐时间，干嘛要这样！快点…吃饭吧！", 37, 3003153, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("就是嘛~#b哔比#k哥哥~你早点像这样懂礼貌该有多好啊？就算是为了给我们辛苦做饭的猴姐，也请你以后一直~这么懂礼貌，知道了吗？", 37, 3003154, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("如若不然，#fs20#我就……。把你的……。头……#fs15#呼……。我就不跟你多说了，哥哥~", 37, 3003154, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我…我知道了！", 37, 3003153, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("呵呵呵，哔美姐……姐姐又教训……哔比哥哥了…呵呵呵", 37, 3003155, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("哔嘟必须多吃一点，#b受伤的脑袋#k才能尽快好起来……", 37, 3003154, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我…我…本来就是这样啊…？呵呵呵", 37, 3003155, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("哔嘟啊…你原来并不是傻瓜…不对，你原来是个#b正常的孩子#k…所以你要快点好起来……。哎……", 37, 3003154, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哔比！哔美！哔嘟！你们这样吵吵闹闹，同时又互相关心对方的样子看起来很好！", 37, 3003151, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("这里的大部分人跟我一样，#b没有家人#k，你们#b三个可以相互依靠#k，真是太幸福了！", 37, 3003151, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("猴姐，你怎么会没有家人呢~ 你收留了#b因为口味奇怪而被赶出村庄的#k我们啊~ 姐姐你就和我们的家人没有区别~", 37, 3003154, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("没错，哔美！虽然我也一样无家可归！我们像现在这样，永远生活在一起吧！", 37, 3003151, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("切…什么家人啊…长得完全不一样啊……", 37, 3003153, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("喂…适可而止…吧？", 37, 3003154, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("我…我的意思是，所以我们更应该心怀感激！猴姐的个头比我们高很多，要照顾我们这些小不点…我们的口味这么奇特，她还要给我们做好吃的……。", 37, 3003153, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("谢谢你……猴姐……", 37, 3003153, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#嘻嘻，我知道哔比你非常喜欢我~ 哔美啊，你也不要总这么对待你的哥哥~家人之间也是不能互相打骂的~", 37, 3003151, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("应该不是…互相…打骂吧…？呵呵呵…… 好像是#b单方#k…呵呵呵", 37, 3003155, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#好啦~好啦~放着美味的食物不吃，我们这是在干嘛呢？今天我特意为你们准备了你们爱吃的#b劲道脚掌汤#k！快吃吧~", 37, 3003151, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("这里有好香的味道……\r\n刚好是#b吃饭时间#k，应该去看看能不能要点吃的……", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.forceCompleteQuest(34205);
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
};