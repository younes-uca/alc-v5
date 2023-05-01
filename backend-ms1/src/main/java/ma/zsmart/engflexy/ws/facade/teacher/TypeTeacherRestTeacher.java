package  ma.zsmart.engflexy.ws.facade.teacher;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.TypeTeacher;
import ma.zsmart.engflexy.bean.history.TypeTeacherHistory;
import ma.zsmart.engflexy.dao.criteria.core.TypeTeacherCriteria;
import ma.zsmart.engflexy.dao.criteria.history.TypeTeacherHistoryCriteria;
import ma.zsmart.engflexy.service.facade.teacher.TypeTeacherTeacherService;
import ma.zsmart.engflexy.ws.converter.TypeTeacherConverter;
import ma.zsmart.engflexy.ws.dto.TypeTeacherDto;
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

@Api("Manages typeTeacher services")
@RestController
@RequestMapping("/api/teacher/typeTeacher/")
public class TypeTeacherRestTeacher  extends AbstractController<TypeTeacher, TypeTeacherDto, TypeTeacherHistory, TypeTeacherCriteria, TypeTeacherHistoryCriteria, TypeTeacherTeacherService, TypeTeacherConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all typeTeachers")
    @GetMapping("")
    public ResponseEntity<List<TypeTeacherDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all typeTeachers")
    @GetMapping("optimized")
    public ResponseEntity<List<TypeTeacherDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a typeTeacher by id")
    @GetMapping("id/{id}")
    public ResponseEntity<TypeTeacherDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  typeTeacher")
    @PostMapping("")
    public ResponseEntity<TypeTeacherDto> save(@RequestBody TypeTeacherDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  typeTeacher")
    @PutMapping("")
    public ResponseEntity<TypeTeacherDto> update(@RequestBody TypeTeacherDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of typeTeacher")
    @PostMapping("multiple")
    public ResponseEntity<List<TypeTeacherDto>> delete(@RequestBody List<TypeTeacherDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified typeTeacher")
    @DeleteMapping("")
    public ResponseEntity<TypeTeacherDto> delete(@RequestBody TypeTeacherDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified typeTeacher")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple typeTeachers by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds typeTeachers by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<TypeTeacherDto>> findByCriteria(@RequestBody TypeTeacherCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated typeTeachers by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody TypeTeacherCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports typeTeachers by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody TypeTeacherCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets typeTeacher data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody TypeTeacherCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets typeTeacher history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets typeTeacher paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody TypeTeacherHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports typeTeacher history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody TypeTeacherHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets typeTeacher history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody TypeTeacherHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public TypeTeacherRestTeacher (TypeTeacherTeacherService service, TypeTeacherConverter converter) {
        super(service, converter);
    }


}