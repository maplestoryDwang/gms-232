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
            cm.forceStartQuest();
            cm.gainSkillBuff(2022963);
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2609.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("……#h0#？有什么事吗？脸色那么难看…什么？红雅给你投毒…？…这家伙，又在搞恶作剧了…我们暗影双刀怎么可能会给自己的同伴投毒呢，这只是红雅的恶作剧，你不用在意。我们很信任你的。", 0, 1056000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("当然，如果你用背叛来报答我们对你的信任，那就另说了。你不想永远与暗影双刀为敌，就不要试着背叛我们。", 0, 1056000, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("话说回来，既然都搞起恶作剧，看来你的教育已经结束了吧。我能感觉到，无论是姿势还是眼神…你都已经准备好作为间谍潜入敌人内部了。你要#b转职为飞侠#k吗？也就是为了正式的任务而进入准备阶段。", 0, 1056000)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(2609, "");
                        cm.forceCompleteQuest(2609);
                        cm.forceCompleteQuest(29900);
                        cm.updateInfoQuest(1073, "400=10");
                        cm.forceStartQuest(17903, "1");
                        cm.forceCompleteQuest(17903);
                        cm.playerMessage(5, "冒险之书任务已完成。");
                        cm.sendNormalTalk("现在你就是飞侠了，虽然还没学到双刀技术…也正因为如此，你现在才能作为飞花院的间谍，靠近达克鲁。", 1, 1056000, false, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(1332063, 1);
                            cm.gainItem(1142107, 1);
                            cm.changeJob(400);
                            cm.changeSubcategory(1);
                            cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                            cm.sendNormalTalk("即使是双刀，他的属性与普通飞侠没什么区别。飞侠是以运气（LUK）为核心属性，敏捷（DEX）为辅助属性的。如果你不知道该怎么分配属性，点击#b自动分配#k就可以了。", 1, 1056000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哦，还有…想要当间谍，肯定还需要很多东西对吧？我增加了你的装备、其他物品保管盒的数量。背包越大，行动起来就越方便。", 1, 1056000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.openUIWithOption(0, 1);
                                    cm.sendNormalTalk("你用的新武器也发放给你了。比之前的武器应该好用得多。", 1, 1056000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那么，我能教你的只有这些了。现在开始，红雅会给你重新安排任务的，那么，我就等你的好消息了。", 1, 1056000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_ChangeController(1057001, "oid=1725906", 489, 42, 1, 439, 539, 1, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=1725906", "summon", 0, 0);
                                            cm.teachSkill(4001013, 1, 0);
                                            cm.teachSkill(4001011, 4, 0);
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
};