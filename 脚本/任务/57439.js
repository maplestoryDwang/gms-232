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
            cm.sendNormalTalk_Bottom("#face0#哦哦，樱乃姬，你平安无事啊。让你受苦了。拖了这么久才将你救出来，真是太对不住了。", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，是春秋啊。我们也好久不见了呢。如果我没有记错，我们上一次见面还是几年前的事情了。但你却一点变化也没有啊。", 37, 9130021, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#上次见面的时候，你的年龄还那么小，没想到居然对我还有印象。我真是太高兴了。", 37, 9130010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这位身着红色铠甲，眼神凌厉过人的武将是甲斐之虎——武田信玄大人。这边这位有如宝剑一般犀利的人，是越后之龙——上杉谦信大人。而这位竭力隐藏着自身过人智谋的，就是安芸的谋臣——毛利元就大人吧。", 37, 9130021, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#抱歉给大家添了这么多的麻烦。我便是松山信包的长女，现任松山家家主代理人，名为松山樱乃。", 37, 9130021, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#啊哈哈，我和你已故的父亲有过数面之缘。看到你成长得这么落落大方，相信你的父亲在九泉之下一定也能倍感欣慰吧。", 37, 9130000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我是上杉谦信。今后也请多指教了。", 37, 9130009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#虽说这里比较简陋，但还是希望你能过得轻松愉快。", 37, 9130006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#（人还那么小，就已经这么有眼力了。真不愧是信包大人的女儿。）", 37, 9130000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#（虽然个头不大，但体内却蕴藏着如此过人的气势。真是个厉害的女孩子啊。）", 37, 9130009, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#（才刚来不久，就能立刻将大家的注意力吸引到自己身上。联合军中不乏一些个性鲜明的成员。或许只有这样的一位主公，才最适合成为联合军的中心人物。）", 37, 9130006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#不好意思，虽然姬儿你刚刚回来，但还是有几个问题要问问你。你知不知道本能寺内部的织田军最近有着怎样的动向？我对他们的动作非常在意。毕竟我们这边掌握的情报还远远不够。", 37, 9130010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#这个嘛，我并没有特别留心观察，所以没有注意到什么。不过，我觉得他们最近应该没有什么特殊的动作。但是最近，有一些阴阳师一直显得特别忙碌。不知道他们是在进行着怎样的准备。能够直接与我接触的，就只有负责守卫大门，并在用餐的时间帮我端饭进来的哨兵而已。", 37, 9130021, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askAcceptDecline_Bottom("#face0#我明白了。既然这样，就没有什么其他好问的了。神那，你已经好久没见到姬儿了，要不要和她好好聊聊呢？", 37, 9130010)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(57439, "");
                                                                    cm.forceStartQuest(9571, "0");
                                                                    cm.forceStartQuest(31190, "0");
                                                                    cm.forceStartQuest(42102, "0");
                                                                    cm.forceStartQuest(7621, "");
                                                                    cm.forceCompleteQuest(57439);
                                                                    cm.updateInfoQuest(25980, "normal=#;hard=#");
                                                                    cm.sendNormalTalk_Bottom("（回头想想，我和姬儿在很小的时候就认识了。）", 57, 0, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("（我们家代代都是阴阳师。我们原本是居住在其他地方的人，直到祖父一代选择定居在松山家的土地之后，才与松山家结缘，并成为了他们家的专属阴阳师。）", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("（小时候，父亲带着我进入松山家的城池时，我就和与自己年龄相仿的姬儿成为了朋友。姬儿从小在城中长大，她对外面的世界一直抱有非常强烈的好奇心……最初我都在想，是不是住在城中的人都是这个样子的啊。）", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("（大约在五年前，我和姬儿分开了。当时，我的父亲去世了。为了继承阴阳师的衣钵，我投身师父门下。当我在修行之中听说了松山家惨遭织田军灭门的消息时，连我都想跟着一起去死了。）", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("（唯一值得庆幸的是，姬儿逃过一劫，落在了织田军的手里。听说这个消息后，我立刻投奔了谦信大人，并一直在等待着能将姬儿救出来的机会。）", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("（之后，本能寺攻略战和这次的异常变化接踵而来……在经历了各种各样的事情之后，我总算能再次与姬儿团聚……）", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("（剩下要做的，就是打倒织田军和信长，返回我们原本的世界——日本……这场不可思议的旅行应该也快要结束了吧。）", 57, 0, true, true)
                                                                                        } else {
                                                                                            if (status == a++) {
                                                                                                cm.gainExp(8000);
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
            cm.dispose()
        }
    }
};