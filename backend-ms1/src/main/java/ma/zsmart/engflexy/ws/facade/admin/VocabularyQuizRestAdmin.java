package  ma.zsmart.engflexy.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.VocabularyQuiz;
import ma.zsmart.engflexy.bean.history.VocabularyQuizHistory;
import ma.zsmart.engflexy.dao.criteria.core.VocabularyQuizCriteria;
import ma.zsmart.engflexy.dao.criteria.history.VocabularyQuizHistoryCriteria;
import ma.zsmart.engflexy.service.facade.admin.VocabularyQuizAdminService;
import ma.zsmart.engflexy.ws.converter.VocabularyQuizConverter;
import ma.zsmart.engflexy.ws.dto.VocabularyQuizDto;
import ma.zsmart.engflexy.zynerator.controller.AbstractController;
import ma.zsmart.engflexy.zynerator.dto.AuditEntityDto;
import ma.zsmart.engflexy.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zsmart.engflexy.zynerator.process.Result;

import org.springframework.web.multipart.MultipartFile;
import ma.zsmart.engflexy.zynerator.dto.FileTempDto;

@Api("Manages vocabularyQuiz services")
@RestController
@RequestMapping("/api/admin/vocabularyQuiz/")
public class VocabularyQuizRestAdmin  extends AbstractController<VocabularyQuiz, VocabularyQuizDto, VocabularyQuizHistory, VocabularyQuizCriteria, VocabularyQuizHistoryCriteria, VocabularyQuizAdminService, VocabularyQuizConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all vocabularyQuizs")
    @GetMapping("")
    public ResponseEntity<List<VocabularyQuizDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all vocabularyQuizs")
    @GetMapping("optimized")
    public ResponseEntity<List<VocabularyQuizDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a vocabularyQuiz by id")
    @GetMapping("id/{id}")
    public ResponseEntity<VocabularyQuizDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  vocabularyQuiz")
    @PostMapping("")
    public ResponseEntity<VocabularyQuizDto> save(@RequestBody VocabularyQuizDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  vocabularyQuiz")
    @PutMapping("")
    public ResponseEntity<VocabularyQuizDto> update(@RequestBody VocabularyQuizDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of vocabularyQuiz")
    @PostMapping("multiple")
    public ResponseEntity<List<VocabularyQuizDto>> delete(@RequestBody List<VocabularyQuizDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified vocabularyQuiz")
    @DeleteMapping("")
    public ResponseEntity<VocabularyQuizDto> delete(@RequestBody VocabularyQuizDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified vocabularyQuiz")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple vocabularyQuizs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by section id")
    @GetMapping("section/id/{id}")
    public List<VocabularyQuiz> findBySectionId(@PathVariable Long id){
        return service.findBySectionId(id);
    }
    @ApiOperation("delete by section id")
    @DeleteMapping("section/id/{id}")
    public int deleteBySectionId(@PathVariable Long id){
        return service.deleteBySectionId(id);
    }
    @ApiOperation("Finds a vocabularyQuiz and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<VocabularyQuizDto> findWithAssociatedLists(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @ApiOperation("Finds vocabularyQuizs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<VocabularyQuizDto>> findByCriteria(@RequestBody VocabularyQuizCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated vocabularyQuizs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody VocabularyQuizCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports vocabularyQuizs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody VocabularyQuizCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets vocabularyQuiz data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody VocabularyQuizCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets vocabularyQuiz history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets vocabularyQuiz paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody VocabularyQuizHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports vocabularyQuiz history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody VocabularyQuizHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets vocabularyQuiz history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody VocabularyQuizHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public VocabularyQuizRestAdmin (VocabularyQuizAdminService service, VocabularyQuizConverter converter) {
        super(service, converter);
    }


}