package net.swordie.ms.events;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Portal;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelperFactory;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class Events {

    /**
     * Event triggered when attacking
     *
     * @param chr character that did the attack
     * @param attackInfo attackInfo regarding that attack
     */
    public static void onAttack(Char chr, AttackInfo attackInfo) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(chr.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onAttack(chr, attackInfo);
        }
    }

    /**
     * Event triggered when a mob is damaged
     *
     * @param attacker character that dealt the damage
     * @param mob mob that took the damage
     * @param damage total amount of damage done
     * @param oldHp mob's old HP
     * @param newHp mob's new HP
     */
    public static void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(mob.getField().getInstance());
        if (instanceHelper != null) {
            instanceHelper.onMobDamaged(attacker, mob, damage, oldHp, newHp);
        } else {
            instanceHelper = InstanceHelperFactory.getHelperByMob(mob);
            if (instanceHelper != null) {
                instanceHelper.onMobDamaged(attacker, mob, damage, oldHp, newHp);
            }
        }

        var fieldEvent = mob.getField().getFieldEvent();
        if (fieldEvent != null) {
            fieldEvent.onMobDamaged(attacker, mob, damage, oldHp, newHp);
        }

        if (newHp <= 0 && attacker != null && attacker.getField() != null) {
            attacker.getField().getFieldOwnershipManager().updateActiveChar(attacker);
        }
    }

    /**
     * Event triggered when an item is looted
     *
     * @param chr character that looted the item
     * @param item item that is looted by the character
     * @param quantity quantity looted
     */
    public static void onItemLooted(Char chr, Item item, int quantity) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(chr.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onItemLooted(chr, item, quantity);
        }
    }

    /**
     * Event triggered when an item is dropped from inventory
     *
     * @param chr character that dropped the item
     * @param item item that is dropped
     * @param quantity quantity dropped
     * @param position drop's position
     */
    public static void onItemDropped(Char chr, Item item, int quantity, Position position, Drop drop) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(chr.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onItemDropped(chr, item, quantity, position, drop);
        }
    }

    /**
     * Event triggered when an item is dropped from a mob
     *
     * @param quantity quantity dropped
     * @param position drop's position
     */
    public static void onItemDroppedByMob(Field field, int quantity, Position position, Drop drop){
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(field.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onItemDroppedByMob(field, quantity, position, drop);
        }
    }

    /**
     * Event triggered when a Fixed Move Direction mob hits it's end point
     *
     * @param mob mob that has reached it's end point
     */
    public static void onMobFixedMoveDirUpdate(Mob mob) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(mob.getField().getInstance());
        if (instanceHelper != null) {
            instanceHelper.onMobFixedMoveDirUpdate(mob);
        }
    }

    /**
     * Event triggered when a mob has moved
     * @param mob mob that has moved
     */
    public static void onMobMove(Mob mob) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(mob.getField().getInstance());
        if (instanceHelper != null) {
            instanceHelper.onMobMove(mob);
        }
    }

    /**
     * Event triggered when a Mob uses a skill
     *
     * @param mob Mob that uses the skill
     * @param msi MobSkillInfo
     * @param msId MobSkillId
     */
    public static void onMobSkill(Mob mob, MobSkillInfo msi, MobSkillID msId) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(mob.getField().getInstance());
        if (instanceHelper != null) {
            instanceHelper.onMobSkill(mob, msi, msId);
        }
    }

    /**
     * Event triggered when player lands in a portal that sends PortalTeleportRequest
     *
     * @param chr player that is affected
     * @param portal portal the player landed in
     */
    public static void onPortalTeleportRequest(Char chr, Portal portal) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(chr.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onPortalTeleportRequest(chr, portal);
        }
    }

    /**
     * Event triggered when character dies
     * @param chr character that has died
     */
    public static void onChrDeath(Char chr) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(chr.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onChrDeath(chr);
        }
    }

    /**
     * Event triggered when character gets hit
     * @param chr character that got hit
     * @param dmgAmount amount of damage that the character took
     */
    public static void onChrHit(Char chr, int dmgAmount) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(chr.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onChrHit(chr, dmgAmount);
        }
    }

    /**
     * Event triggered when a mob dies
     * @param mob mob that has died
     */
    public static void onMobDeath(Field field, Mob mob) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(field.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onMobDeath(field, mob);
        }
    }

    /**
     * Event triggered when a Mob is spawned via Field#generateMobs.
     * @param field The Field on which the mob is spawned
     * @param mob The Mob that has been spawned
     */
    public static void onMobSpawn(Field field, Mob mob) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(field.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onMobSpawn(field, mob);
        }
    }

    /**
     * Event triggered when a quick-time event succeeded
     * @param chr chr that succeeded the quick-time event
     */
    public static void onQuickTimeEventSuccess(Char chr) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(chr.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onQuickTimeEventSuccess(chr);
        }
    }

    /**
     * Event triggered when 'reactor activate by mob' packet is sent
     * @param chr character the packet is sent to
     * @param mob mob that activates the reactor
     * @param reactor reactor that is activated
     */
    public static void onReactorRectInMob(Char chr, Mob mob, Reactor reactor) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(chr.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onReactorRectInMob(chr, mob, reactor);
        }
    }

    /**
     * Event triggered when party is disbanded
     * @param party
     */
    public static void onPartyDisband(Party party) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(party.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onPartyDisband(party);
        }
    }

    /**
     * Event triggered when party is created
     * @param party
     */
    public static void onPartyCreated(Party party) {
        var instanceHelper = InstanceHelperFactory.getHelperByInstance(party.getInstance());
        if (instanceHelper != null) {
            instanceHelper.onPartyCreated(party);
        }
    }

    /**
     * Event triggered when chr warps or logs out (newField == null)
     * @param chr
     * @param newField
     */
    public static void onWarp(Char chr, Field currentField, Field newField) {

        if (chr.getJobHandler() != null) {
            chr.getJobHandler().onWarp(currentField, newField);
        }

        // Field Ownership
        if (currentField != null && currentField.getFieldOwnershipManager() != null) {
            currentField.getFieldOwnershipManager().removeActiveChar(chr);
        }

        if(newField != null) {
            var instanceHelper = InstanceHelperFactory.getHelperByInstance(newField.getInstance());
            if (instanceHelper != null) {
                instanceHelper.onWarp(chr, currentField, newField);
            }
        }
    }

    public static void onRemoveCTS(Char chr, CharacterTemporaryStat cts, Option option) {
        if (chr != null && chr.getJobHandler() != null) {
            chr.getJobHandler().handleRemoveCTS(cts, option);
        }
    }

    public static void onPutCTS(Char chr, CharacterTemporaryStat cts, Option option) {
        if (chr != null && chr.getJobHandler() != null) {
            chr.getJobHandler().handlePutCTS(cts, option);
        }
    }
}
