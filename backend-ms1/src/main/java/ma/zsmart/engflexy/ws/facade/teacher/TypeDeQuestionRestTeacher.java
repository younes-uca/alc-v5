package  ma.zsmart.engflexy.ws.facade.teacher;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.TypeDeQuestion;
import ma.zsmart.engflexy.bean.history.TypeDeQuestionHistory;
import ma.zsmart.engflexy.dao.criteria.core.TypeDeQuestionCriteria;
import ma.zsmart.engflexy.dao.criteria.history.TypeDeQuestionHistoryCriteria;
import ma.zsmart.engflexy.service.facade.teacher.TypeDeQuestionTeacherService;
import ma.zsmart.engflexy.ws.converter.TypeDeQuestionConverter;
import ma.zsmart.engflexy.ws.dto.TypeDeQuestionDto;
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

@Api("Manages typeDeQuestion services")
@RestController
@RequestMapping("/api/teacher/typeDeQuestion/")
public class TypeDeQuestionRestTeacher  extends AbstractController<TypeDeQuestion, TypeDeQuestionDto, TypeDeQuestionHistory, TypeDeQuestionCriteria, TypeDeQuestionHistoryCriteria, TypeDeQuestionTeacherService, TypeDeQuestionConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all typeDeQuestions")
    @GetMapping("")
    public ResponseEntity<List<TypeDeQuestionDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all typeDeQuestions")
    @GetMapping("optimized")
    public ResponseEntity<List<TypeDeQuestionDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a typeDeQuestion by id")
    @GetMapping("id/{id}")
    public ResponseEntity<TypeDeQuestionDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  typeDeQuestion")
    @PostMapping("")
    public ResponseEntity<TypeDeQuestionDto> save(@RequestBody TypeDeQuestionDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  typeDeQuestion")
    @PutMapping("")
    public ResponseEntity<TypeDeQuestionDto> update(@RequestBody TypeDeQuestionDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of typeDeQuestion")
    @PostMapping("multiple")
    public ResponseEntity<List<TypeDeQuestionDto>> delete(@RequestBody List<TypeDeQuestionDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified typeDeQuestion")
    @DeleteMapping("")
    public ResponseEntity<TypeDeQuestionDto> delete(@RequestBody TypeDeQuestionDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified typeDeQuestion")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple typeDeQuestions by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds typeDeQuestions by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<TypeDeQuestionDto>> findByCriteria(@RequestBody TypeDeQuestionCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated typeDeQuestions by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody TypeDeQuestionCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports typeDeQuestions by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody TypeDeQuestionCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets typeDeQuestion data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody TypeDeQuestionCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets typeDeQuestion history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets typeDeQuestion paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody TypeDeQuestionHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports typeDeQuestion history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody TypeDeQuestionHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets typeDeQuestion history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody TypeDeQuestionHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public TypeDeQuestionRestTeacher (TypeDeQuestionTeacherService service, TypeDeQuestionConverter converter) {
        super(service, converter);
    }


}