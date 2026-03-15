var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextNoESC_New("对立体机动装置给你简单说明。请你好好听。\r\n首先装备刚发给的立体机动装置，就可以使用立体机动技能和攻击技能。", 33, 1)
    } else {
        if (status == 1) {
            cm.sendNextPrevNew("按住立体机动技能时，锚头会开始运作. 锚头到了想要的方向时，放开技能键会发射锚头後进行移动。", 33)
        } else {
            if (status == 2) {
                cm.sendNextPrevNew("移动中也可以使用攻击和锚头技能的关系，连续使用技能可以不断的连续移动. 尤其在树和树之间的移动时,利用方向键和锚头移动技能，可以简单的往上移动。", 33)
            } else {
                if (status == 3) {
                    cm.sendNextPrevNew("攻击技能是在锚头移动中或停下来时可以使用. 巨人的弱点是後颈部的关系，请用锚头边移动边瞄准使用攻击技能。", 33)
                } else {
                    if (status == 4) {
                        cm.sendNextPrevNew("说了这麽多，乾脆去使用看看如何? 参加在训练兵团准备的多种训练来学习锚头技能和攻击技能的使用方法吧。", 33)
                    } else {
                        if (status == 5) {
                            cm.forceCompleteQuest();
                            cm.dispose()
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};