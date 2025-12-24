# Green Seal in Floor 2 of Oz Tower
# Undersea Tower of Oz : Undersea 2F
# 992002000
# PortalId: 5
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.connection.packet import ReactorPool
from net.swordie.ms.connection.packet import WvsContext
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

instance = chr.getInstance()
field = chr.getField()
if instance is not None:

    if not instance.hasProperty("g"):

        reactor = field.getLifeByTemplateId(OzConstants.GREEN_REACTOR)

        if reactor.getState() < 7:
            colour = instance.getProperty(OzConstants.F2_CURRENT_CARD_COLOUR)
            number = instance.getProperty(OzConstants.F2_CURRENT_CARD_NUMBER)

            if ("v" in colour or "g" in colour) and number > int(reactor.getState()) + 1:

                instance.addProperty(OzConstants.F2_CURRENT_CARD_COLOUR, "")
                instance.addProperty(OzConstants.F2_CURRENT_CARD_NUMBER, 0)
                OzTowerModule.hideSealBreakerCard(instance)

                reactor.setState(number - 1)  # Finished
                instance.broadcast(ReactorPool.reactorChangeState(reactor, 0, 0))
                instance.addProperty("g", True)
                instance.addProperty(OzConstants.F2_SEALS_CLEARED, int(instance.getProperty(OzConstants.F2_SEALS_CLEARED)) + 1)
                instance.broadcast(WvsContext.weatherEffectNotice(WeatherEffNoticeType.Oz_Alicia, "You have tricked the Green seal!", 7000))

                if int(instance.getProperty(OzConstants.F2_SEALS_CLEARED)) >= 4:
                    OzTowerModule.clearStage(instance, chr)