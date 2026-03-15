var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.sendNext("怎么，你还有话要说吗？")
    } else {
        if (status == 1) {
            cm.sendNext("老奶奶，我有件事想问问您。", 1510007)
        } else {
            if (status == 2) {
                cm.sendNext("你想问什么？想问问我这老婆子什么时候死吗？要是还想说些没用的废话，就给我闭嘴。")
            } else {
                if (status == 3) {
                    cm.sendNext("不是的……这个地区的企鹅族、阿拉斯加犬族和海象族全都对您怀有疑心，会不会是因为您的魔法，使得冰川融化，海平面上升的呢？", 1510007)
                } else {
                    if (status == 4) {
                        cm.sendNext("魔法？那是什么东西？是能煮着吃的吗？")
                    } else {
                        if (status == 5) {
                            cm.sendNextS("现在甚至还有传闻说，您把孩子们当做试验材料，正在制作某种东西。")
                        } else {
                            if (status == 6) {
                                cm.sendNext("谁再那么胡说八道，看我不把他嘴缝起来！说我拿孩子们来做什么？我拿这些温顺可爱的小家伙来做试验材料？")
                            } else {
                                if (status == 7) {
                                    cm.sendNext("它们都是些因为冰川融化，而失去家园，失去父母的孩子。要是没人去照顾一下，还不知道能不能活下去唉！就那样可怜巴巴地在大海上漂浮，是我一个个捞起来抚养的。")
                                } else {
                                    if (status == 8) {
                                        cm.sendNext("您在抚养那些孩子们？", 1510007)
                                    } else {
                                        if (status == 9) {
                                            cm.sendNext("我也就暂时照顾他们一段时间……")
                                        } else {
                                            if (status == 10) {
                                                cm.sendNext("自古以来，各种动物就该在同族群中成长。我把它们带回家后，为它们治疗伤口，等它们体力恢复得差不多了，就包在襁褓里，晚上偷偷放在村庄前面。")
                                            } else {
                                                if (status == 11) {
                                                    cm.sendNext("可是，你没必要冒着被冤枉的危险这样做啊……")
                                                } else {
                                                    if (status == 12) {
                                                        cm.sendNext("行了，你这家伙废话真多！有这力气嚼舌头，不如帮我做点事。")
                                                    } else {
                                                        if (status == 13) {
                                                            cm.gainExp(52270);
                                                            cm.forceStartQuest();
                                                            cm.forceCompleteQuest();
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