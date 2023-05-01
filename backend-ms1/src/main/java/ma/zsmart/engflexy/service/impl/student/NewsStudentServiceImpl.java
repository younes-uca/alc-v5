package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.News;
import ma.zsmart.engflexy.bean.history.NewsHistory;
import ma.zsmart.engflexy.dao.criteria.core.NewsCriteria;
import ma.zsmart.engflexy.dao.criteria.history.NewsHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.NewsDao;
import ma.zsmart.engflexy.dao.facade.history.NewsHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.NewsSpecification;
import ma.zsmart.engflexy.service.facade.student.NewsStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class NewsStudentServiceImpl extends AbstractServiceImpl<News,NewsHistory, NewsCriteria, NewsHistoryCriteria, NewsDao,
NewsHistoryDao> implements NewsStudentService {


    public News findByReferenceEntity(News t){
        return  dao.findByRef(t.getRef());
    }


    public void configure() {
        super.configure(News.class,NewsHistory.class, NewsHistoryCriteria.class, NewsSpecification.class);
    }

    public NewsStudentServiceImpl(NewsDao dao, NewsHistoryDao historyDao) {
        super(dao, historyDao);
    }

}