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
            cm.forceStartQuest(40108, "");
            cm.updateInfoQuest(40108, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40108.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("其他的团员都认可了你们，从今往后你们就是沙图团的伙伴。我们沙图团也会待你们如好友的，希望你们不要背叛……", 32, 2420010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……这你大可放心，快说说袭击王宫的事情。", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……你这种态度反而让我感到更加值得信任。……我们沙图团要攻击王宫，要打败王妃的暴政，并洗劫王宫的宝物仓库分发给百姓们。这就是我们的计划。", 32, 2420010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("因为王妃的私欲，阿里安特的人们的生活越来越不成样了。这种情况我们不能坐视不理……虽然已忍到现在，但是以后绝对不会再忍下去了。", 32, 2420010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("换句话说我们是叛逆者，所以也曾怀疑过你们。我们要做的事情非常危险……容不得一个小小的失误。你们真的愿意帮助我们吗？说不定你们也会变成叛逆者。", 32, 2420010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face2#我们对叛逆没有一点兴趣，更对阿里特安没任何兴趣。我们要的只有一个，那就是不久之前#p2420011#献给王妃的#b蓝色眼泪#k……如果能把这个给我们，我们也很乐意帮助你们。怎么样？这建议不坏吧？", 44, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……果然，你们也是想要蓝色眼泪吗？难怪，因为幻影也盯上了，想要拿到手并非那么容易，所以才找我们……我知道了。", 32, 2420010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("虽然我希望能用于阿里安特的百姓，但是用于和你们合作也不算坏。", 32, 2420010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("好吧……#b我们有详细的计划，就会联系你们#k。时间不会很久，你们只要参与就行了，这样实在是太好了。", 32, 2420010, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我们要袭击王宫的日期，刚好是怪盗幻影宣布偷盗蓝色眼泪的日期。", 32, 2420010, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainExp(1597000);
                                                    cm.forceCompleteQuest(40108);
                                                    cm.forceCompleteQuest(40912);
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
};