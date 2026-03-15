var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("呼呼～嗯～味道好像还不错嘛？", 4, 3003154, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是吧？只要在这上面放上面包，应该就能拿给穆托了。", 2, 3003154, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哎呀~ 旅行者你真是的~ 你忘记了#b最重要的东西#k~", 4, 3003154, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("最重要的东西？那是什么？", 2, 3003154, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是#b海鲜#k啊，还缺了#b海鲜#k~\r\n缺了#b海鲜#k的料理还能被称为料理吗？", 4, 3003154, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("已经放了肉饼了…还要放海鲜饼？那味道会很奇怪吧……", 2, 3003154, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("旅行者？我什么时候说过#b我想放海鲜饼#k了？", 4, 3003154, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("啊…对了…你的性格比较暴躁……\r\n好的…… 我们放海鲜吧…需要我去搜集什么呢？", 2, 3003154, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嗯~你真乖~旅行者，没想到你这么听话啊？哈哈", 4, 3003154, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你只要前去狩猎#b艾尔谷#k的#b绿色猫鱼#k和#b蓝色猫鱼#k，搜集#i4034950:##b#t4034950##k #i4034951:##b#t4034951##k就行了~", 4, 3003154, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("嗯~ 你先去搜集大概#b20个#k吧！\r\n还有，艾尔谷流淌着激流，像旅行者你这种#b不会飞的#k人就只能#b游泳#k了~ 当然如果你不会#b游泳#k…那就只能死…不，那你可能会遇到危险~", 4, 3003154, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("嗯？你们会飞？", 2, 3003154, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("哎呀~旅行者你也真是的~这么短的翅膀，怎么飞啊~你是在跟我开玩笑嘛？哈哈哈", 4, 3003154, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("很…很抱歉，我去去就回。", 2, 3003154, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(34211, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.npc_ChangeController(3003166, "oid=5", 770, -76, 12, 720, 770, 5, true, false);
            cm.sendNormalTalk_Bottom("天啊~你回来啦？哎呀，你全身都湿了~快把你搜集到的东西给我，你先休息下~", 0, 3003163, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯~这新鲜的香味！#b都很奇怪啊！现在够了！转转转！三明治#k肯定会成为最棒的料理~", 0, 3003163, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯！你应该知道还没有结束吧？我会告诉你接下来要搜集的材料，请你立刻出发~", 0, 3003163, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我休息会再去不行吗……", 2, 3003154, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯~你想休息就休息吧~ 要不要我帮你#r永远的休息下去#k？哈哈哈！", 0, 3003163, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainItem(4034950, -20);
                                cm.gainItem(4034951, -20);
                                cm.forceCompleteQuest(34211);
                                cm.Hidden_background("obj_01", 1, cm.isQuestFinished(34208) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_02", 1, cm.isQuestFinished(34212) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_03", 1, cm.isQuestFinished(34214) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_04", 1, cm.isQuestFinished(34215) ? 1 : 0, 0, 0);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};