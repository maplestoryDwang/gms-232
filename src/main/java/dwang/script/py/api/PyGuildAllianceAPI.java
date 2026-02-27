package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.alliance.AllianceResult;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.result.GuildResult;
import net.swordie.ms.client.guild.result.GuildType;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.world.World;
import net.swordie.orm.dao.AllianceDao;
import net.swordie.orm.dao.SworDaoFactory;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyGuildAllianceAPI.java
 * @Description TODO
 * @createTime 2026-02-27 16:58
 */

public interface PyGuildAllianceAPI extends DwangScriptBaseApi {

     AllianceDao allianceDao = (AllianceDao) SworDaoFactory.getByClass(Alliance.class);

    
    default void showGuildCreateWindow() {
        getChr().write(WvsContext.guildResult(GuildResult.msg(GuildType.Req_InputGuildName)));
    }

    
    default boolean checkAllianceName(String name) {
        World world = getChr().getClient().getWorld();
        return world.getAlliance(name) == null;
    }

    default void incrementMaxGuildMembers(int amount) {
        Guild guild = getChr().getGuild();
        guild.setMaxMembers(guild.getMaxMembers() + amount);
        guild.broadcast(WvsContext.guildResult(GuildResult.incMaxMemberNum(guild)));
    }

    default void createAlliance(String name, Char other) {
        Alliance alliance = new Alliance(true);
        alliance.setName(name);
        alliance.addGuild(getChr().getGuild());
        alliance.addGuild(other.getGuild());
        GuildMember chrMember = getChr().getGuild().getMemberByCharID(getChr().getId());
        chrMember.setAllianceGrade(1);
        GuildMember otherMember = other.getGuild().getMemberByCharID(other.getId());
        otherMember.setAllianceGrade(2);
        allianceDao.saveOrUpdate(alliance);
        getChr().getGuild().setAlliance(alliance);
        other.getGuild().setAlliance(alliance);
        alliance.broadcast(WvsContext.allianceResult(AllianceResult.createDone(alliance)));
        getChr().deductMoney(5000000);

        getChr().getWorld().addAlliance(alliance);
    }
}
