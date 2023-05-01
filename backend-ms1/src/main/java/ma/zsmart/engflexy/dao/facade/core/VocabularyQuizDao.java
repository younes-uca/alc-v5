package ma.zsmart.engflexy.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.zsmart.engflexy.zynerator.repository.AbstractRepository;
import ma.zsmart.engflexy.bean.core.VocabularyQuiz;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface VocabularyQuizDao extends AbstractRepository<VocabularyQuiz,Long>  {

    List<VocabularyQuiz> findBySectionId(Long id);
    int deleteBySectionId(Long id);

    @Query("SELECT NEW VocabularyQuiz(item.id,item.libelle) FROM VocabularyQuiz item")
    List<VocabularyQuiz> findAllOptimized();
}
