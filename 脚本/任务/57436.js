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
            cm.sendNormalTalk_Bottom("#face0#啊哈哈，我再来说说详细的作战计划吧。首先的问题就是从哪条路潜进去。关于这一点，你们觉得本能寺东侧城墙怎么样？", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你说的东侧城墙……是不是我们在进行本能寺攻略战的时候，东门攻击部队为了顺利突入，而使用过一次的路线啊？", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#没错。所以才能出其不意。敌人应该也想不到我们会再次利用已经用过一次的路线。所以，我们可以趁着敌人戒备松懈的时候，再次从这里入侵本能寺。虽说有点脑子的人都会提高警惕，以防在同一个地方连续栽两次跟头，但相信这样的人应该不会直接负责境内巡逻的工作。", 37, 9130000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哼。就算遇上了巡逻的哨兵，只要直接砍了他们不就好了。你有必要想这么多吗？", 37, 9130009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我说谦信啊，如果按照你的脾气把事情闹大，而连累了被织田军抓住的可怜姬儿，那又该怎么办呢？", 37, 9130000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯。信玄大人说的没错。那就依照信玄大人的提议，从东侧城墙潜入本能寺吧。", 37, 9130006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#接下来，就是要派谁执行这个任务……", 37, 9130000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("请把这个任务交给我来完成吧。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#你要接下这个任务？你确定吗？这可是个危险无比的任务。虽然我也知道，你对樱乃姬一直是忠心耿耿……", 37, 9130000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我也知道，这次的任务是个非常危险的潜入任务。所以，和身着甲胄的武士们相比，还是轻装上阵的我更加适合执行这个任务。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#信玄，你有没有看到神那的眼神？看她的眼神就知道，如果你不同意她参加任务，她肯定会独自一人闯进本能寺去。", 37, 9130009, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#啊哈哈！好吧，那就这么定了！这次的潜入任务就交给神那来执行吧！既然都这么说了，那这个任务只能交给你来办了！", 37, 9130000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#不过话说回来，独自一人前去还是太危险了，就让兼续和你同行吧。至少他可以帮忙保证你的退路。兼续！你可不要给我的脸上抹黑啊！", 37, 9130009, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#放心吧，谦信大人！能得到谦信大人如此信赖，我兼续真是太幸福了！哪怕粉身碎骨，我也一定会完成您交付的任务！", 37, 9130022, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#神那，那我就先一步前往本能寺东侧城墙了。请你在做好准备之后，就尽快赶来和我汇合吧。", 37, 9130022, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#本能寺就位于枫叶原2的北侧。好了，我先走一步了。", 37, 9130022, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(57436, "");
                                                                            cm.OnStartNavigation(807050200, 1, "9130093", 0);
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
            cm.sendNormalTalk_Bottom("#face0#你来了啊，神那。我一直在等着你呢。", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57436);
                cm.gainExp(8000);
                cm.dispose()
            }
        }
    }
};