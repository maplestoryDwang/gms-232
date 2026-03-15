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
            cm.forceStartQuest(40203, "");
            cm.updateInfoQuest(40203, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40203.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("……刚才那个怪物，肯定是#b通过时间之力降生的怪物#k。", 44, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("因时间之力降生的怪物，大家都误以为是#p2430000#召唤出来的。换句话说……#p2430000#就是女神之泪了？女神之泪竟然会被当成怪物……", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这……是#p2430000#日记本。", 44, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("看看日记本也许就能找到答案。", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("x月x日，晴。我到这个村子已经有一年了。#b起初还以为那位会马上过来找我#k……但是那位好像很忙，一直没有到来。要不我就写写日记吧，希望全都是开心的内容。", 36, 2430000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("x月x日，阴转晴。#p2430002#姐姐送了蘑菇派给我，#p2430002#姐姐的料理水平越来越好了。作为回报，我应该采些草莓给她。", 36, 2430000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("x月x日，阴。和卡米拉一起玩玻璃珠，但是卡米拉的玻璃珠被打碎了，卡米拉很伤心地哭着。幸亏尤塔把自己的玻璃珠送给了卡米拉。", 36, 2430000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("x月x日，晴。#p2430004#哥哥说要教我耍枪，但是我拒绝了。我跟他说我不喜欢打架……结果#p2430004#哥哥用手指弹了我一下。", 36, 2430000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("x月x日，很热。明明女士问我为什么还不长大，就拿了很多蘑菇火锅给我吃。我把这些都吃了也不会长大……因为#b我是女神之泪#k。但是我还是郑重地说了声谢谢。", 36, 2430000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("x月x日，有点多云。艾娜婶婶说，在我家里晾衣服怎么都干不了，太神奇了。其实干了之后又湿回去了，因为我周围有#b时间之力#k。额……怎么办呢。", 36, 2430000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("x月x日，下雨。#p2430003#说下雨天就应该去抓青蛙，所以就和他一起去了。以前他很小的，但现在#p2430003#长高了很多。以前还叫我哥哥，但现在直接叫我‘喂’。我好冤枉啊。", 36, 2430000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("x月x日，晴。又因为没有调整好时间之力，出了事情了。把已经都熟透的大酱又给弄回到原来的状态了。虽然谁都没有来说我……但是大家都知道是我干的。真的很对不起大家。", 36, 2430000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("x月x日，阴。那个人为什么不来接我呢？我不想继续待在这个村子里，给村里的人添了太多的麻烦了……真希望他能早点来接我。", 36, 2430000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("x月x日，小雨。以为照在窗口的倒影是只大熊，被吓坏的我#b用时间之力召唤出了怪物#k。其实那并不是大熊，不过我召唤出来的怪物却伤害了村里的人们。我该怎么办？", 36, 2430000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("x月x日，阴。因为我召唤出来的怪物，玛亚姐姐受了重伤。而且警卫哥哥们也都……。看到了斯坦长老可怕的脸，我知道我自己犯了多大的错。我真的很对不起村里的人。", 36, 2430000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("x月x日，阴。可能这是我最后的日记，为了防止这种事情再发生，斯坦长老……#b(后边的就看不清了)#k", 36, 2430000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("……原来#p2420000#的运气这么好啊。不过这个孩子因为不会长大，被村里人怀疑也是理所当然的。更何况还不会操控时间之力，发生了这么大的事情……", 44, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#p2430000#现在会怎么样呢？", 44, 2400006, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("后边的就看不清了，好像#b村里人为了不再让他惹是生非，采取了什么措施#k……难道是逐出这个村子了？到别的村里去了？", 44, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("那么……我们该怎么办？", 44, 2400006, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("要找到#p2430000#，我们不就是来回收女神之泪的吗。", 44, 2400005, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.gainExp(3450000);
                                                                                                cm.forceCompleteQuest(40203);
                                                                                                cm.forceCompleteQuest(40921);
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
};