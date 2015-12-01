package com.crmsystem.dao;

import com.crmsystem.enity.Menu;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author fan
 * @描述:
 * @date 2015/11/3016:41
 */
@Repository
public interface MenuDao {

    /**
     * 描述:查询菜单，可查询子菜单
     * @return
     */
    @Select("select * from t_system_zhfw_menu where FIND_IN_SET(menuid, getChildList(#{menuid}))")
    public List<Menu> getMenus(String menuid);


    /**
     * 描述：查询一级菜单
     * @return
     */
    @Select("select t1.* from t_system_zhfw_menu t1 where EXISTS(select t2.* from t_system_zhfw_menu t2 where t1.menuid=t2.fmenuid)")
    public List<Menu> getFirstMenus();
}
