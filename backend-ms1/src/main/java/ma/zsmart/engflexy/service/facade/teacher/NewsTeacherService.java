package ma.zsmart.engflexy.service.facade.teacher;

import java.util.List;
import ma.zsmart.engflexy.bean.core.News;
import ma.zsmart.engflexy.dao.criteria.core.NewsCriteria;
import ma.zsmart.engflexy.dao.criteria.history.NewsHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface NewsTeacherService extends  IService<News,NewsCriteria, NewsHistoryCriteria>  {




}
