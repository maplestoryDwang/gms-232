#
# @author i baked yunos dick in my oven
# @npc Dame Appropiation - Legion Manager
# @quest [Legion] We Are Legion
#

DAME = 9010106
sm.setSpeakerID(DAME)
if sm.getUnionLevel() < 500 or sm.getUnionCharacterCount() < 3:
    sm.sendSayOkay("勇士！\r\n现在你可以创建#b#e<冒险岛联盟>#k#n了。")
elif not sm.hasQuest(16013) and not sm.hasQuestCompleted(16013):
    sm.setQRValue(18793, "q0=1q1=0pq=0q2=0q1Date=" + sm.getCurrentDateAsString() + "pqDate=" + 
                  sm.getCurrentDateAsString() + "q2Date=" + sm.getCurrentDateAsString()) # Legion quest
    sm.incrementUnionRank()
    sm.completeQuestNoRewards(16013)
    sm.sendNext("<冒险岛联盟>是指#b同一世界内我的角色们#k组成的集团。#r只有60级以上/完成2转的角色#k可以进入联盟。")
    sm.setPlayerAsSpeaker()
    sm.sendSay("将<冒险岛联盟>所属的角色配置在#b战斗地图#k中，可以获得#r特别的效果#k。\r\n根据如何配置角色，可以获得各种不同的效果。")
    sm.setSpeakerID(DAME)
    sm.sendSay("此外，配置在战斗地图上的攻击队员们可以合力挑战#b巨大的龙#k，获得#r联盟币#k。\r\n可以在联盟币商店中购买珍贵的道具。")
    sm.sendSay("好了，让#b协作的力量#k变得更强吧！\r\n\r\n我会在各个村庄中和我的新职员斗篷先生待在一起。如果想听听更详细的说明，请随时来找我。")
    sm.sendSay("从现在起，可以在详细菜单中对冒险岛联盟进行管理了。")
    sm.sendSay("Several months ago, I went on my first vacation in years. But our cruise ship ran aground on an "
               "#buncharted island#k full of #rterrible dragons#k.\r\nAfter the captain and crew were dragged off "
               "into the jungle and devoured, we passengers realized that there was only one way we were getting off "
               "the island alive...")
    sm.sendSay("We took up whatever arms we could find. Pots and pans, knives, and the odd broadsword from somebody's "
               "luggage. When the dragons returned to carry us off, we charged forward together and beat them to death!")
    sm.sendSay("We ate well that night. And while we sat around the campfire, thinking of our fallen comrades, I "
               "reached an epiphany.\r\n\r\nSome among us were seasoned warriors, but just as many were flabby tourists. "
               "The only reason we survived is because we banded together..")
    sm.sendSay("I realized what was inherently wrong with the part-time job system.")
    sm.sendSay("Nothing is gained by going it alone. But working as a group, the strengths of one compensate for the "
               "weaknesses of another.\r\n\r\n#bWhen people work together#k, even a pudgy sightseer can take down a "
               "giant dragon.")
    sm.sendSay("After a few months on the island, we managed to capture and tame enough dragons to fly the remaining "
               "survivors to safety. And when I returned to civilization, I knew exactly what I had to do. \r\n\r\n"
               "First, I told my boss to suck an egg, and I quit. And then, I started my #bgrand new project#k.")
    sm.sendSay("And that project is, the #b#e<Legion System>!#n#k I'm going to help all those sad, weak, and flabby "
               "Maplers reach their true potential by pairing them with other warriors!\r\n\r\nThe end result? "
               "Everybody makes mad gains and gets swole like me! Oh and they'll probably level up faster.")
    sm.sendSay("#h0#! Don't you want to put together a #bLegion#k of swole bros to punch dragons in the face and "
               "unlock stat bonuses?\r\nIf you're interested, or have any questions, just talk to me or my squire"
               " and fellow cruise survivor, Pancho Sanza.")
    sm.progressMessageFont(3, 20, 20, 0, "You can now manage your Legion from the Menu.")
