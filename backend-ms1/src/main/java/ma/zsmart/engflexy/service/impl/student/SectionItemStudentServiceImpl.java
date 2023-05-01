package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.SectionItem;
import ma.zsmart.engflexy.bean.history.SectionItemHistory;
import ma.zsmart.engflexy.dao.criteria.core.SectionItemCriteria;
import ma.zsmart.engflexy.dao.criteria.history.SectionItemHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.SectionItemDao;
import ma.zsmart.engflexy.dao.facade.history.SectionItemHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.SectionItemSpecification;
import ma.zsmart.engflexy.service.facade.student.SectionItemStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.SectionStudentService ;


import java.util.List;
@Service
public class SectionItemStudentServiceImpl extends AbstractServiceImpl<SectionItem,SectionItemHistory, SectionItemCriteria, SectionItemHistoryCriteria, SectionItemDao,
SectionItemHistoryDao> implements SectionItemStudentService {



    public List<SectionItem> findBySectionId(Long id){
        return dao.findBySectionId(id);
    }
    public int deleteBySectionId(Long id){
        return dao.deleteBySectionId(id);
    }

    public void configure() {
        super.configure(SectionItem.class,SectionItemHistory.class, SectionItemHistoryCriteria.class, SectionItemSpecification.class);
    }

    @Autowired
    private SectionStudentService sectionService ;
    public SectionItemStudentServiceImpl(SectionItemDao dao, SectionItemHistoryDao historyDao) {
        super(dao, historyDao);
    }

}