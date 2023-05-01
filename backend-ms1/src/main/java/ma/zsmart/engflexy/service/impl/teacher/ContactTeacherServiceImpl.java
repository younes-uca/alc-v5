package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.Contact;
import ma.zsmart.engflexy.bean.history.ContactHistory;
import ma.zsmart.engflexy.dao.criteria.core.ContactCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ContactHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ContactDao;
import ma.zsmart.engflexy.dao.facade.history.ContactHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ContactSpecification;
import ma.zsmart.engflexy.service.facade.teacher.ContactTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class ContactTeacherServiceImpl extends AbstractServiceImpl<Contact,ContactHistory, ContactCriteria, ContactHistoryCriteria, ContactDao,
ContactHistoryDao> implements ContactTeacherService {




    public void configure() {
        super.configure(Contact.class,ContactHistory.class, ContactHistoryCriteria.class, ContactSpecification.class);
    }

    public ContactTeacherServiceImpl(ContactDao dao, ContactHistoryDao historyDao) {
        super(dao, historyDao);
    }

}