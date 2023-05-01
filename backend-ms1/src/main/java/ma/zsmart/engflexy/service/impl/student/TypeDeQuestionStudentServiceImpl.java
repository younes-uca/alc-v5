package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.TypeDeQuestion;
import ma.zsmart.engflexy.bean.history.TypeDeQuestionHistory;
import ma.zsmart.engflexy.dao.criteria.core.TypeDeQuestionCriteria;
import ma.zsmart.engflexy.dao.criteria.history.TypeDeQuestionHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.TypeDeQuestionDao;
import ma.zsmart.engflexy.dao.facade.history.TypeDeQuestionHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.TypeDeQuestionSpecification;
import ma.zsmart.engflexy.service.facade.student.TypeDeQuestionStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class TypeDeQuestionStudentServiceImpl extends AbstractServiceImpl<TypeDeQuestion,TypeDeQuestionHistory, TypeDeQuestionCriteria, TypeDeQuestionHistoryCriteria, TypeDeQuestionDao,
TypeDeQuestionHistoryDao> implements TypeDeQuestionStudentService {


    public TypeDeQuestion findByReferenceEntity(TypeDeQuestion t){
        return  dao.findByRef(t.getRef());
    }


    public void configure() {
        super.configure(TypeDeQuestion.class,TypeDeQuestionHistory.class, TypeDeQuestionHistoryCriteria.class, TypeDeQuestionSpecification.class);
    }

    public TypeDeQuestionStudentServiceImpl(TypeDeQuestionDao dao, TypeDeQuestionHistoryDao historyDao) {
        super(dao, historyDao);
    }

}