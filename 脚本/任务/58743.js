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
            cm.sendNormalTalk("请问……", 16, 9112008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗬~活人跑来这里有何贵干？", 4, 9112008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我想打听一下鵺大人举办的活动。", 16, 9112008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("鵺大人举办的活动？", 4, 9112008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的，我听说……那是帮助亡灵超度的活动……", 16, 9112008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嘿嘿嘿，正好我需要人帮忙，你来得正好。你去消灭#o9400037#，给我弄来60个#i4034856#  #b#t4034856##k。迷路亡灵位于亡者窟外的#m800022120#。等你回来我就回答你的问题。", 4, 9112008, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58743, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58743.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("给，我都搜集齐了。", 16, 9112008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("噢，干得漂亮。动作蛮快嘛？", 4, 9112008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请给我说说关于鵺大人举办的活动。我听说他正在帮亡灵们超度，那是真的吗？", 16, 9112008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嘻嘻，我也正对这事感到好奇呢。不过看样子我的猜想是正确的。", 4, 9112008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("估计他们是被超度到鵺的肚子里去了吧？\r\n嘿嘿，反正他们都已经不在人世，谁能验证呢？\r\n总之被超度的亡灵一个都没回来，嘻嘻", 4, 9112008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你不是信徒吧。", 16, 9112008, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("呵呵，你就当我是清醒的亡灵吧。", 4, 9112008, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你为什么让我去消灭其他亡灵？", 16, 9112008, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("为什么？很有意思呀，嘿嘿\r\n你是不是觉得我们已经死了，还有什么可以失去的？\r\n生活仍在继续，是生是死很重要吗？", 4, 9112008, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我只是想试验一下，除了鵺之外，是否还有其他人可以帮我们超度。", 4, 9112008, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("…………", 16, 9112008, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("咯咯咯咯，认识你很高兴。你让我领悟了很多。\r\n如果你需要我的帮助，就再来找我。嘿嘿", 4, 9112008, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(58743);
                                                            cm.gainItem(4034856, -60);
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
};