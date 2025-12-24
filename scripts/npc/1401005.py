# Marianne - 1401005 |  Lumiere
# Custom Phantom NPC  for stolen skills

from net.swordie.ms.client.jobs.legend import SkillStealManager
from net.swordie.ms.connection.packet import UserLocal
from net.swordie.ms.constants import JobConstants
from net.swordie.ms.loaders import SkillData

cost = 1000000  # 1 mil

if not JobConstants.isPhantom(chr.getJob()):
    sm.sendSayOkay("My name is Marianne! I am about to serve tea to the crew.")
    sm.dispose()

steal_skill_list = [
    (112, "Hero", SkillData.getSkillsByJob(100) + SkillData.getSkillsByJob(110) + SkillData.getSkillsByJob(111) + SkillData.getSkillsByJob(112)),
    (122, "Paladin", SkillData.getSkillsByJob(100) + SkillData.getSkillsByJob(120) + SkillData.getSkillsByJob(121) + SkillData.getSkillsByJob(122)),
    (132, "Dark Knight", SkillData.getSkillsByJob(100) + SkillData.getSkillsByJob(130) + SkillData.getSkillsByJob(131) + SkillData.getSkillsByJob(132)),

    (212, "Mage Fire Poison", SkillData.getSkillsByJob(200) + SkillData.getSkillsByJob(210) + SkillData.getSkillsByJob(211) + SkillData.getSkillsByJob(212)),
    (222, "Mage Ice Lightning", SkillData.getSkillsByJob(200) + SkillData.getSkillsByJob(220) + SkillData.getSkillsByJob(221) + SkillData.getSkillsByJob(222)),
    (232, "Bishop", SkillData.getSkillsByJob(200) + SkillData.getSkillsByJob(230) + SkillData.getSkillsByJob(231) + SkillData.getSkillsByJob(232)),

    (312, "Bowmaster", SkillData.getSkillsByJob(300) + SkillData.getSkillsByJob(310) + SkillData.getSkillsByJob(311) + SkillData.getSkillsByJob(312)),
    (322, "Marksman", SkillData.getSkillsByJob(300) + SkillData.getSkillsByJob(320) + SkillData.getSkillsByJob(321) + SkillData.getSkillsByJob(322)),
    (332, "Pathfinder", SkillData.getSkillsByJob(301) + SkillData.getSkillsByJob(330) + SkillData.getSkillsByJob(331) + SkillData.getSkillsByJob(332)),

    (412, "Night Lord", SkillData.getSkillsByJob(400) + SkillData.getSkillsByJob(410) + SkillData.getSkillsByJob(411) + SkillData.getSkillsByJob(412)),
    (422, "Shadower", SkillData.getSkillsByJob(400) + SkillData.getSkillsByJob(420) + SkillData.getSkillsByJob(421) + SkillData.getSkillsByJob(422)),
    (434, "Blade Master", SkillData.getSkillsByJob(430) + SkillData.getSkillsByJob(431) + SkillData.getSkillsByJob(432) + SkillData.getSkillsByJob(433) + SkillData.getSkillsByJob(434)),

    (512, "Buccaneer", SkillData.getSkillsByJob(500) + SkillData.getSkillsByJob(510) + SkillData.getSkillsByJob(511) + SkillData.getSkillsByJob(512)),
    (522, "Corsair", SkillData.getSkillsByJob(500) + SkillData.getSkillsByJob(520) + SkillData.getSkillsByJob(521) + SkillData.getSkillsByJob(522)),
    (532, "Cannon Master", SkillData.getSkillsByJob(501) + SkillData.getSkillsByJob(530) + SkillData.getSkillsByJob(531) + SkillData.getSkillsByJob(532)),
]

reply = "I have mastered all explorer skills!\r\n" \
        "I'll let you take a peek into my skills for a small fee\r\n#b" \
        "#L0#Reset my Stolen Skills#l\r\n" \
        "\r\n"
i = 1
for tup in steal_skill_list:
    reply += "#L{}#{}#l\r\n".format(i, tup[1])
    i += 1
sel = sm.sendNext(reply)

# Reset Stolen Skills
if sel == 0:
    if sm.sendAskYesNo("Are you sure you want to reset your stolen skills?"):
        SkillStealManager.resetStolenSkills(chr)
    sm.dispose()

sel = sel - 1

if chr.getMoney() < cost:
    sm.sendSayOkay("I want #b{}#k mesos first.".format(sm.formatNumber(cost)))
    sm.dispose()

sm.deductMesos(cost)
chr.write(UserLocal.resultStealSkillList(set(steal_skill_list[sel][2]), 4, 1, steal_skill_list[sel][0]))
