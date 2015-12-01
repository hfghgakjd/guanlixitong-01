package com.crmsystem.service;

import com.crmsystem.enity.Menu;

import java.util.List;

/**
 * @author fan
 * @描述:
 * @date 2015/11/3016:43
 */
public interface MenuService {
    /**
     * 描述：查询所有的一级菜单
     * @return
     */
    public List<Menu> getFirstMenus();

    /**
     * 根据menuid查询该菜单下面的一级菜单
     * @param menuid
     * @return
     */
    List<Menu> getSecondMenus(String menuid);
}
