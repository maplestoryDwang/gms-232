# [Temple of Time] The Sorcerer Who Sells Emotions
# 3514
# Sorcerer (2140002)

from net.swordie.ms.enums import Stat

sorcerer = 2140002

# Apparently the script is also supposed to check if you're below 20% of your Max HP before leading into the dialogue below
# This is...really finicky since the Sorcerer's Potion tries to kill you using only your base HP, which doesn't take any HP bonuses into account
# Additionally, even if you did end up dying from the potion, you'll revive with full(-ish) HP anyways
# Thus, the HP check will be skipped over entirely
# Side effect: you can just drop the potion and it still counts for finishing the quest
sm.setSpeakerID(sorcerer)
sm.sendNext("Hmm, I see you've drank all of the potion. So how was it? "
"Wasn't I right about the effects? My potion is perfection!")
sm.sendSay("What? You're ok with losing HP? That's nonsense! It's just not true! \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/11/0# Willpower 50\r\n"
"#fUI/UIWindow2.img/QuestIcon/8/0# 4,916,000 exp")

chr.addTraitExp(Stat.willEXP, 50)
sm.giveExp(4916000)
sm.completeQuest(parentID)