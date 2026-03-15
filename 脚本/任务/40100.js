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
            cm.sendNormalTalk("我找到第一个女神之泪的位置了。能感觉到时间之力的地方就是#b阿里特安#k……是个沙漠国度。", 32, 2400008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("因为我的力量有限，其他的女神之泪的准确位置还无法找到，但是在两位去找第一个女神之泪的时候，我会继续寻找其他的下落。", 32, 2400008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("阿特里安啊！我知道一点，是在沙漠当中以绿洲为中心建立的国家。", 36, 2400007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("最中央有着阿特里安的王宫，周围住着其他的百姓。", 36, 2400007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("国家位于炙热的沙漠，不知道是不是因为环境不太好，那里的人多少有些排斥其他地方的人……", 32, 2400008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("但这仅仅是通过镜世界来查看到的现象，所以我也只能说到这里。", 32, 2400008, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("没关系，#r只要不发生巨龙吞掉女神之泪的这种荒唐的事情就行#k。", 44, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("但是，女神之泪不是巨大的蓝色宝石吗？如果是的话应该会被人盯上的，而且也说不定会发生一些争执。", 44, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face0#争执？如果事情闹大的话，说不定军团长#p2410000#还是威尔什么的就会过来！#最好能够迅速隐蔽地行动#k。", 36, 2400007, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("也对，我们的优势在于我们知道具体的位置……也没必要引起骚乱。知道了吗？不要感情用事，把事情闹大了。", 44, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b(点头)", 44, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("不要点头，用嘴说话。知道了吧？", 44, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……嗯。", 44, 2400006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face3#嗯，那样不就行了。", 44, 2400005, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("咦，感觉像是幼儿园的老师在教学生似的……", 36, 2400007, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("嘘！说不定马上又变回来了。", 32, 2400008, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("好了好了~#p2400005#，#p2400006#，女神之泪在等你们呢？还不快去找？当然，如果你们两位想要和我一直待在一起，我就更开心了……呵呵呵。", 36, 2400000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face7#快、快走吧！", 44, 2400005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("……嗯。", 44, 2400006, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.updateInfoQuest(40100, "");
                                                                                        cm.forceStartQuest(40100, "");
                                                                                        cm.dispose();
                                                                                        cm.warp(322090000, 0, false)
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40100.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("对宝石感兴趣，难不成你们是财宝猎人？算了，也没什么关系。很多人都来到阿里特安，虽然是沙漠地带感觉非常贫瘠，但是也有很多美丽的宝石。", 32, 2420005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我来告诉你们，蓝色眼泪是刚才看到的#p2420011#献给王妃的巨大尺寸的蓝色钻石。那颜色和形状如同#b美丽的眼泪，所以才被人称作蓝色眼泪#k。", 32, 2420005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("听说价格也非常昂贵，我听到价格之后整个人都要昏过去了。现在整个阿里特安都在谈论这个蓝色眼泪。你刚才也看到了，这么多人都是来看#p2420011#的。我也很想知道到底有多美丽，竟然会那么昂贵。", 32, 2420005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(轰动了阿里特安的巨大宝石……而且还被称为蓝色眼泪，是个蓝色钻石。这么看来颜色也相符，而且时间点也刚好，说不定那就是女神之泪)", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b(刚才感觉到了时间之力……就在那个建筑里边……)", 44, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face2# #b(看来比想象的要简单，就好像女神之泪在等我们一样……接下来就该想想如何拿到女神之泪了。要不先从舞姬那里打听一下吧？)", 44, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(800000);
                                    cm.forceCompleteQuest(40100);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};