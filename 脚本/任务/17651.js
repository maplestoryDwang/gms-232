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
            cm.sendNormalTalk("也差不多该来了吧。", 0, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("政治王国使节团到了，要让他们进来吗？", 4, 9390217)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(17651, "");
                    cm.sendNormalTalk_Bottom("你好吗。我是担负海本王国的使节任务而来的，我叫西温。", 36, 9390207, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("见到你很高兴。我是凯梅尔兹共和国的首领吉尔伯特·达尼尔拉。好吧，就请说说你有什么事情这么远道而来到凯梅尔兹吧。", 32, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("好吧，这次我们有一个提议想给凯梅尔兹。", 36, 9390207, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("提议，请问是什么提议。", 32, 9390203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我们两国虽然已经认识了很长时间，但是并没有正式的建交。我们国王陛下一致认为贵国和我们一衣带水，今天想在这里和贵国缔结真正意义上的和约。", 36, 9390207, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我当然也是不想与海本王国保持距离。但是说到条约的话，应该有什么必要条件吧。你能说说是怎样的条件吗？", 32, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17651.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("好的，您既然先开口提了，我也就直言相告了。", 32, 9390207, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("首先，凯梅尔兹共和国在和与海本王国建交的其他国家进行贸易时，只能交易我国指定的品目，并且我国要收取售价的1%作为酬金。", 32, 9390207, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你说什么？那是什么！！", 56, 9390207, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("等会，先听完他说的。请继续。", 36, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("好的，第二点是，和我们海本交易时，有关交易包含的所有项目都必须由我们管理。", 32, 9390207, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("第三，现在贵国使用的航线实际上是在海本王国的管辖下，希望你们能够支付航线使用的费用。", 32, 9390207, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("第四。两国从今以后绝不相互猜忌并坚信两国之间的友谊深厚。因此我们为了向凯梅尔兹共和国表达我们的诚意，我们将提供给能代表凯梅尔兹的首领亲属作为贵宾到我国留学的机会，可以花10年来学习我们的先进技术。", 32, 9390207, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我说完了。您意下如何？", 32, 9390207, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("呃嗯…… ", 36, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_ChangeController(9390236, "oid=2377601", 130, 65, 14, 80, 180, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=2377601", "summon", 0, 0);
                                                cm.sendNormalTalk_Bottom("这是什么无厘头的话啊！！", 36, 9390202, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("嗯？这位是……？", 32, 9390207, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("我是凯梅尔兹共和国首领吉尔伯特·达尼尔拉的二儿子莱文·达尼尔拉！", 36, 9390202, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("见到你真的非常荣幸。关于莱文大人的传闻我已是耳熟能详了。优秀的船长……", 32, 9390207, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("吵死了！你胆敢在那里玩花招啊！", 36, 9390202, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("耍花招，您这话说得太过分了吧。我是为了促进两国之间的和平而来的。", 32, 9390207, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("和平？哈！让我们成为你们这些家伙的附属国就是你所指的和平吗！再不赶紧给我滚出去的话，我就让你尝尝凯梅尔兹的厉害！", 36, 9390202, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("这这……可不能这样啊。吉尔伯特首领。今天我们就先告辞了。明天再来拜见您。那时希望能听到您的答复。希望您会给我一个肯定的回答。", 32, 9390207, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("哼，放肆的家伙。首领大人，我还有事没有处理完先告辞了。", 36, 9390202, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_LeaveField("oid=2377601");
                                                                                    cm.forceCompleteQuest(17651);
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
};