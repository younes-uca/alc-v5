package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.GroupeEtude;
import ma.zsmart.engflexy.bean.history.GroupeEtudeHistory;
import ma.zsmart.engflexy.dao.criteria.core.GroupeEtudeCriteria;
import ma.zsmart.engflexy.dao.criteria.history.GroupeEtudeHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.GroupeEtudeDao;
import ma.zsmart.engflexy.dao.facade.history.GroupeEtudeHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.GroupeEtudeSpecification;
import ma.zsmart.engflexy.service.facade.teacher.GroupeEtudeTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class GroupeEtudeTeacherServiceImpl extends AbstractServiceImpl<GroupeEtude,GroupeEtudeHistory, GroupeEtudeCriteria, GroupeEtudeHistoryCriteria, GroupeEtudeDao,
GroupeEtudeHistoryDao> implements GroupeEtudeTeacherService {




    public void configure() {
        super.configure(GroupeEtude.class,GroupeEtudeHistory.class, GroupeEtudeHistoryCriteria.class, GroupeEtudeSpecification.class);
    }

    public GroupeEtudeTeacherServiceImpl(GroupeEtudeDao dao, GroupeEtudeHistoryDao historyDao) {
        super(dao, historyDao);
    }

}