package com.crmsystem.service.impl;

import com.crmsystem.dao.MenuDao;
import com.crmsystem.enity.Menu;
import com.crmsystem.service.MenuService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author fan
 * @描述:
 * @date 2015/11/3016:50
 */
@Service
public class MenuServiceImpl implements MenuService {
    List<Menu> list = new ArrayList<Menu>();
    Map<String,Menu> menus = new HashMap<String,Menu>();
    @Resource
    private MenuDao menuDao;

    @Override
    public  List<Menu> getFirstMenus() {
        list = menuDao.getFirstMenus();
        return list;
    }

    /**
     * 根据menuid查询该菜单下面的一级菜单
     *
     * @param menuid
     * @return
     */
    @Override
    public List<Menu> getSecondMenus(String menuid) {
        list = menuDao.getMenus(menuid);

        return list;
    }
}
