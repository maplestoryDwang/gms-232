var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("" + a + "，你为什么会常常变白？", 4, 9400222, false, true)
        } else {
            if (status === b++) {
                cm.askMenu("#b(该怎么解释好呢？)\r\n#L0#找个合适的借口搪塞过去。#l\r\n#L1#实话实说思索之地的事。#l", 16, 0)
            } else {
                if (status === b++) {
                    if (c == 0) {
                        cm.sendNormalTalk("#b唔，这样对孩子们不好吧？", 2, 0, false, true);
                        cm.dispose();
                        return
                    }
                    cm.sendNormalTalk("#b不瞒你说，离这里较远的地方有个名叫“思索之地”的地区。那里不管是树木，土地，甚至是人全都是一片雪白。", 2, 0, false, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("#b因为那地方的人们很想拥有色彩，我就把我的色彩分给了他们。", 2, 0, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("一片雪白的天地？哇！那不是到处都可以当画纸？居然有这样的地方！\r\n#e我也想去那里瞧瞧！", 4, 9400222, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("#b你真的想去吗？", 2, 0, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("嗯！我想去给他们全部涂上颜色！一定很有意思~~", 4, 9400222, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.askAcceptDecline("#b(要不要把#p9400222#带去思索之地？)", 2, 0)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk("#b你要跟我一起去那个白色世界吗？", 2, 0, false, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk("嗯！要！我要去！你带我去吧！\r\n该往哪边走？离这里多远~？", 4, 9400222, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk("#b嗯……有点远……（我不能带着孩子去战斗之地……该怎么办……）", 2, 0, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk("……哎~？！那地方是不是在彩虹桥对面？我好像在童话书里看见过。书上说，彩虹桥对岸有其他世界~！\r\n啊！我在想，那些人会不会是被彩虹夺走了色彩，所以才变白？", 4, 9400222, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk("#b(孩子的想象力真是无穷无尽。)", 2, 0, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk("#b(唔……能不能像孩子想象的那样，造出一座彩虹桥呢？)", 2, 0, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk("#p9400222#，你会画彩虹桥吗？", 2, 0, true, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.askYesNo("彩虹桥？要画彩虹桥的话，还需要更多色素哦……如果你再次帮我弄来色素，我就可以画出彩虹桥！", 4, 9400222)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk("好，那我再给你#t4036012:#！刚才我为" + a + "你上色的色素还剩一半，很快就能装满的。", 5, 9400222, false, true);
                                                                            cm.gainItem(4036012, 1)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk("只要把#t4036012:#放在背包里去狩猎，就能收集到怪物的色彩。你快给我带回#t4036013:#吧！", 5, 9400222, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.setNumberForQuestInfo(63091, "CC", 50);
                                                                                    cm.forceStartQuest(63085, "");
                                                                                    cm.forceStartQuest(63056, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63085.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这么多色素，应该够画彩虹桥了！哇！", 4, 9400222, false, true);
            cm.gainItem(4036013, -1)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(867113502, 0, true)
            }
        }
    }
};