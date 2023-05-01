package ma.zsmart.engflexy.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.zsmart.engflexy.zynerator.repository.AbstractRepository;
import ma.zsmart.engflexy.bean.core.TypeDeQuestion;
import org.springframework.stereotype.Repository;
import ma.zsmart.engflexy.bean.core.TypeDeQuestion;
import java.util.List;


@Repository
public interface TypeDeQuestionDao extends AbstractRepository<TypeDeQuestion,Long>  {
    TypeDeQuestion findByRef(String ref);
    int deleteByRef(String ref);


    @Query("SELECT NEW TypeDeQuestion(item.id,item.lib) FROM TypeDeQuestion item")
    List<TypeDeQuestion> findAllOptimized();
}
