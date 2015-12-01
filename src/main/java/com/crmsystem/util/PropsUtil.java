package com.crmsystem.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @描述:属性文件工具类
 * @作者: fan
 * @创建时间:2015年11月19日 下午2:17:27
 * @项目名称 crmsystem
 */
public class PropsUtil {
	private static final Logger LOGGER = LoggerFactory.getLogger(PropsUtil.class);
	
	/**
	 * @描述:加载属性文件
	 * @创建时间:2015年11月19日下午2:19:47
	 * @作者:fan
	 * @param fileName
	 * @return
	 */
	public static Properties loadProps(String fileName){
		Properties props = null;
		InputStream is = null;
		try {
			is = Thread.currentThread().getContextClassLoader().getResourceAsStream(fileName);
			if(is==null){
				throw new FileNotFoundException(fileName+"没有找到");
			}
			props = new Properties();
			props.load(is);
		} catch (Exception e) {
			LOGGER.error("加载属性文件错误:\t"+fileName,e);
		}finally{
			if(is!=null){
				try {
					is.close();
				} catch (IOException e) {
					LOGGER.error("关闭InputStream错误!",e);
				}
			}
		}
		return props;
	}
	
	/**
	 * @描述:获取字符型属性(默认值为空字符串)
	 * @创建时间:2015年11月19日下午2:33:10
	 * @作者:fan
	 * @param props
	 * @param key
	 * @return
	 */
	public static String getString(Properties props,String key){
		return getString(props, key,"");
	}

	/**
	 * 
	 * @描述:获取字符型属性(可指定默认值)
	 * @创建时间:2015年11月19日下午2:37:10
	 * @作者:fan
	 * @param props
	 * @param key
	 * @param defaultValue
	 * @return
	 */
	public static String getString(Properties props, String key, String defaultValue) {
		String value = defaultValue;
		if(props.containsKey(key)){
			value = props.getProperty(key);
		}
		return value;
	}
	
	/**
	 * @描述:获取数值型属性(默认值为0)
	 * @创建时间:2015年11月19日下午2:40:46
	 * @作者:fan
	 * @param props
	 * @param key
	 * @return
	 */
	public static int getInt(Properties props,String key){
		return getInt(props, key,0);
	}

	/**
	 * @描述:获取数值型类型(可指定默认值)
	 * @创建时间:2015年11月19日下午2:41:39
	 * @作者:fan
	 * @param props
	 * @param key
	 * @param defaultValue
	 * @return
	 */
	public static int getInt(Properties props, String key, int defaultValue) {
		int value = defaultValue;
		if(props.containsKey(key))
		{
			value = CastUtil.castInt(props.getProperty(key));
		}
		return value;
	}
	
	/**
	 * @描述:获取布尔值类型(默认值为false)
	 * @创建时间:2015年11月19日下午2:45:37
	 * @作者:fan
	 * @param props
	 * @param key
	 * @return
	 */
	public static boolean getBoolean(Properties props,String key){
		return getBoolean(props, key,false);
	}

	/**
	 * @描述:获取布尔值类型(可指定默认值)
	 * @创建时间:2015年11月19日下午2:46:29
	 * @作者:fan
	 * @param props
	 * @param key
	 * @param bool
	 * @return
	 */
	public static boolean getBoolean(Properties props, String key, boolean bool) {
		boolean b = bool;
		if(props.containsKey(key)){
			b = CastUtil.castBoolean(props.getProperty(key));
		}
		return b;
	}
}
